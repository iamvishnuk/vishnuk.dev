import Hero from '@/components/hero';
import Contact from '@/components/contact';
import About from '@/components/about';
import GitHubContributions from '@/components/github-contribution';

export default function Home() {
  return (
    <div className='grid-rows-[1fr_1px_auto_1px_auto]'>
      <Hero />
      <div className='h-10' />
      <About />
      <Contact />
      <GitHubContributions />
    </div>
  );
}
