'use client';
import Link from 'next/link';
import ThemeToggle from './theme-toggle';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' }
];

const SiteHeader = () => {
  const path = usePathname();

  return (
    <div className='fixed inset-x-0 top-0 z-10 border-b border-black/5 dark:border-white/10'>
      <div className='bg-white dark:bg-gray-950'>
        <div className='mx-auto flex h-14 max-w-5xl items-center justify-end gap-2 border-x border-black/5 dark:border-white/10'>
          <div className='font-inter flex gap-4'>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
              >
                <motion.div
                  whileHover='hover'
                  className='relative'
                >
                  <span
                    className={cn(
                      'text-base font-medium capitalize transition-colors duration-200',
                      path === item.href
                        ? 'text-black dark:text-white'
                        : 'text-gray-600 hover:text-black dark:text-gray-500 dark:hover:text-white'
                    )}
                  >
                    {item.label}
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    variants={{
                      hover: { width: '100%' }
                    }}
                    transition={{ duration: 0.2, ease: 'easeIn' }}
                    className='absolute bottom-0 left-0 h-px bg-black dark:bg-white'
                  />
                </motion.div>
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default SiteHeader;
