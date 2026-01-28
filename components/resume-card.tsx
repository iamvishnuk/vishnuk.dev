import { useState } from 'react';
import * as motion from 'motion/react-client';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function ResumeCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='group isolate overflow-hidden rounded-lg bg-white p-3 outline outline-gray-950/5 transition-colors duration-200 dark:bg-gray-950 dark:outline-white/10 dark:hover:bg-gray-950/80'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        className='flex items-center gap-4'
        href={'/resume/Vishnu-k-Full-Stack-Developer.pdf'}
        download={true}
      >
        <Image
          src='/images/resume_1.png'
          alt='Resume'
          width={100}
          className='size-12 rounded-[10px]'
          height={100}
        />
        <p className='font-inter text-center font-medium text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-400'>
          Resume
        </p>

        <div className='relative ml-auto size-5'>
          <motion.div
            className='absolute inset-0'
            initial={{ opacity: 1, x: 0 }}
            animate={isHovered ? { opacity: 0, x: 8 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <ChevronRight className='size-5 text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-400' />
          </motion.div>

          <motion.div
            className='absolute inset-0'
            initial={{ opacity: 0, y: 8 }}
            animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <motion.svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-400'
            >
              <defs>
                <linearGradient
                  id='arrowGradient'
                  x1='0%'
                  y1='0%'
                  x2='0%'
                  y2='100%'
                >
                  <motion.stop
                    offset='0%'
                    stopColor='currentColor'
                    stopOpacity='1'
                    animate={{ offset: ['0%', '100%'] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: 'linear',
                      repeatDelay: 0.5
                    }}
                  />
                  <motion.stop
                    offset='0%'
                    stopColor='currentColor'
                    stopOpacity='0'
                    animate={{ offset: ['0%', '100%'] }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: 'linear',
                      repeatDelay: 0.5
                    }}
                  />
                </linearGradient>
              </defs>
              <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
              />
              <path d='M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2' />
              <motion.path
                d='M7 11l5 5l5 -5'
                stroke='url(#arrowGradient)'
              />
              <motion.path
                d='M12 4l0 12'
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 0.8,
                  ease: 'easeOut',
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
              />
            </motion.svg>
          </motion.div>
        </div>
      </Link>
    </div>
  );
}
