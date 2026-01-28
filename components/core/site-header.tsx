import Link from 'next/link';
import ThemeToggle from '../theme-toggle';
import { Separator } from '../ui/separator';

const SiteHeader = () => {
  return (
    <div className='fixed inset-x-0 top-0 z-10 border-b border-dashed border-black/5 dark:border-white/10'>
      <div className='bg-white dark:bg-gray-950'>
        <div className='mx-auto flex h-10 max-w-5xl items-center justify-end gap-2 border-x border-dashed border-black/5 dark:border-white/10'>
          <div className='font-inter flex gap-4'>
            <Link
              href='#'
              className='text-base font-medium text-gray-900 capitalize dark:text-white'
            >
              Home
            </Link>
            <Link
              href='#'
              className='text-base font-medium text-gray-900 capitalize dark:text-white'
            >
              project
            </Link>
            <Link
              href='#'
              className='text-base font-medium text-gray-900 capitalize dark:text-white'
            >
              blog
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default SiteHeader;
