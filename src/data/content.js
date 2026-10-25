// Single source of truth for all portfolio content.
// Only facts from Umair's CV live here. Fields left empty (e.g. `live`, `github`)
// are simply not rendered by the UI — add them here when they exist.

export const profile = {
  name: 'Umair Nasim',
  shortName: 'UMAIR.N',
  title: 'Full Stack Web Developer',
  location: 'Karachi, Pakistan',
  locationShort: 'Karachi, PK',
  email: 'umairnasim26@gmail.com',
  github: 'https://github.com/umairnaseem123',
  githubLabel: 'github.com/umairnaseem123',
  current: 'Tafsol Software Ltd',
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Agency', href: '#agency' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Agency', href: '#agency' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const heroTech = ['React', 'Django', 'Python', 'JavaScript', 'Node.js', 'MongoDB']

export const trustCompanies = [
  'Tafsol Software',
  'Developers Hub',
  'Systems Limited',
  'Freelance / Independent Projects',
]

export const aboutIntro = [
  'I am a Full Stack Web Developer based in Karachi, working across the React frontend and the Python/Django backend of modern web applications.',
  'My work spans responsive interfaces, backend systems and database integration, and I have built a range of projects across fintech, healthcare, e-commerce and AI — from anti-fraud platforms to agency websites.',
  'I have worked with Tafsol Software, Developers Hub and Systems Limited, collaborating with other developers and following industry development practices.',
]

export const aboutProfile = [
  { label: 'Role', value: 'Full Stack Web Developer' },
  { label: 'Focus', list: ['Web Applications', 'Backend Systems', 'Modern UI', 'Database Integration'] },
  { label: 'Location', value: 'Karachi, Pakistan' },
  { label: 'Current', value: 'Tafsol Software Ltd' },
]

// Descriptive highlights only — no invented numbers.
export const aboutStats = [
  { value: 'Multiple', label: 'production-style projects' },
  { value: 'Full-stack', label: 'experience' },
  { value: 'React + Django', label: 'primary stack' },
  { value: 'Responsive', label: 'web development' },
]

export const experience = [
  {
    company: 'Tafsol Software Ltd',
    role: 'Full Stack Web Developer',
    period: 'July 2026 — Present',
    meta: 'Remote',
    points: [
      'Frontend and backend development',
      'React development',
      'Python/Django development',
      'Database-related work',
      'Collaboration on web applications',
    ],
  },
  {
    company: 'DevSphere',
    role: 'Full Stack Development Intern',
    period: '22 Aug — 22 Oct 2026',
    meta: 'Remote · two-month internship',
    points: [
      'Full-stack web development',
      'Hands-on project work in a remote team',
      'Certificate of Internship awarded',
    ],
  },
  {
    company: 'Developers Hub Corporation',
    role: 'Junior Full Stack Developer Intern',
    period: '13 April — 25 May 2026',
    meta: '6-week internship',
    points: [
      'Frontend and backend development',
      'Responsive web interfaces',
      'UI improvements',
      'Debugging',
      'Python/Django',
      'Database-related tasks',
      'Data handling',
    ],
  },
  {
    company: 'Systems Limited',
    role: 'Full Stack Web Developer Intern',
    period: 'March — October 2024',
    meta: '8 months',
    points: [
      'Web application development',
      'Feature development and maintenance',
      'Collaboration with senior developers',
      'Industry development practices',
    ],
  },
]

export const teaching = [
  { school: 'Blue Horizon School', role: 'Computer Teacher' },
  { school: 'Mak Way Grammar School', role: 'Computer Teacher' },
  { school: 'The Learning Circle Secondary School', role: 'Computer Teacher' },
]

export const projects = [
  {
    slug: 'afcip',
    number: '01',
    title: 'AFCIP',
    subtitle: 'Advanced Financial Crime Intelligence Platform',
    category: 'FinTech / Security / Full Stack',
    visual: 'afcip',
    image: '/projects/afcip.jpg',
    featured: true,
    description:
      'A full-stack anti-fraud and compliance platform built for UBL Hackathon 2026, covering transaction monitoring, KYC, fraud detection, risk scoring, case management, audit trails and network graph analysis. I led the frontend and connected it to the FastAPI backend.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Recharts', 'Framer Motion', 'Python', 'FastAPI', 'scikit-learn', 'pandas'],
    features: [
      'Transaction monitoring',
      'KYC',
      'Fraud detection',
      'Risk scoring',
      'Case management',
      'Audit trails',
      'Network graph analysis',
    ],
    deployment: [
      { part: 'Frontend', where: 'Vercel' },
      { part: 'Backend', where: 'PythonAnywhere' },
    ],
    github: 'https://github.com/umairnaseem123/AFCIP-Project',
    live: '',
  },
  {
    slug: 'iced-tea-house',
    number: '02',
    title: 'Iced Tea House',
    subtitle: 'Restaurant management system',
    category: 'Management System / Frontend',
    visual: 'agency',
    image: '/projects/iced-tea-house.jpg',
    description:
      'An operations console for an iced tea restaurant, covering orders, kitchen, payments, delivery, menu and recipes, customers and sales reports. I built the frontend while a teammate handled the backend.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    features: ['Orders', 'Kitchen', 'Payments', 'Delivery', 'Menu & products', 'Recipes', 'Customers', 'Sales reports'],
    deployment: [],
    github: 'https://github.com/CoDEMINDS02/Iced-Tea-House',
    live: '',
  },
  {
    slug: 'ai-fabric-inspection',
    number: '03',
    title: 'ColorIX',
    subtitle: 'Fabric quality inspection dashboard',
    category: 'Dashboard / Quality Inspection',
    visual: 'fabric',
    image: '/projects/coloriX.jpg',
    description: 'A fabric-quality inspection dashboard where a mill team uploads fabric images, tracks batches and reviews quality analytics. The inspection engine is a working baseline, designed to be replaced by a trained model once a labeled defect dataset is available.',
    tech: ['React', 'Vite', 'Node.js', 'Chart.js', 'Recharts', 'Socket.IO'],
    features: ['Secure registration and sign-in', 'Fabric image upload', 'Batch history and quality score', 'Detected defect types', 'Quality analytics'],
    deployment: [],
    github: 'https://github.com/umairnaseem123/colorix',
    live: '',
  },
  {
    slug: 'codes-minds',
    number: '04',
    title: 'Code Minds',
    subtitle: 'Local digital agency website',
    category: 'Digital Agency',
    visual: 'codesminds',
    image: '/projects/codes-minds.jpg',
    description:
      'Full-stack digital agency website offering web development, WordPress, UI/UX, graphic design and video editing services.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Cloudinary', 'Nodemailer'],
    features: ['Web development', 'WordPress', 'UI/UX', 'Graphic design', 'Video editing'],
    featuresLabel: 'Services showcased',
    deployment: [],
    github: 'https://github.com/CoDEMINDS02/codes-minds',
    live: 'https://codes-minds-4a6e.vercel.app/',
  },
  {
    slug: 'ai-health-monitoring',
    number: '05',
    title: 'AI Health Monitoring',
    subtitle: 'Health risk prediction platform',
    category: 'AI / Healthcare',
    visual: 'health',
    image: '/projects/ai-health-monitoring.jpg',
    description:
      'Full-stack AI health monitoring application designed to predict diabetes, heart disease and hypertension risk, with an animated login, live ECG visuals and a voice assistant greeting.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Recharts', 'Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'JWT'],
    features: ['Diabetes risk prediction', 'Heart disease risk prediction', 'Hypertension risk prediction', 'Real-time symptom analysis'],
    deployment: [
      { part: 'Hosting', where: 'Railway' },
      { part: 'Hosting', where: 'Vercel' },
    ],
    github: 'https://github.com/umairnaseem123/health-app-frontend',
    repos: [
      { label: 'Frontend', url: 'https://github.com/umairnaseem123/health-app-frontend' },
      { label: 'Backend', url: 'https://github.com/umairnaseem123/health-app-backend' },
    ],
    live: '',
  },
  {
    slug: 'ai-healthguard',
    number: '06',
    title: 'AI HealthGuard',
    subtitle: 'Preliminary health analysis assistant',
    category: 'AI / Healthcare',
    visual: 'health',
    image: '/projects/ai-healthguard.jpg',
    description:
      'An educational prototype that turns reported symptoms and an optional lab report into an organised preliminary summary with next-step guidance. It never diagnoses or prescribes.',
    tech: ['React', 'Vite', 'Python', 'FastAPI', 'SQLAlchemy', 'Supabase PostgreSQL', 'Qwen (Alibaba Cloud)'],
    features: ['Symptom understanding', 'Smart follow-up questions', 'Medical report (PDF) reading', 'Deterministic safety layer', 'Swappable AI providers', 'English and Urdu'],
    deployment: [],
    github: 'https://github.com/CoDEMINDS02/AI-HEALTH-GUARD',
    live: '',
  },
  {
    slug: 'expense-tracker',
    number: '07',
    title: 'FinTrack',
    subtitle: 'Personal finance and expense tracker',
    category: 'FinTech / Full Stack',
    visual: 'ecommerce',
    image: '/projects/fintrack.jpg',
    description: 'A full-stack finance app to track income and expenses, set monthly category budgets, and understand spending through charts and reports. Each user signs in with JWT and sees only their own data.',
    tech: ['React', 'Vite', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Recharts'],
    features: ['Secure sign-in with JWT', 'Transactions with search and filters', 'Monthly category budgets', 'Spending charts', 'Income vs expense reports'],
    deployment: [
      { part: 'Frontend', where: 'Vercel' },
      { part: 'Backend API', where: 'Vercel' },
    ],
    github: 'https://github.com/umairnaseem123/expense-tracker',
    live: 'https://expense-tracker-v4qy.vercel.app',
  },
  {
    slug: 'ecommerce-platform',
    number: '08',
    title: 'Mitti',
    subtitle: 'Handmade concrete decor & candles store',
    category: 'E-Commerce / Full Stack',
    visual: 'ecommerce',
    image: '/projects/mitti.jpg',
    description: 'Full-stack e-commerce website for a handmade concrete decor and candles brand, with a customer storefront and an admin dashboard.',
    tech: ['Next.js', 'Node.js', 'Express', 'MongoDB'],
    features: ['Cash on Delivery', 'Order tracking', 'Coupon codes', 'Wishlist', 'Bulk orders', 'Admin dashboard'],
    deployment: [
      { part: 'Frontend', where: 'Vercel' },
      { part: 'Backend', where: 'Railway' },
      { part: 'Database', where: 'MongoDB Atlas' },
    ],
    github: 'https://github.com/umairnaseem123/mitti-client',
    repos: [
      { label: 'Client', url: 'https://github.com/umairnaseem123/mitti-client' },
      { label: 'Server', url: 'https://github.com/umairnaseem123/mitti-server' },
    ],
    live: '',
  },
]

