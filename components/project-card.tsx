import { Project } from '@/data/resume';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className='group isolate overflow-hidden rounded-lg bg-white p-3 outline outline-gray-950/5 transition-colors duration-200 dark:bg-gray-950 dark:outline-white/10 dark:hover:bg-gray-950/80'>
      Project Card
    </div>
  );
};

export default ProjectCard;
