import { LeetcodeContributionResponse } from '@/components/leetcode-contribution-graph';
import { unstable_cache } from 'next/cache';

export const getLeetCodeContributions = unstable_cache(
  async () => {
    try {
      const res = await fetch(
        'http://localhost:8001/api/v1/calendar/vishnukkakkarayil'
      );

      if (!res.ok) {
        throw new Error(
          `Failed to fetch leetcode contributions : ${res.status}`
        );
      }

      const data = (await res.json()) as LeetcodeContributionResponse;
      return data;
    } catch (error) {
      console.error('Error fetching Leetcode contributions', error);
    }
  },
  ['leetcode-contributions'],
  { revalidate: 86400 }
);
