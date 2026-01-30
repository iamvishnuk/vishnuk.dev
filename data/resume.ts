import { IconProps, Icons } from '@/icons';
import { JSX } from 'react';

type Position = {
  id: string;
  name: string;
  description: string[];
  startDate: string;
  endDate: string | null;
  jobType: 'part-time' | 'contract' | 'full-time';
  isOpen: boolean;
};

type Skill = {
  name: string;
  icon: (icon: IconProps) => JSX.Element;
};

export interface Data {
  skills: Skill[];
  projects: Project[];
}

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

export type Project = {
  id: string;
  title: string;
  projectFor: string;
  href: string;
  startDate: string;
  endDate: string;
  active: boolean;
  description: string;
  technologies: string[];
  links: {
    type: string;
    href: string;
    icon?: (icon: IconProps) => JSX.Element;
  }[];
  image: string;
  video: string | null;
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

export const DATA: Data = {
  skills: [
    {
      name: 'Typescript',
      icon: Icons.typescript
    },
    {
      name: 'Javascript',
      icon: Icons.javascript
    },
    {
      name: 'React',
      icon: Icons.react
    },
    {
      name: 'Next.js',
      icon: Icons.nextjs
    },
    {
      name: 'Redux',
      icon: Icons.redux
    },
    {
      name: 'Node.js',
      icon: Icons.nodejs
    },
    {
      name: 'Postgres',
      icon: Icons.postgres
    },
    {
      name: 'Docker',
      icon: Icons.docker
    },
    {
      name: 'MongoDB',
      icon: Icons.mongodb
    },
    {
      name: 'TailwindCSS',
      icon: Icons.tailwindcss
    },
    {
      name: 'AWS',
      icon: Icons.aws
    },
    {
      name: 'Cloudflare',
      icon: Icons.cloudflare
    },
    {
      name: 'Express.js',
      icon: Icons.expressjs
    },
    {
      name: 'Git',
      icon: Icons.git
    },
    {
      name: 'GitHub',
      icon: Icons.github
    },
    {
      name: 'Figma',
      icon: Icons.figma
    },
    {
      name: 'Socket.IO',
      icon: Icons.socketIo
    },
    {
      name: 'Npm',
      icon: Icons.npm
    },
    {
      name: 'pnpm',
      icon: Icons.pnpm
    },
    {
      name: 'redis',
      icon: Icons.redis
    },
    {
      name: 'eslint',
      icon: Icons.eslint
    },
    {
      name: 'prettier',
      icon: Icons.prettier
    },
    {
      name: 'husky',
      icon: Icons.husky
    },
    {
      name: 'postman',
      icon: Icons.postman
    }
  ],

  projects: [
    {
      id: 'PRO-0001',
      title: 'Ghar Ka Dhosth - Real Estate Platform',
      projectFor: 'Freelance',
      href: 'https://gharkadhosth.in',
      startDate: 'Oct 2025',
      endDate: 'Oct 2025',
      active: false,
      description:
        'A modern full-stack real estate web application built with Next.js 15, React 19, and TypeScript. Features comprehensive property management with advanced filtering, location-based search, and admin dashboard. Integrates MongoDB, AWS S3 for image storage, and WhatsApp for instant communication. Built with Tailwind CSS and Framer Motion for responsive design and smooth animations. Implements server-side actions, form validation with Zod, and SEO-friendly routing. Docker-ready deployment showcasing enterprise-level architecture for real estate businesses.',
      technologies: [
        'Next.js',
        'Typescript',
        'MongoDB',
        'TailwindCSS',
        'Shadcn UI',
        'Motion',
        'AWS S3',
        'Vercel'
      ],
      links: [
        {
          type: 'Website',
          href: 'https://gharkadhosth.in'
        }
      ],
      image: '/ghar-ka-dhosth.png',
      video: ''
    },
    {
      id: 'PRO-0002',
      title: 'Gamezone (E-commerce)',
      projectFor: 'Personal Project',
      href: 'http://13.233.89.30:3001',
      active: false,
      startDate: 'Nov 2023',
      endDate: 'Dec 2024',
      description:
        'Game-zone is an e-commerce website that allows customers to browse and purchase products online. The website features a user-friendly interface, a secure payment system, and advanced search and filtering options. Customers can create accounts, and track their order status.',
      technologies: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'EJS',
        'Bootstrap',
        'Razorpay',
        'Twilio'
      ],
      links: [
        {
          type: 'Website',
          href: 'http://13.233.89.30:3001',
          icon: Icons.globe
        },
        {
          type: 'GitHub',
          href: 'https://github.com/iamvishnuk/Gamezone---ecommerce',
          icon: Icons.github
        }
      ],
      image: '/gamezone.png',
      video: ''
    }
  ]
};
