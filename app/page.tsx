import Hero from '@/components/hero';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <div className='grid-rows-[1fr_1px_auto_1px_auto]'>
      <Hero />
      <div className='h-10' />

      <div className='relative max-w-full'>
        <div className='relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 2xl:before:hidden 2xl:after:hidden dark:before:bg-white/10 dark:after:bg-white/10'>
          <p className='top-6.25 -left-[var(--gutter-width)] origin-bottom-right text-left font-mono text-sm font-semibold tracking-widest text-sky-500 uppercase max-2xl:px-2 max-sm:px-4 sm:text-xs 2xl:absolute 2xl:-translate-x-full 2xl:-translate-y-full 2xl:-rotate-90 2xl:text-right dark:text-sky-400'>
            About
          </p>
        </div>

        <div className='flex items-end gap-2 px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 dark:text-white/25'>
          <span>text-base</span>
          <span className='hidden dark:inline'>text-gray-500</span>
          <span className='inline dark:hidden'>text-gray-600</span>
        </div>

        <div className='relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:before:bg-white/10 dark:after:bg-white/10'>
          <p className='font-inter px-2 py-2 text-base/7 text-gray-600 max-sm:px-4 dark:text-gray-500'>
            I’m a self-taught MERN Stack Developer who enjoys building scalable,
            user-focused web applications. I love turning ideas into real
            products using&nbsp;
            <span className='font-medium text-green-500'>MongoDB,</span>
            <span className='font-medium text-black dark:text-white'>
              &nbsp;Express,
            </span>
            <span className='font-medium text-sky-500'>&nbsp;React,</span> and
            <span className='font-medium text-red-500'>&nbsp;Node.js,</span> and
            I’m always eager to learn, improve, and take on challenging problems
            that create real impact.
          </p>
        </div>
      </div>

      <Contact />
    </div>
  );
}
