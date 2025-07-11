// Personal Information
export const PERSONAL_INFO = {
  name: 'Pavan Hegde',
  title: 'Full Stack Developer',
  email: 'pavanhegde@example.com',
  phone: '+91 9876543210',
  location: 'Bengaluru, Karnataka, India',
  bio: "I'm a passionate Full Stack Developer with expertise in modern web technologies. I love creating innovative solutions and building user-friendly applications that solve real-world problems.",
  profileImage: '/images/profile.jpg',
  resume: '/files/pavan-hegde-resume.pdf'
}

// Social Media Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/pavanhegde',
  linkedin: 'https://linkedin.com/in/pavanhegde',
  twitter: 'https://twitter.com/pavanhegde',
  instagram: 'https://instagram.com/pavanhegde',
  email: 'mailto:pavanhegde@example.com'
}

// Navigation Links
export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' }
]

// Skills Data
export const SKILLS = {
  frontend: [
    { name: 'HTML5', level: 90, icon: '/icons/html.svg' },
    { name: 'CSS3', level: 85, icon: '/icons/css.svg' },
    { name: 'JavaScript', level: 88, icon: '/icons/javascript.svg' },
    { name: 'React', level: 85, icon: '/icons/react.svg' },
    { name: 'Next.js', level: 80, icon: '/icons/nextjs.svg' },
    { name: 'TypeScript', level: 75, icon: '/icons/typescript.svg' }
  ],
  backend: [
    { name: 'Node.js', level: 82, icon: '/icons/nodejs.svg' },
    { name: 'Express.js', level: 80, icon: '/icons/express.svg' },
    { name: 'Python', level: 78, icon: '/icons/python.svg' },
    { name: 'MongoDB', level: 75, icon: '/icons/mongodb.svg' },
    { name: 'PostgreSQL', level: 70, icon: '/icons/postgresql.svg' },
    { name: 'Firebase', level: 73, icon: '/icons/firebase.svg' }
  ],
  tools: [
    { name: 'Git', level: 85, icon: '/icons/git.svg' },
    { name: 'Docker', level: 70, icon: '/icons/docker.svg' },
    { name: 'AWS', level: 68, icon: '/icons/aws.svg' },
    { name: 'Figma', level: 75, icon: '/icons/figma.svg' },
    { name: 'VS Code', level: 90, icon: '/icons/vscode.svg' },
    { name: 'Postman', level: 80, icon: '/icons/postman.svg' }
  ]
}

// Projects Data
export const PROJECTS = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.',
    image: '/images/projects/ecommerce.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    liveUrl: 'https://ecommerce-demo.vercel.app',
    githubUrl: 'https://github.com/pavanhegde/ecommerce-platform',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/images/projects/taskapp.jpg',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
    liveUrl: 'https://taskapp-demo.vercel.app',
    githubUrl: 'https://github.com/pavanhegde/task-management',
    featured: true
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays current weather conditions, forecasts, and weather maps using OpenWeatherMap API.',
    image: '/images/projects/weather.jpg',
    technologies: ['React', 'Chart.js', 'OpenWeather API', 'CSS3'],
    liveUrl: 'https://weather-dashboard-demo.vercel.app',
    githubUrl: 'https://github.com/pavanhegde/weather-dashboard',
    featured: false
  },
  {
    id: 4,
    title: 'Blog Platform',
    description: 'A modern blog platform with admin panel, rich text editor, comment system, and SEO optimization.',
    image: '/images/projects/blog.jpg',
    technologies: ['Next.js', 'Sanity CMS', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://blog-platform-demo.vercel.app',
    githubUrl: 'https://github.com/pavanhegde/blog-platform',
    featured: false
  }
]

// Experience Data
export const EXPERIENCE = [
  {
    id: 1,
    company: 'Tech Solutions Inc.',
    position: 'Senior Full Stack Developer',
    duration: '2022 - Present',
    description: 'Led development of multiple client projects, mentored junior developers, and implemented best practices for code quality and performance.',
    technologies: ['React', 'Node.js', 'AWS', 'MongoDB']
  },
  {
    id: 2,
    company: 'Digital Agency',
    position: 'Frontend Developer',
    duration: '2020 - 2022',
    description: 'Developed responsive web applications, collaborated with design teams, and optimized applications for performance and accessibility.',
    technologies: ['React', 'JavaScript', 'SCSS', 'WordPress']
  },
  {
    id: 3,
    company: 'StartupXYZ',
    position: 'Junior Developer',
    duration: '2019 - 2020',
    description: 'Built and maintained web applications, participated in code reviews, and contributed to product development decisions.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP']
  }
]

// Education Data
export const EDUCATION = [
  {
    id: 1,
    degree: 'Bachelor of Technology',
    field: 'Computer Science Engineering',
    institution: 'Indian Institute of Technology',
    duration: '2015 - 2019',
    grade: 'CGPA: 8.5/10'
  },
  {
    id: 2,
    degree: 'Higher Secondary',
    field: 'Science (PCM)',
    institution: 'ABC Higher Secondary School',
    duration: '2013 - 2015',
    grade: 'Percentage: 92%'
  }
]

// Testimonials Data
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'John Smith',
    position: 'Project Manager',
    company: 'Tech Solutions Inc.',
    feedback: 'Pavan is an exceptional developer with great problem-solving skills. His attention to detail and commitment to quality is outstanding.',
    avatar: '/images/testimonials/john.jpg'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    position: 'Design Lead',
    company: 'Digital Agency',
    feedback: 'Working with Pavan was a pleasure. He perfectly translated our designs into pixel-perfect, responsive web applications.',
    avatar: '/images/testimonials/sarah.jpg'
  }
]