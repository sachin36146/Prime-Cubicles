
import { Service, Product, CaseStudy, BlogPost } from './types';

export const SERVICES: Service[] = [
  {
    id: 'toilet-partitions',
    title: 'Toilet Partition Cubicles',
    description: 'High-durability, moisture-resistant partitions using Action TESA boards and SS304 hardware.',
    icon: 'fa-restroom',
    seoKeywords: ['toilet partitions india', 'washroom cubicles', 'commercial restroom partitions'],
    useCase: 'Malls, Airports, Corporate Offices'
  },
  {
    id: 'office-partitions',
    title: 'Office Partition Systems',
    description: 'Acoustically optimized modular glass and board partitions for productive work environments.',
    icon: 'fa-briefcase',
    seoKeywords: ['office cabin partitions', 'glass office dividers', 'modular office walls'],
    useCase: 'Co-working spaces, IT Hubs, Executive Cabins'
  },
  {
    id: 'urinal-partitions',
    title: 'Urinal Partitions',
    description: 'Sleek, hygienic, and privacy-focused dividers designed for high-traffic commercial washrooms.',
    icon: 'fa-person-half-dress',
    seoKeywords: ['urinal dividers', 'washroom privacy screens', 'commercial urinal partitions'],
    useCase: 'Sports Complexes, Educational Institutions'
  },
  {
    id: 'modular-cubicles',
    title: 'Modular Cubicles',
    description: 'Flexible workstation solutions that adapt to your growing team and space requirements.',
    icon: 'fa-boxes-stacked',
    seoKeywords: ['modular workstations', 'cubicle design', 'office desk partitions'],
    useCase: 'Startups, Call Centers'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'hpl-cubicles',
    name: 'HPL Cubicles',
    description: 'High-Pressure Laminate partitions known for extreme durability and vandal resistance.',
    image: 'https://picsum.photos/seed/hpl/800/600',
    category: 'Premium'
  },
  {
    id: 'compact-laminate',
    name: 'Compact Laminate Cubicles',
    description: 'The industry standard for hygiene and longevity. Waterproof and scratch-resistant.',
    image: 'https://picsum.photos/seed/compact/800/600',
    category: 'Standard'
  },
  {
    id: 'board-based',
    name: 'Board Based Cubicles',
    description: 'Cost-effective solutions using premium Action TESA boards for dry-area partitions.',
    image: 'https://picsum.photos/seed/board/800/600',
    category: 'Budget-Friendly'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'tech-park-bangalore',
    projectName: 'Global Tech Park Renovation',
    clientType: 'IT Infrastructure',
    problem: 'The client needed 50+ washroom cubicles installed within 10 days while maintaining strict hygiene standards.',
    solution: 'Deployed 12mm Compact Laminate partitions with antimicrobial coatings.',
    tools: ['AutoCAD', 'AI Prompting for layout optimization', 'Project Management'],
    result: 'Project delivered 2 days early. Client reported 100% satisfaction on hardware finish.',
    image: 'https://picsum.photos/seed/techpark/800/600'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Best Toilet Partition Materials in India',
    excerpt: 'A comprehensive guide on choosing between HPL, Compact Laminate, and Action TESA boards...',
    category: 'Industry Guide',
    date: 'Oct 24, 2023',
    readTime: '5 min'
  },
  {
    id: '2',
    title: 'HPL vs Compact Laminate Cubicles',
    excerpt: 'Detailed comparison focusing on cost, durability, and moisture resistance factors...',
    category: 'Comparison',
    date: 'Nov 12, 2023',
    readTime: '8 min'
  },
  {
    id: '3',
    title: 'Office Partition Design Ideas for 2024',
    excerpt: 'How modular systems are redefining modern open-office layouts for better focus...',
    category: 'Design',
    date: 'Dec 05, 2023',
    readTime: '6 min'
  }
];
