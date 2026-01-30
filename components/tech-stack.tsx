import { DATA } from '@/data/resume';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';

const TechStack = () => {
  return (
    <div className='relative mt-16 before:absolute before:top-0 before:-left-[100vw] before:h-px before:w-[200vw] before:bg-gray-950/5 after:absolute after:bottom-0 after:-left-[100vw] after:h-px after:w-[200vw] after:bg-gray-950/5 dark:before:bg-white/10 dark:after:bg-white/10'>
      <div className='grid w-full grid-cols-8 gap-2 bg-gray-950/5 p-2 sm:grid-cols-12 dark:bg-white/10'>
        {DATA.skills.map((skill, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <div className='group flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-white shadow outline outline-gray-950/5 transition-colors duration-200 hover:cursor-pointer dark:bg-gray-950 dark:outline-white/10 dark:hover:bg-gray-950/80'>
                <skill.icon className='size-6 md:size-8' />
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className='capitalize'>{skill.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