export const secondaryProjects = [
  { title: 'Nexe Agent — Business Meeting Platform', category: 'Business / SaaS' },
  { title: 'Developers Hub Agency Website', category: 'Agency / Web' },
  { title: 'Dental Health Care Website', category: 'Healthcare / Web' },
  { title: 'Bookora — Online Booking System', category: 'Booking / Web' },
  { title: 'Medical Health Enterprise', category: 'Healthcare / Web' },
]

export const certificates = [
  {
    title: 'Full-Stack Development Internship',
    issuer: 'DevSphere · two-month remote internship',
    date: '22 Aug – 22 Oct 2026',
    type: 'Internship',
    image: '/certs/devsphere-internship.jpg',
    file: '/certs/devsphere-internship.pdf',
  },
  // NYLP x AI Hackathon 2026 certificate is on hold until organizers re-issue it with a corrected issue date.
  // Image kept at /certs/nylp-ai-hackathon.jpg. To restore, move this entry back into the list:
  //   {
  //     title: 'NYLP x AI Hackathon 2026: Building AI Products',
  //     issuer: 'Certificate of Participation · National Youth Leadership Programme',
  //     date: '15 – 18 Oct 2026',
  //     type: 'Hackathon',
  //     image: '/certs/nylp-ai-hackathon.jpg',
  //   },
  {
    title: 'Alibaba Cloud AI Hackathon Pakistan 2026',
    issuer: 'Certificate of Participation · Karachi Regional Technical Evaluation',
    date: '3 Oct 2026',
    type: 'Hackathon',
    image: '/certs/ai-hackathon.jpg',
  },
  {
    title: 'Data Analytics and Business Intelligence',
    issuer: 'DigiSkills Training Program · DSTP 3.0',
    date: 'Apr – Jul 2026',
    type: 'Training',
    image: '/certs/digiskills-data-analytics-bi.jpg',
    file: '/certs/digiskills-data-analytics-bi.pdf',
  },
  {
    title: 'Full-Stack Development Internship',
    issuer: 'DevelopersHub Corporation · 6-week program',
    date: '13 Apr – 25 May 2026',
    type: 'Internship',
    image: '/certs/devhub-internship.jpg',
  },
  {
    title: 'Digital Literacy',
    issuer: 'DigiSkills Training Program',
    date: 'Feb – May 2021',
    type: 'Training',
    image: '/certs/digiskills-digital-literacy.jpg',
    file: '/certs/digiskills-digital-literacy.pdf',
  },
  {
    title: 'WordPress',
    issuer: 'DigiSkills Training Program',
    date: 'Oct 2020 – Jan 2021',
    type: 'Training',
    image: '/certs/digiskills-wordpress.jpg',
    file: '/certs/digiskills-wordpress.pdf',
  },
  {
    title: 'SEO (Search Engine Optimization)',
    issuer: 'DigiSkills Training Program',
    date: 'Oct 2020 – Jan 2021',
    type: 'Training',
    image: '/certs/digiskills-seo.jpg',
    file: '/certs/digiskills-seo.pdf',
  },
  {
    title: 'Freelancing',
    issuer: 'DigiSkills Training Program',
    date: 'May – Aug 2020',
    type: 'Training',
    image: '/certs/digiskills-freelancing.jpg',
    file: '/certs/digiskills-freelancing.pdf',
  },
]

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML', info: 'Semantic markup for accessible, SEO-friendly pages.' },
      { name: 'CSS', info: 'Layouts and styling for responsive interfaces.' },
      { name: 'JavaScript', info: 'Interactive behavior across frontend and Node.js work.' },
      { name: 'React JS', info: 'Component-based UIs, used in AFCIP, Code Minds and AI Health Monitoring.' },
      { name: 'Bootstrap', info: 'Used for the Developers Hub Agency website.' },
      { name: 'Responsive Web Design', info: 'Interfaces that adapt from mobile to desktop.' },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Python', info: 'Backend development and AI-related services.' },
      { name: 'Django', info: 'Backend work at Tafsol and Developers Hub.' },
      { name: 'Node.js', info: 'Server-side JavaScript for the e-commerce and health projects.' },
      { name: 'Express', info: 'API layer in the e-commerce and AI Health Monitoring projects.' },
      { name: 'FastAPI', info: 'Python API service in the AI Health Monitoring project.' },
    ],
  },
  {
    category: 'Database',
    items: [
      { name: 'MongoDB', info: 'Used in the e-commerce and AI Health Monitoring projects.' },
      { name: 'Database Handling', info: 'Database-related tasks and data handling in professional roles.' },
    ],
  },
  {
    category: 'CMS',
    items: [{ name: 'WordPress', info: 'Content-managed websites; also a listed certification.' }],
  },
  {
    category: 'Tools / Professional',
    items: [
      { name: 'GitHub', info: 'Version control and project hosting.' },
      { name: 'Microsoft Word', info: 'Documentation and professional writing.' },
      { name: 'Microsoft Excel', info: 'Spreadsheets and data organization.' },
      { name: 'Internet Research', info: 'Researching tools, solutions and requirements.' },
      { name: 'Data Management', info: 'Organizing and handling data.' },
    ],
  },
]

