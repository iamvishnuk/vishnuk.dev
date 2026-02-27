import PresenceCard from './presence-card';

const Presence = () => {
  return (
    <div className='relative mt-16 max-w-full'>
      <div className='relative before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:before:bg-white/10 dark:after:bg-white/10'>
        <div className='w-full'>
          <PresenceCard />
        </div>
      </div>
    </div>
  );
};

export default Presence;
