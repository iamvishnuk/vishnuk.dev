'use client';

import { cn } from '@/lib/utils';
import { eachDayOfInterval, formatISO, getDay, parseISO } from 'date-fns';
import { useMemo } from 'react';

export type LeetcodeContributionResponse = {
  userName: string;
  days: {
    date: string;
    timestamp: number;
    submissions: number;
  }[];
  totalSubmissions: number;
  totalActiveDays: number;
  streak: number;
  activeYears: number[];
  startDate: string;
  endDate: string;
};

type LeetcodeContributionGraphProps = {
  contribution?: LeetcodeContributionResponse;
};

type Activity = {
  date: string;
  submissions: number;
  level: number;
};

function getDynamicLevel(count: number, max: number) {
  if (count === 0) return 0;
  return Math.ceil((count / max) * 4);
}

const LeetcodeContributionGraph = ({
  contribution
}: LeetcodeContributionGraphProps) => {
  if (!contribution) return null;

  const blockSize = 12;
  const blockGap = 4;
  const monthGap = 10; // Extra gap between months

  const { monthBlocks, totalWidth, totalHeight } = useMemo(() => {
    const calendar = new Map(
      contribution.days.map((d) => [d.date, d.submissions])
    );
    const maxSubmissions = Math.max(
      ...contribution.days.map((d) => d.submissions),
      1
    );

    const startDate = parseISO(contribution.startDate);
    const endDate = parseISO(contribution.endDate);

    const allDays = eachDayOfInterval({
      start: startDate,
      end: endDate
    });

    // Group days by month key "YYYY-MM"
    const daysByMonth = new Map<string, Date[]>();
    allDays.forEach((day) => {
      const monthKey = formatISO(day, { representation: 'date' }).slice(0, 7);
      if (!daysByMonth.has(monthKey)) {
        daysByMonth.set(monthKey, []);
      }
      daysByMonth.get(monthKey)!.push(day);
    });

    const monthBlocks: {
      label: string;
      x: number;
      weeks: Activity[][];
      width: number;
    }[] = [];

    let currentX = 0;

    // Iterate over the grouped months
    Array.from(daysByMonth.entries()).forEach(([monthKey, days]) => {
      // Create weeks for this month
      const weeks: Activity[][] = [];
      let currentWeek: Activity[] = [];

      // Determine padding for the first week of the month
      const firstDayOfMonth = days[0];
      const startDayOfWeek = getDay(firstDayOfMonth); // 0 = Sunday

      // Add empty placeholders for days before the 1st of the month
      for (let i = 0; i < startDayOfWeek; i++) {
        currentWeek.push({ date: '', submissions: 0, level: 0 }); // Empty placeholder
      }

      days.forEach((day) => {
        const date = formatISO(day, { representation: 'date' });
        const submissions = calendar.get(date) ?? 0;

        currentWeek.push({
          date,
          submissions,
          level: getDynamicLevel(submissions, maxSubmissions)
        });

        if (currentWeek.length === 7) {
          weeks.push(currentWeek);
          currentWeek = [];
        }
      });

      // Push incomplete last week (will be padded visually or logically if needed,
      // but usually we just process what we have. If we want strict grid, we can pad end too)
      if (currentWeek.length > 0) {
        // Pad the rest of the week if needed for consistent grid look?
        // Not strictly necessary for rendering loops unless we use index
        // But cleaning up the grid is good.
        while (currentWeek.length < 7) {
          currentWeek.push({ date: '', submissions: 0, level: 0 });
        }
        weeks.push(currentWeek);
      }

      const width = weeks.length * (blockSize + blockGap) - blockGap;

      monthBlocks.push({
        label: firstDayOfMonth.toLocaleString('default', { month: 'short' }),
        x: currentX,
        weeks,
        width
      });

      // Move X for the next month block
      currentX += width + monthGap;
    });

    // Calculate height: 7 days * block + gaps + label space
    const graphHeight = 7 * (blockSize + blockGap) - blockGap;
    const totalHeight = graphHeight + 30; // + space for labels at bottom

    return { monthBlocks, totalWidth: currentX, totalHeight };
  }, [contribution]);

  return (
    <div className='w-full overflow-x-auto px-2'>
      <div className='flex w-max items-center justify-between space-x-3 pb-2'>
        <p className='flex items-center text-sm font-semibold text-gray-600 dark:text-gray-500'>
          <span className='text-lg font-semibold text-gray-700 dark:text-gray-400'>
            {contribution.totalSubmissions}
          </span>
          &nbsp; Submissions in the past year
        </p>
        <p className='text-sm font-semibold text-gray-600 dark:text-gray-500'>
          Total active days: {contribution.totalActiveDays}
        </p>
        <p className='text-sm font-semibold text-gray-600 dark:text-gray-500'>
          Max streak: {contribution.streak}
        </p>
      </div>

      <svg
        width={totalWidth}
        height={totalHeight}
      >
        {monthBlocks.map((block, blockIndex) => (
          <g
            key={block.label + blockIndex}
            transform={`translate(${block.x}, 0)`}
          >
            {/* Weeks in this month */}
            {block.weeks.map((week, wIndex) => (
              <g
                key={wIndex}
                transform={`translate(${wIndex * (blockSize + blockGap)}, 0)`}
              >
                {week.map((day, dIndex) => {
                  if (!day.date) return null; // Skip placeholders
                  return (
                    <rect
                      key={dIndex}
                      x={0}
                      y={dIndex * (blockSize + blockGap)}
                      width={blockSize}
                      height={blockSize}
                      rx={2}
                      data-level={day.level}
                      className={cn(
                        'data-[level="0"]:fill-[#e5e7eb] dark:data-[level="0"]:fill-[#161b22]',
                        'data-[level="1"]:fill-[#fed7aa] dark:data-[level="1"]:fill-[#4a1d00]',
                        'data-[level="2"]:fill-[#fb923c] dark:data-[level="2"]:fill-[#7c2d12]',
                        'data-[level="3"]:fill-[#f97316] dark:data-[level="3"]:fill-[#c2410c]',
                        'data-[level="4"]:fill-[#ea580c] dark:data-[level="4"]:fill-[#ff8c00]'
                      )}
                    >
                      <title>{`${day.submissions} submissions on ${day.date}`}</title>
                    </rect>
                  );
                })}
              </g>
            ))}

            {/* Month Label at the bottom of the block */}
            <text
              x={block.width / 2}
              y={totalHeight - 5}
              textAnchor='middle'
              fill='#888'
              fontSize={12}
            >
              {block.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

export default LeetcodeContributionGraph;
