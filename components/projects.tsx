import { DATA } from '@/data/resume';
import ProjectCard from './project-card';

const Projects = () => {
  return (
    <div className='mt-16 max-w-full'>
      <div className='relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 2xl:before:hidden dark:before:bg-white/10'>
        <p className='top-6.25 -left-[var(--gutter-width)] origin-bottom-right text-left font-mono text-sm font-semibold tracking-widest text-sky-500 uppercase max-2xl:px-2 max-sm:px-4 sm:text-xs 2xl:absolute 2xl:-translate-x-full 2xl:-translate-y-full 2xl:-rotate-90 2xl:text-right dark:text-sky-400'>
          Projects
        </p>
      </div>
      <div className='hidden h-4 items-end gap-2 px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 2xl:visible 2xl:flex dark:text-white/25'>
        <span className='hidden md:inline'>text-4xl</span>
        <span className='inline md:hidden'>text-3xl</span>
        <span className='hidden dark:inline'>text-white</span>
        <span className='inline dark:hidden'>text-gray-950</span>
        <span>tracking-tighter</span>
        <span>text-balance</span>
      </div>
      <div className='relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:before:bg-white/10 dark:after:bg-white/10'>
        <h2 className='font-inter max-w-lg p-2 text-3xl font-medium tracking-tighter text-balance max-sm:px-4 md:text-4xl 2xl:mt-0'>
          Check out my latest work
        </h2>
      </div>
      <div className='flex h-6 items-end gap-2 px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 sm:h-10 dark:text-white/25'>
        <span>text-base</span>
        <span className='hidden dark:inline'>text-gray-400</span>
        <span className='inline dark:hidden'>text-gray-600</span>
      </div>
      <div className='relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:before:bg-white/10 dark:after:bg-white/10'>
        <p className='font-inter p-2 text-base text-gray-600 max-sm:px-4 dark:text-gray-400'>
          I've worked on a variety of projects, from simple websites to complex
          web applications.
          <br /> Here are a few of my favorites.
        </p>
      </div>
      <div className='relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10'>
        <div className='grid w-full grid-cols-1 gap-2 bg-gray-950/5 p-2 md:grid-cols-3 dark:bg-white/10'>
          {DATA.projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
