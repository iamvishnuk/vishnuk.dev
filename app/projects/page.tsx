'use client';

import ProjectCard from '@/components/project-card';
import { DATA } from '@/data/resume';

const page = () => {
  const count = DATA.projects.length;

  return (
    <div className='mt-10 max-w-full'>
      <div className='flex h-4 items-end gap-2 px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 dark:text-white/25'>
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

      <div className='relative mt-10 before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10'>
        {/* Shadow grid – 1 col (mobile, <640px) */}
        <div className='pointer-events-none absolute inset-0 grid auto-rows-fr grid-cols-1 gap-4 p-2 sm:hidden'>
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className='relative after:absolute after:-bottom-2 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10'
            />
          ))}
        </div>

        {/* Shadow grid – 2 cols (sm, 640-767px) */}
        <div className='pointer-events-none absolute inset-0 hidden auto-rows-fr grid-cols-1 gap-4 p-2 sm:grid md:hidden'>
          {Array.from({ length: Math.ceil(count / 2) }).map((_, i) => (
            <div
              key={i}
              className='relative after:absolute after:-bottom-2 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10'
            />
          ))}
        </div>
        <div className='pointer-events-none absolute inset-0 hidden auto-rows-fr grid-cols-2 gap-4 p-2 sm:grid md:hidden'>
          {Array.from({ length: Math.ceil(count / 2) }).map((_, i) => (
            <div
              key={i}
              className='relative after:absolute after:-top-2 after:-right-2 after:h-[calc(100%+1rem)] after:w-px after:bg-gray-950/5 dark:after:bg-white/10'
            />
          ))}
        </div>

        {/* Shadow grid – 3 cols (md+, ≥768px) */}
        <div className='pointer-events-none absolute inset-0 hidden auto-rows-fr grid-cols-1 gap-4 p-2 md:grid'>
          {Array.from({ length: Math.ceil(count / 3) }).map((_, i) => (
            <div
              key={i}
              className='relative after:absolute after:-bottom-2 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10'
            />
          ))}
        </div>
        <div className='pointer-events-none absolute inset-0 hidden auto-rows-fr grid-cols-3 gap-4 p-2 md:grid'>
          {Array.from({ length: Math.ceil(count / 3) }).map((_, i) => (
            <div
              key={i}
              className='relative after:absolute after:-top-2 after:-right-2 after:h-[calc(100%+1rem)] after:w-px after:bg-gray-950/5 dark:after:bg-white/10'
            />
          ))}
        </div>

        <div className='grid w-full auto-rows-fr grid-cols-1 gap-4 p-2 sm:grid-cols-2 md:grid-cols-3'>
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

export default page;
