import Hero from '@/components/hero';
import Contact from '@/components/contact';
import About from '@/components/about';
import GitHubContributions from '@/components/github-contribution';
import WorkExperience from '@/components/work-experience';
import TechStack from '@/components/tech-stack';
import LeetcodeContribution from '@/components/leetcode-contribution';

export default function Home() {
  return (
    <div className='pb-16'>
      <Hero />
      <About />
      <Contact />
      <GitHubContributions />
      <LeetcodeContribution />
      <WorkExperience />
      <TechStack />
    </div>
  );
}