export const process = [
  { number: '01', title: 'Understand', text: 'Clarify the goal, the users and the constraints before writing a line of code.' },
  { number: '02', title: 'Design', text: 'Plan the structure, data and interface so the product is simple to use and maintain.' },
  { number: '03', title: 'Build', text: 'Develop the frontend and backend together, with clean, reusable code.' },
  { number: '04', title: 'Refine', text: 'Test, debug and polish across devices until it works the way it should.' },
]

export const education = [
  {
    school: 'Sir Syed University of Engineering and Technology',
    program: 'BBA / Software Engineering Studies',
    period: '2019–2021',
  },
  {
    school: 'Aptech North Nazimabad',
    program: 'Diploma in Software Engineering',
    period: 'Started 2021',
    status: 'Frozen / Discontinued',
  },
  {
    school: 'Board of Intermediate Education Karachi',
    program: 'Intermediate — Pre-Engineering',
    period: '2017',
  },
  {
    school: 'Ladybird Grammar School',
    program: 'Matric',
    period: '2015',
  },
]

export const certifications = [
  'Freelancing',
  'Digital Marketing',
  'WordPress',
  'SEO',
  'Digital Literacy',
  'From Student Project to Startup',
]

export const projectTypes = [
  'Web application',
  'Website',
  'E-commerce',
  'Improve an existing platform',
  'Join my team',
  'Other',
]

// Fill in the empty links below; icons only appear for links that are set.
export const agency = {
  name: 'Code Minds',
  url: 'https://codes-minds-4a6e.vercel.app/',
  services: [
    'Web development',
    'WordPress development',
    'UI/UX design',
    'Graphic design',
    'Video editing',
    'E-commerce solutions',
    'SEO optimization',
    'Website maintenance',
  ],
  team: [
    { name: 'Umair Nasim', role: 'Full Stack Web Developer', github: 'https://github.com/umairnaseem123', linkedin: 'https://www.linkedin.com/in/muhammad-umair-510a16172/' },
    { name: 'Anosha Ansari', role: 'Founder & Developer', github: 'https://github.com/codes0090', linkedin: 'https://www.linkedin.com/in/anosha-ansari908/' },
  ],
}
