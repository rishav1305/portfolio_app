// Database row types — match the exact column names from Supabase tables.
// Used in service fetchers to type the raw DB response before mapping to app types.

export type ExperienceRow = {
  id: string;
  company: string;
  role: string;
  period: string;
  start_date: string;
  end_date: string | null;
  location: string;
  experience_type: 'professional' | 'freelance';
  description: string | null;
  achievements: string[];
  details: string[];
  tags: string[];
  remote_work: boolean;
  team_size: number | null;
  tech_stack: string[];
  clients: { name: string; description: string | string[] }[] | null;
  managerial_achievements: string[] | null;
  ai_enablement: string[] | null;
  key_metrics: { label: string; value: string }[] | null;
  created_at: string;
  updated_at: string;
};

export type EducationRow = {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  focus_area: string;
  description: string | null;
  created_at: string;
  updated_at: string;
};

export type ProjectRow = {
  id: string;
  title: string;
  description: string;
  short_description: string | null;
  image: string;
  thumbnail: string | null;
  tech_stack: string[];
  link: string;
  category: string;
  company: string | null;
  clients: string | null;
  created_at: string;
  updated_at: string;
};

export type TestimonialRow = {
  id: string;
  name: string;
  position: string;
  company: string;
  text: string;
  image: string | null;
  location: string | null;
  display_order: number;
  created_at: string;
  updated_at: string;
};

export type CaseStudyRow = {
  id: string;
  case_id: string;
  title: string;
  role: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics: { label: string; value: string }[];
  tech_stack: string[];
  created_at: string;
  updated_at: string;
};

export type BrandRow = {
  id: string;
  name: string;
  logo: string;
  color: string | null;
  display_order: number;
  created_at: string;
  updated_at: string;
};

export type SkillRadarRow = {
  id: string;
  subject: string;
  value: number;
  full_mark: number;
  display_order: number;
  created_at: string;
  updated_at: string;
};

export type StatsDashboardRow = {
  id: string;
  label: string;
  value: string;
  icon: string | null;
  display_order: number;
  created_at: string;
  updated_at: string;
};

export type FAQRow = {
  id: string;
  question: string;
  answer: string;
  display_order: number;
  created_at: string;
  updated_at: string;
};

export type ChatQuestionRow = {
  id: string;
  question_id: string;
  text: string;
  response: string;
  display_order: number;
  created_at: string;
  updated_at: string;
};

export type SiteConfigRow = {
  id: string;
  name: string;
  title: string;
  email: string;
  short_bio: string;
  long_bio: string[];
  location: string;
  years_experience_start_year: number;
  whatsapp: string;
  contact_info: { sidebarTitle: string; buttonText: string };
  social_media: { github: string; linkedin: string; leetcode: string; medium: string };
  domain_expertise: string[];
  created_at: string;
  updated_at: string;
};

export type ServiceRow = {
  id: string;
  title: string;
  description: string;
  icon_name: string | null;
  skills: string[] | null;
  service_type: string | null;
  price_range: string | null;
  timeline: string | null;
  features: string[] | null;
  display_order: number;
  created_at: string;
  updated_at: string;
};

export type SkillCategoryRow = {
  id: string;
  category_name: string;
  skills: { name: string; level: number }[];
  display_order: number;
  created_at: string;
  updated_at: string;
};
