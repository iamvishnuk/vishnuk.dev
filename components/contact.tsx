'use client';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import ResumeCard from './resume-card';

const Contact = () => {
  return (
    <div className='relative mt-16 before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:before:bg-white/10 dark:after:bg-white/10'>
      <div className='grid w-full grid-flow-dense grid-cols-1 gap-2 bg-gray-950/5 p-2 md:grid-cols-3 dark:bg-white/10'>
        <div className='group isolate overflow-hidden rounded-lg bg-white p-3 outline outline-gray-950/5 transition-colors duration-200 dark:bg-gray-950 dark:outline-white/10 dark:hover:bg-gray-950/80'>
          <Link
            className='flex items-center gap-4'
            href={'https://github.com/iamvishnuk'}
            target='_blank'
          >
            <Image
              src='/images/github.png'
              alt='Github'
              width={100}
              className='size-12 rounded-[10px]'
              height={100}
            />
            <p className='font-inter text-center font-medium text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-400'>
              Github
            </p>
            <ChevronRight className='ml-auto size-5 text-gray-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gray-800 dark:group-hover:text-gray-400' />
          </Link>
        </div>
        <div className='group isolate overflow-hidden rounded-lg bg-white p-3 outline outline-gray-950/5 transition-colors duration-200 dark:bg-gray-950 dark:outline-white/10 dark:hover:bg-gray-950/80'>
          <Link
            className='flex items-center gap-4'
            href={'https://www.linkedin.com/in/vishnu-k-9294a9221/'}
            target='_blank'
          >
            <Image
              src='/images/linkedin.png'
              alt='LinkedIn'
              width={100}
              className='size-12 rounded-[10px]'
              height={100}
            />
            <p className='font-inter text-center font-medium text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-400'>
              LinkedIn
            </p>
            <ChevronRight className='ml-auto size-5 text-gray-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gray-800 dark:group-hover:text-gray-400' />
          </Link>
        </div>
        <div className='group isolate overflow-hidden rounded-lg bg-white p-3 outline outline-gray-950/5 transition-colors duration-200 dark:bg-gray-950 dark:outline-white/10 dark:hover:bg-gray-950/80'>
          <Link
            className='flex items-center gap-4'
            href={'https://leetcode.com/u/vishnukkakkarayil/'}
            target='_blank'
          >
            <Image
              src='/images/leetcode.png'
              alt='Leetcode'
              width={100}
              className='size-12 rounded-[10px]'
              height={100}
            />
            <p className='font-inter text-center font-medium text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-400'>
              Leetcode
            </p>
            <ChevronRight className='ml-auto size-5 text-gray-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gray-800 dark:group-hover:text-gray-400' />
          </Link>
        </div>
        <div className='group isolate overflow-hidden rounded-lg bg-white p-3 outline outline-gray-950/5 transition-colors duration-200 dark:bg-gray-950 dark:outline-white/10 dark:hover:bg-gray-950/80'>
          <Link
            className='flex items-center gap-4'
            href={'mailto:vishnuk1609@gmail.com'}
            target='_blank'
          >
            <Image
              src='/images/gmail.svg'
              alt='Gmail'
              width={100}
              className='size-12 rounded-[10px]'
              height={100}
            />
            <p className='font-inter text-center font-medium text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-400'>
              Gmail
            </p>
            <ChevronRight className='ml-auto size-5 text-gray-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gray-800 dark:group-hover:text-gray-400' />
          </Link>
        </div>
        <div className='group isolate overflow-hidden rounded-lg bg-white p-3 outline outline-gray-950/5 transition-colors duration-200 dark:bg-gray-950 dark:outline-white/10 dark:hover:bg-gray-950/80'>
          <Link
            className='flex items-center gap-4'
            href={'https://x.com/VishnuK1609'}
            target='_blank'
          >
            <Image
              src='/images/x.jpeg'
              alt='X'
              width={100}
              className='size-12 rounded-[10px]'
              height={100}
            />
            <p className='font-inter text-center font-medium text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-400'>
              X
            </p>
            <ChevronRight className='ml-auto size-5 text-gray-500 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gray-800 dark:group-hover:text-gray-400' />
          </Link>
        </div>

        <ResumeCard />
      </div>
    </div>
  );
};

export default Contact;
