import Hero from '@/components/hero';
import Contact from '@/components/contact';
import About from '@/components/about';
import GitHubContributions from '@/components/github-contribution';
import WorkExperience from '@/components/work-experience';
import TechStack from '@/components/tech-stack';
import LeetcodeContribution from '@/components/leetcode-contribution';
import Presence from '@/components/presence';

type HomeProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const revoledSearchParams = await searchParams;
  const year = (revoledSearchParams?.year as string) || undefined;

  return (
    <div className='pb-16'>
      <Hero />
      <About />
      <Presence />
      <Contact />
      <GitHubContributions />
      <LeetcodeContribution year={year} />
      <WorkExperience />
      <TechStack />
    </div>
  );
}
