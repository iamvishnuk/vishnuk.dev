import { LeetcodeContributionResponse } from '@/components/leetcode-contribution-graph';
import { unstable_cache } from 'next/cache';

export const getLeetCodeContributions = (year?: string) => {
  return unstable_cache(
    async () => {
      const baseUrl =
        'https://api.leetcodeinsights.in/api/v1/calender/vishnukkakkarayil';

      const url = year ? `${baseUrl}?year=${year}` : baseUrl;

      const res = await fetch(url, {
        next: { revalidate: 86400 }
      });

      if (!res.ok) {
        throw new Error(
          `Failed to fetch leetcode contributions: ${res.status}`
        );
      }

      return (await res.json()) as LeetcodeContributionResponse;
    },
    ['leetcode-contributions', year ?? 'all'],
    { revalidate: 86400 }
  )();
};
