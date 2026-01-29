import { unstable_cache } from 'next/cache';
import type { Activity } from '@/components/kibo-ui/contribution-graph';

export type GitHubContributionsResponse = {
  contributions: Activity[];
};

export const getGitHubContributions = unstable_cache(
  async () => {
    try {
      const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/iamvishnuk?y=last`,
        { next: { revalidate: 86400 } }
      );

      if (!res.ok) {
        throw new Error(`Failed to fetch contributions: ${res.status}`);
      }

      const data = (await res.json()) as GitHubContributionsResponse;
      return data.contributions || [];
    } catch (error) {
      console.error('Error fetching GitHub contributions:', error);
      return []; // Return empty array as fallback
    }
  },
  ['github-contributions'],
  { revalidate: 86400 }
);
