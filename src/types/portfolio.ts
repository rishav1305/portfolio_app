// Consolidated portfolio types — single source of truth for TypeScript interfaces
// Data lives in Supabase; these types define the shape of fetched data.

export type SkillRating = {
  name: string;
  level: number;
};

export type SkillCategory = {
  [key: string]: SkillRating[];
};

export type WorkExperience = {
  period: string;
  endDate: string | null;
  startDate: string;
  location: string;
  company: string;
  role: string;
  achievements: string[];
  experienceType: 'professional' | 'freelance';
  tags?: string[];
  details?: string[];
  clients?: {
    name: string;
    description: string | string[];
  }[];
  remoteWork?: boolean;
  teamSize?: number;
  managerialAchievements?: string[];
  aiEnablement?: string[];
  technicalEnvironment?: string[];
  keyMetrics?: { label: string; value: string }[];
};

export type Education = {
  period: string;
  location: string;
  institution: string;
  degree: string;
  focusArea: string;
  description?: string;
};

export type PersonalInfo = {
  name: string;
  title: string;
  email: string;
  shortBio: string;
  longBio: string[];
  location: string;
  yearsExperienceStartYear: number;
  whatsapp: string;
  contactInfo: {
    sidebarTitle: string;
    buttonText: string;
  };
  socialMedia: {
    github: string;
    linkedin: string;
    leetcode: string;
    medium: string;
  };
  domainExpertise?: string[];
};

export type Project = {
  title: string;
  description: string;
  short_description?: string;
  image: string;
  thumbnail?: string;
  techStack: string[];
  link: string;
  category: string;
  company?: string;
  clients?: string;
};

export type Testimonial = {
  name: string;
  position: string;
  company: string;
  text: string;
  image?: string;
  location?: string;
};

export type CaseStudy = {
  id: string;
  title: string;
  role: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics: { label: string; value: string }[];
  techStack: string[];
};

export type ChatQuestion = {
  id: string;
  text: string;
  response: string;
};

export type Brand = {
  id: string;
  name: string;
  logo: string;
  color?: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  iconName: string;
  skills: string[];
};

export type ServiceV2 = {
  title: string;
  description: string;
  outcomes: string[];
};

export type ServiceV3 = {
  title: string;
  description: string;
  priceRange: string;
  timeline: string;
  features: string[];
};

export type StatItem = {
  label: string;
  value: string;
  icon?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type SkillRadarDataPoint = {
  subject: string;
  A: number;
  fullMark: number;
};

// SiteConfig — maps to the single-row `site_config` Supabase table
export type SiteConfig = {
  name: string;
  title: string;
  email: string;
  short_bio: string;
  long_bio: string[];
  location: string;
  years_experience_start_year: number;
  whatsapp: string;
  contact_info: {
    sidebarTitle: string;
    buttonText: string;
  };
  social_media: {
    github: string;
    linkedin: string;
    leetcode: string;
    medium: string;
  };
  domain_expertise: string[];
};
