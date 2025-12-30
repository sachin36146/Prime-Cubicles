
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  seoKeywords: string[];
  useCase: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
}

export interface CaseStudy {
  id: string;
  projectName: string;
  clientType: string;
  problem: string;
  solution: string;
  tools: string[];
  result: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}
