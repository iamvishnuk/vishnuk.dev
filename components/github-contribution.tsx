import { getGitHubContributions } from '@/lib/github';
import GitHubContributionGraph from './github-contribution-graph';

const GitHubContributions = async () => {
  const contributions = await getGitHubContributions();

  return (
    <div className='relative mt-16 max-w-full'>
      <div className='relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 2xl:before:hidden dark:before:bg-white/10'>
        <p className='top-0 -left-[var(--gutter-width)] origin-bottom-right text-left font-mono text-sm font-semibold tracking-widest text-green-500 uppercase max-2xl:px-2 max-sm:px-4 sm:text-xs 2xl:absolute 2xl:-translate-x-full 2xl:-translate-y-full 2xl:-rotate-90 2xl:text-right dark:text-green-400'>
          Github contributions
        </p>
      </div>
      <div className='relative py-4 before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:before:bg-white/10 dark:after:bg-white/10'>
        <GitHubContributionGraph contributions={contributions} />
      </div>
    </div>
  );
};

export default GitHubContributions;
