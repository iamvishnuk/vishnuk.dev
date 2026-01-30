import Hero from '@/components/hero';
import Contact from '@/components/contact';
import About from '@/components/about';
import GitHubContributions from '@/components/github-contribution';
import WorkExperience from '@/components/work-experience';
import TechStack from '@/components/tech-stack';

export default function Home() {
  return (
    <div className='pb-16'>
      <Hero />
      <About />
      <Contact />
      <GitHubContributions />
      <WorkExperience />
      <TechStack />
    </div>
  );
}
