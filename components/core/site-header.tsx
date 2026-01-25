import Link from 'next/link';
import ThemeToggle from '../theme-toggle';
import { Separator } from '../ui/separator';

const SiteHeader = () => {
  return (
    <div className='fixed inset-x-0 top-0 z-10 border-b border-black/5 dark:border-white/10'>
      <div className='bg-white dark:bg-gray-950'>
        <div className='mx-auto flex h-12 max-w-5xl items-center justify-end gap-2 border-x border-black/5 px-4 dark:border-white/10'>
          <div className='flex gap-4'>
            <Link
              href='#'
              className='font-mono text-base font-medium text-gray-900 capitalize dark:text-white'
            >
              Home
            </Link>
            <Link
              href='#'
              className='font-mono text-base font-medium text-gray-900 capitalize dark:text-white'
            >
              project
            </Link>
            <Link
              href='#'
              className='font-mono text-base font-medium text-gray-900 capitalize dark:text-white'
            >
              blog
            </Link>
          </div>
          <Separator
            orientation='vertical'
            className='h-6!'
          />
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default SiteHeader;
