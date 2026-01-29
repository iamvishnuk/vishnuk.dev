'use client';

import { cn } from '@/lib/utils';
import {
  ContributionGraph,
  ContributionGraphCalendar,
  ContributionGraphBlock,
  Activity,
  ContributionGraphFooter,
  ContributionGraphTotalCount,
  ContributionGraphLegend
} from './kibo-ui/contribution-graph';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from './ui/tooltip';

type GitHubContributionGraphProps = {
  contributions: Activity[];
};

const GitHubContributionGraph = ({
  contributions
}: GitHubContributionGraphProps) => {
  return (
    <TooltipProvider>
      <ContributionGraph
        className='mx-auto'
        data={contributions}
        blockSize={13}
      >
        <ContributionGraphCalendar>
          {({ activity, dayIndex, weekIndex }) => (
            <Tooltip>
              <TooltipTrigger asChild>
                <g>
                  <ContributionGraphBlock
                    activity={activity}
                    className={cn(
                      'data-[level="0"]:fill-[#ebedf0] dark:data-[level="0"]:fill-[#161b22]',
                      'data-[level="1"]:fill-[#9be9a8] dark:data-[level="1"]:fill-[#0e4429]',
                      'data-[level="2"]:fill-[#40c463] dark:data-[level="2"]:fill-[#006d32]',
                      'data-[level="3"]:fill-[#30a14e] dark:data-[level="3"]:fill-[#26a641]',
                      'data-[level="4"]:fill-[#216e39] dark:data-[level="4"]:fill-[#39d353]'
                    )}
                    dayIndex={dayIndex}
                    weekIndex={weekIndex}
                  />
                </g>
              </TooltipTrigger>
              <TooltipContent>
                <p className='font-semibold'>{activity.date}</p>
                <p>{activity.count} contributions</p>
              </TooltipContent>
            </Tooltip>
          )}
        </ContributionGraphCalendar>
        <ContributionGraphFooter>
          <ContributionGraphTotalCount />
          <ContributionGraphLegend />
        </ContributionGraphFooter>
      </ContributionGraph>
    </TooltipProvider>
  );
};

export default GitHubContributionGraph;
