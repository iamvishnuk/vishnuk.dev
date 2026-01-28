const Hero = () => {
  return (
    <div>
      <div className='flex h-16 items-end gap-2 px-2 font-mono text-xs/6 whitespace-pre text-black/20 max-sm:px-4 sm:h-24 dark:text-white/25'>
        <span className='hidden max-sm:inline'>text-4xl</span>
        <span className='hidden sm:max-md:inline'>text-5xl</span>
        <span className='hidden lg:max-xl:inline'>text-6xl</span>
        <span className='hidden xl:inline'>text-7xl</span>
        <span className='hidden dark:inline'>text-white</span>
        <span className='inline dark:hidden'>text-gray-950</span>
        <span>tracking-tighter</span>
      </div>
      <div className='relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:before:bg-white/10 dark:after:bg-white/10'>
        <h1 className='font-inter border-b px-2 py-1 text-4xl font-medium tracking-tighter text-balance max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-7xl'>
          Hi, I'm Vishnu
        </h1>
        <h5 className='font-inter px-2 py-1 text-base text-gray-500 max-sm:px-4'>
          <span className='text-sky-400'>A Full Stack Developer.</span>&nbsp;I
          love building things on internet.
        </h5>
      </div>
    </div>
  );
};

export default Hero;
