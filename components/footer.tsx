import Link from 'next/link';

const Footer = () => {
  return (
    <div className='border-t border-black/5 dark:border-white/10'>
      <div className='bg-white dark:bg-gray-950'>
        <div className='group mx-auto flex h-20 max-w-5xl items-center justify-between gap-2 border-x border-black/5 dark:border-white/10 dark:hover:bg-gray-950/80'>
          <div className='h-full w-9.75 border-r border-black/5 dark:border-white/10' />
          <div className='font-inter text-center font-normal tracking-wider text-gray-600 dark:text-gray-500'>
            <p>
              Built by{' '}
              <Link
                href='/'
                className='hover:text-sky-500 hover:underline'
              >
                Vishnu
              </Link>
            </p>
          </div>
          <div className='h-full w-9.75 border-l border-black/5 dark:border-white/10' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
