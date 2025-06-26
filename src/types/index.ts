export interface NavItem {
  name: string;
  href: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface WorkflowItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  color:string;
}

export interface StatItem {
  id: number;
  value: number;
  label: string;
  suffix: string;
}

export interface Clients{
  name: string;
  logo: string;
  website?: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  position: string;
  company: string;
  gender: string;
  content: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

export interface Partner {
  id: number;
  name: string;
  logo: string;
  website?: string;
}

export interface CategoryFilter {
  id: string;
  name: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface StatItem {
  id: number;
  value: number;
  label: string;
  suffix: string;
  icon: string;
  color: string;
}
