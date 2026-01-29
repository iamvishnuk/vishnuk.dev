import Image from 'next/image';
import Link from 'next/link';

import { WORK_EXPERIENCE } from '@/data/resume';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from './ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { Separator } from './ui/separator';

const WorkExperience = () => {
  return (
    <div className='mt-16 max-w-full'>
      <div className='relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 2xl:before:hidden dark:before:bg-white/10'>
        <p className='top-0 -left-[var(--gutter-width)] origin-bottom-right text-left font-mono text-sm font-semibold tracking-widest text-pink-500 uppercase max-2xl:px-2 max-sm:px-4 sm:text-xs 2xl:absolute 2xl:-translate-x-full 2xl:-translate-y-full 2xl:-rotate-90 2xl:text-right dark:text-pink-400'>
          Work Experience
        </p>
      </div>
      <div className='relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:before:bg-white/10 dark:after:bg-white/10'>
        {WORK_EXPERIENCE.map((experience) => (
          <div
            className='space-y-4 border-b p-4 last:border-none'
            key={experience.id}
          >
            <div className='flex items-center gap-2'>
              <div className='size-8'>
                <Image
                  src={experience.companyLogoUrl}
                  alt={experience.company}
                  height={100}
                  width={100}
                  className='rounded-md'
                />
              </div>
              <Link
                href={experience.companyWebsiteUrl}
                className='font-inter text-lg font-semibold tracking-tight text-gray-600 hover:underline dark:text-gray-300'
                target='_blank'
              >
                {experience.company}
              </Link>
            </div>
            {experience.position.map((position) => (
              <Collapsible
                defaultOpen={position.isOpen}
                key={position.id}
                className='ml-10'
              >
                <CollapsibleTrigger asChild>
                  <div className='group space-y-0.5 rounded-md p-0.5 transition-colors duration-200 hover:cursor-pointer dark:hover:bg-gray-900/20'>
                    <div className='flex items-center justify-between'>
                      <h5 className='font-inter text-lg font-semibold tracking-tight text-gray-600 dark:text-gray-300'>
                        {position.name}
                      </h5>
                      <ChevronDown className='size-5 text-gray-500 transition-transform duration-500 group-data-[state=open]:rotate-180 dark:text-gray-500' />
                    </div>
                    <div className='flex h-4 items-center gap-2'>
                      <span className='font-inter text-sm font-medium text-gray-600 capitalize dark:text-gray-500'>
                        {position.jobType}
                      </span>
                      <Separator
                        orientation='vertical'
                        className='h-full'
                      />
                      <span className='font-inter text-sm font-medium text-gray-600 capitalize dark:text-gray-500'>
                        {position.startDate}&nbsp;-&nbsp;
                        {position.endDate ? position.endDate : 'Present'}
                      </span>
                    </div>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className='data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up overflow-hidden pt-2 sm:pt-4'>
                  <ul className='font-inter list-disc space-y-1 pl-5 text-sm text-gray-600 sm:text-base dark:text-gray-400'>
                    {position.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            ))}

            <div className='flex flex-wrap gap-1 pl-10'>
              {experience.technologies.map((technology, index) => (
                <div
                  className='group relative w-fit px-1.5 py-0.5 font-mono text-xs text-gray-800 dark:text-gray-300'
                  key={index}
                >
                  <span className='absolute inset-0 rounded-sm border border-dashed border-gray-300/60 bg-gray-400/10 group-hover:bg-gray-400/15 dark:border-gray-300/30' />
                  {technology}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
