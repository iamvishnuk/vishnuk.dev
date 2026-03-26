import { Project } from '@/data/resume';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const path = usePathname();
  return (
    <div
      className={cn(
        'group relative isolate rounded-md bg-white p-2 outline outline-gray-950/5 transition-colors duration-200 hover:cursor-pointer dark:bg-gray-950 dark:outline-white/10 dark:hover:bg-gray-950/80',
        path === '/projects' && 'rounded-md'
      )}
    >
      <div className='relative aspect-video'>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className='rounded-sm'
        />
      </div>
      <div className='mt-3 space-y-2'>
        <h3 className='font-inter font-semibold text-gray-600 dark:text-gray-300'>
          {project.title}{' '}
          <span className='text-xs font-normal text-gray-500 dark:text-gray-400'>
            ({project.projectFor})
          </span>
        </h3>
        <p className='font-inter text-sm text-gray-600 dark:text-gray-400'>
          {project.description}
        </p>

        <div className='flex flex-wrap gap-1'>
          {project.technologies.map((technology, index) => (
            <div
              className='group relative w-fit px-1.5 py-0.5 font-mono text-xs text-gray-800 dark:text-gray-300'
              key={index}
            >
              <span className='absolute inset-0 rounded-sm border border-dashed border-gray-300/60 bg-gray-400/10 group-hover:bg-gray-400/15 dark:border-gray-300/30' />
              {technology}
            </div>
          ))}
        </div>
        <div className='flex gap-2 border-t pt-2'>
          {project.links.map((link, idx) => (
            <Link
              href={link.href}
              key={idx}
              className='flex items-center gap-1 rounded-full border px-1.5 py-0.5 font-mono text-xs text-gray-800 dark:text-gray-300'
            >
              {link.icon && <link.icon className='size-3' />}
              <span>{link.type}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
