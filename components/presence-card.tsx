'use client';

import { motion } from 'motion/react';
import { Coding } from '@/icons/coding';

const PresenceCard = () => {
  return (
    <div className='group relative flex cursor-default flex-wrap items-center justify-center gap-4 rounded-3xl border border-transparent px-6 py-6 transition-all duration-500 hover:border-black/5 hover:bg-black/2 sm:gap-8 sm:px-10 dark:hover:border-white/5 dark:hover:bg-white/2'>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className='relative flex items-center'
      >
        <div className='absolute inset-0 rounded-full bg-green-500/20 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100 dark:bg-green-500/10' />
        <Coding className='relative z-10 size-28 drop-shadow-sm transition-transform duration-500 group-hover:scale-105 sm:size-32' />
      </motion.div>

      <div className='flex flex-col justify-center'>
        <div className='space-y-3'>
          <div className='flex items-center gap-3'>
            <div className='relative flex items-center justify-center'>
              <div className='relative z-10 size-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' />

              <motion.div
                className='absolute size-2 rounded-full bg-green-500'
                animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
              />

              <motion.div
                className='absolute size-2 rounded-full bg-green-500'
                animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeOut',
                  delay: 1
                }}
              />
            </div>
            <div className='font-mono text-[11px] font-bold tracking-[0.2em] text-green-600/90 uppercase sm:text-xs dark:text-green-500/90'>
              currently
            </div>
          </div>

          <div className='space-y-1.5'>
            <div className='font-mono text-base font-bold tracking-tight text-gray-800 transition-colors duration-300 group-hover:text-green-600 sm:text-lg dark:text-gray-200 dark:group-hover:text-green-400'>
              Visual Studio Code
            </div>

            <motion.div
              initial={{ opacity: 0, x: -5 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className='flex items-center gap-2.5 font-mono text-xs text-gray-500 sm:text-sm dark:text-gray-400'
            >
              <span className='h-[2px] w-4 rounded-full bg-gray-300 dark:bg-gray-700' />
              Building Portfolio
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresenceCard;
