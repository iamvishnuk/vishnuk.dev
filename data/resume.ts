type Position = {
  id: string;
  name: string;
  description: string[];
  startDate: string;
  endDate: string | null;
  jobType: 'part-time' | 'contract' | 'full-time';
  isOpen: boolean;
};

export type TWorkExperience = {
  id: string;
  company: string;
  companyWebsiteUrl: string;
  badges: string[];
  technologies: string[];
  location: 'On-site' | 'Remote' | 'Hybride';
  companyLogoUrl: string;
  startDate: string;
  endDate: string | null;
  position: Position[];
};

export const WORK_EXPERIENCE = [
  {
    id: 'EXP-0001',
    company: 'Glasier Inc',
    companyWebsiteUrl: 'https://www.glasierinc.com',
    badges: [],
    technologies: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Nest.js',
      'Redux'
    ],
    location: 'On-site',
    companyLogoUrl: '/images/glasierinc.jpeg',
    startDate: 'Nov 2023',
    endDate: 'Dec 2024',
    position: [
      {
        id: 'POS-0001',
        name: 'MERN Stack Developer',
        startDate: 'Nov 2023',
        endDate: 'Dec 2024',
        jobType: 'full-time',
        description: [
          'Revamped legacy web applications requiring modern UI/UX improvements and performance optimization. Built responsive, dynamic interfaces using React.js and Next.js, implementing component-based architecture and state management solutions. Achieved 40% faster page load times and improved user engagement metrics by 25%.',

          'Worked on high-priority client projects with tight deadlines requiring seamless integration between frontend and backend systems. Collaborated closely with cross-functional teams including designers, backend developers, and product managers to integrate RESTful APIs and ensure smooth end-to-end functionality. Successfully delivered scalable web applications meeting all client specifications and quality standards with 95% client satisfaction rate.',

          'Addressed performance bottlenecks affecting website speed and search engine rankings. Implemented code-splitting, lazy loading, image optimization, and SEO best practices across all projects. Reduced bundle sizes by 35% and improved Core Web Vitals scores, resulting in 50% better SEO rankings for key client websites.',

          'Maintained growing codebase requiring consistency and scalability across development team. Established coding standards, implemented reusable component libraries, and conducted code reviews following modern UI/UX principles. Reduced development time for new features by 30% and decreased bug reports by 45% through improved code quality.'
        ],
        isOpen: true
      }
    ]
  }
] satisfies TWorkExperience[];
