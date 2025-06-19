// Centralized mock data for the hackathon template
// Replace with real API calls when ready to connect to a backend

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  location: string;
  joinDate: string;
  avatar?: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  status: 'active' | 'completed' | 'paused';
  progress: number;
  team: string[];
  dueDate: string;
}

export interface Metric {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
}

// Mock Users Data
export const mockUsers: User[] = [
  {
    id: 1,
    name: 'Alex Chen',
    email: 'alex.chen@example.com',
    role: 'Full Stack Developer',
    status: 'active',
    location: 'San Francisco, CA',
    joinDate: '2024-01-15'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah.j@example.com',
    role: 'UI/UX Designer',
    status: 'active',
    location: 'New York, NY',
    joinDate: '2024-01-10'
  },
  {
    id: 3,
    name: 'Mike Rodriguez',
    email: 'mike.r@example.com',
    role: 'Product Manager',
    status: 'inactive',
    location: 'Austin, TX',
    joinDate: '2024-01-05'
  },
  {
    id: 4,
    name: 'Emily Davis',
    email: 'emily.davis@example.com',
    role: 'Frontend Developer',
    status: 'active',
    location: 'Seattle, WA',
    joinDate: '2024-01-20'
  },
  {
    id: 5,
    name: 'James Wilson',
    email: 'james.w@example.com',
    role: 'Backend Developer',
    status: 'active',
    location: 'Los Angeles, CA',
    joinDate: '2024-01-12'
  }
];

// Mock Projects Data
export const mockProjects: Project[] = [
  {
    id: 1,
    name: 'E-commerce Platform',
    description: 'Modern online shopping experience with AI recommendations',
    status: 'active',
    progress: 75,
    team: ['Alex Chen', 'Sarah Johnson'],
    dueDate: '2024-03-15'
  },
  {
    id: 2,
    name: 'Social Media Dashboard',
    description: 'Analytics and management tool for social media accounts',
    status: 'active',
    progress: 45,
    team: ['Mike Rodriguez', 'Emily Davis'],
    dueDate: '2024-04-01'
  },
  {
    id: 3,
    name: 'Learning Management System',
    description: 'Educational platform with interactive courses and quizzes',
    status: 'completed',
    progress: 100,
    team: ['James Wilson', 'Alex Chen'],
    dueDate: '2024-02-28'
  }
];

// Mock Metrics Data
export const mockMetrics: Metric[] = [
  {
    title: 'Total Users',
    value: '2,543',
    change: '+12%',
    trend: 'up'
  },
  {
    title: 'Active Projects',
    value: '18',
    change: '+3',
    trend: 'up'
  },
  {
    title: 'Completion Rate',
    value: '94.2%',
    change: '+2.1%',
    trend: 'up'
  },
  {
    title: 'Team Satisfaction',
    value: '4.8/5',
    change: '+0.2',
    trend: 'up'
  }
];

// Utility functions for mock data
export function getUserById(id: number): User | undefined {
  return mockUsers.find(user => user.id === id);
}

export function getProjectById(id: number): Project | undefined {
  return mockProjects.find(project => project.id === id);
}

export function searchUsers(query: string): User[] {
  if (!query) return mockUsers;
  
  return mockUsers.filter(user =>
    user.name.toLowerCase().includes(query.toLowerCase()) ||
    user.email.toLowerCase().includes(query.toLowerCase()) ||
    user.role.toLowerCase().includes(query.toLowerCase())
  );
}

export function filterUsersByStatus(status: 'active' | 'inactive'): User[] {
  return mockUsers.filter(user => user.status === status);
}

// Simulate API delay for realistic development experience
export function delay(ms: number = 500): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Mock API functions
export async function fetchUsers(): Promise<User[]> {
  await delay();
  return mockUsers;
}

export async function fetchProjects(): Promise<Project[]> {
  await delay();
  return mockProjects;
}

export async function fetchMetrics(): Promise<Metric[]> {
  await delay();
  return mockMetrics;
}