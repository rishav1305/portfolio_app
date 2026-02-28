// Define types for better TypeScript support
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
  // New fields for Tech Lead / Manager roles
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
  logo: string; // Path to logo image or text fallback
  color?: string; // Brand color for hover effects
};

export type Service = {
  id: string;
  title: string;
  description: string;
  iconName: string; // e.g., 'BrainCircuit', 'DatabaseZap', 'CloudCog'
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


// The main data object
const portfolioData = {
  personalInfo: {
    name: "RISHAV CHATTERJEE",
    title: "AI Engineer | AI Consultant | AI Researcher",
    email: "rishav.chatt@gmail.com",
    shortBio: "I architect and ship production AI systems — from mesh networks to autonomous agents — using AI coding tools as my development environment. 8 years of Python, SQL, and data platform engineering give me the domain knowledge to direct AI effectively.",
    longBio: [
      "I architect and ship production AI systems using AI coding tools as my primary development environment. 31 interconnected projects: distributed mesh networks, autonomous agents, self-healing infrastructure, multi-model orchestration. I design every system and direct AI tools to build it.",
      "I solve AI infrastructure problems for enterprises. GOAT agentic AI platform at Gartner (5,000+ users, 88% query resolution improvement), data quality frameworks at IBM-TWC (60% processing time reduction), data platforms at Novartis (15 pharmaceutical brands, 99.5% accuracy). 6 years of data engineering domain knowledge, now multiplied by AI tooling.",
      "CARS (Cost-Aware Reasoning Score) is an original efficiency metric I created for evaluating local AI models against resource cost. 10-task benchmark suite with Claude baselines. I study how to measure and optimize AI systems, not just build them.",
      "I am transparent about how I work: I write Python, SQL, and Bash (6 years hands-on). I build React, FastAPI, Tauri, and distributed systems with AI coding tools. I architect and configure Claude Code with custom agents, hooks, CLAUDE.md workflows, and commands. Primary tool: Claude Code. Also: Google Copilot, Cline, Kilo Code."
    ],
    location: "Delhi",
    yearsExperienceStartYear: 2018,
    whatsapp: "+91 9871257448",
    contactInfo: {
      sidebarTitle: "CONNECT WITH RISHAV",
      buttonText: "CONNECT WITH RISHAV"
    },
    socialMedia: {
      github: "https://github.com/rishav1305",
      linkedin: "https://www.linkedin.com/in/chatterjeerishav/",
      leetcode: "https://leetcode.com/u/rishav115/",
      medium: "https://medium.com/@chatterjeerishav96"
    },
    domainExpertise: [
      "Sales",
      "Procurement",
      "Customer Feedback",
      "Healthcare",
      "Advertising",
      "Supply Chain Management",
      "E-commerce Analytics",
      "Pharmaceutical Data Management",
      "Healthcare Forecasting",
      "Retail Operations",
      "Cloud Infrastructure Migration",
      "Remote Work"
    ]
  },

  // Service Pillars
  services: [
    {
      id: "s1",
      title: "AI System Architecture",
      description: "I architect production AI systems — from multi-agent orchestration to distributed mesh networks — using AI coding tools as my development environment. 31 interconnected projects shipped, 9,700 lines of production code running autonomously.",
      iconName: "Cpu",
      skills: ["Claude Code", "System Design", "Multi-Agent Orchestration", "Distributed Systems"]
    },
    {
      id: "s2",
      title: "Data Platform Consulting",
      description: "I solve data infrastructure problems for enterprises. 6 years of hands-on Python, SQL, Airflow, Snowflake, and AWS experience across healthcare, advertising, and enterprise platforms.",
      iconName: "Database",
      skills: ["Python", "SQL", "Snowflake", "AWS", "Airflow", "dbt"]
    },
    {
      id: "s3",
      title: "AI Research & Evaluation",
      description: "CARS metric — an original efficiency metric for evaluating local AI models. I study how to measure and optimize AI systems with reproducible benchmarks and Claude baselines.",
      iconName: "FlaskConical",
      skills: ["CARS Metric", "Model Evaluation", "Benchmarking", "Claude Baselines"]
    }
  ],

  // New data for Skills Radar Chart
  skillRadarData: [
    { subject: 'AI Tool Mastery', A: 95, fullMark: 100 },
    { subject: 'System Architecture', A: 90, fullMark: 100 },
    { subject: 'Data Engineering', A: 90, fullMark: 100 },
    { subject: 'AI/ML Engineering', A: 85, fullMark: 100 },
    { subject: 'Cloud Infrastructure', A: 80, fullMark: 100 },
    { subject: 'Problem Solving', A: 95, fullMark: 100 },
  ],

  // AI Chat Simulation Data
  chatSimulation: [
    {
      id: "q1",
      text: "How does Rishav build his projects?",
      response: "Rishav uses AI coding tools — primarily Claude Code — as his development environment. He writes Python and SQL by hand (6 years experience), but builds React, FastAPI, distributed systems, and desktop apps by directing AI tools with architectural intent. He configures Claude Code with custom agents, hooks, and CLAUDE.md workflows."
    },
    {
      id: "q2",
      text: "What is the Soul ecosystem?",
      response: "Soul is a 31-project AI ecosystem Rishav architects and maintains — 20 public repositories covering agent safety, distributed mesh networking, self-healing infrastructure, model evaluation, and an AI outreach platform. soul-os is the production core: 9,700 lines running autonomously on a Raspberry Pi."
    },
    {
      id: "q3",
      text: "What enterprise experience does he have?",
      response: "Rishav launched GOAT, Gartner's agentic AI platform serving 5,000+ users (88% query resolution improvement). At IBM-TWC, he reduced processing time by 60% and infrastructure costs by 30%. At Novartis, he maintained 99.5% data accuracy across 15 pharmaceutical brands."
    },
    {
      id: "q4",
      text: "What is the CARS metric?",
      response: "CARS (Cost-Aware Reasoning Score) is an original metric Rishav created: Reasoning Accuracy / (VRAM_GB x Latency_s). It measures whether a local AI model gives enough cognitive capability per unit of hardware cost. He built a 10-task benchmark suite with Claude baselines to test this."
    }
  ],

  // Strategic Case Studies
  caseStudies: [
    {
      id: 'cs1',
      title: 'Programmatic Ad Pipleline Optimization',
      role: 'Tech Lead',
      challenge: 'Legacy processing pipeline was taking 14+ hours, frequently missing internal SLAs and causing revenue attribution delays.',
      solution: 'Re-architected the entire flow using AWS Batch for parallel processing and optimized Snowflake merge logic to reduce lock contention.',
      impact: 'Reduced runtime to ~5 hours (60% improvement) and cut compute costs by 30% by moving off always-on instances.',
      metrics: [
        { label: 'Time Saved', value: '60%' },
        { label: 'Cost Reduction', value: '30%' },
        { label: 'SLA Adherence', value: '99.9%' }
      ],
      techStack: ['AWS Batch', 'Snowflake', 'Python', 'Docker']
    },
    {
      id: 'cs2',
      title: 'Enterprise Data Quality Framework',
      role: 'Architect',
      challenge: 'Manual data validation across 15+ brands led to silent failures and bad data entering executive dashboards.',
      solution: 'Built a serverless validation framework (AWS Lambda) with AI-generated rules that syncs bidirectional with Google Sheets for non-tech users.',
      impact: 'Eliminated manual QA time by 100% and caught 50+ critical data issues in the first month before they reached production.',
      metrics: [
        { label: 'Manual Effort', value: '-100%' },
        { label: 'Coverage', value: '15 Brands' },
        { label: 'Errors Caught', value: '50+' }
      ],
      techStack: ['AWS Lambda', 'OpenAI', 'Google Sheets API', 'Python']
    },
    {
      id: "cs4",
      title: "GOAT - Gartner's Own Agentic Tech",
      role: "AI Platform Lead",
      challenge: "Gartner associates needed quick access to client information, engagement data, and research materials but relied on fragmented internal tools.",
      solution: "Built GOAT, a conversational agentic AI assistant with RAG pipelines, multi-agent orchestration, and re-architected infrastructure from AWS EKS to serverless Lambda.",
      impact: "Serving 5,000+ concurrent users with 88% query resolution improvement, 35% infrastructure cost reduction, and 40% token efficiency via A/B testing.",
      metrics: [
        { label: "Users", value: "5,000+" },
        { label: "Resolution", value: "+88%" },
        { label: "Cost Saved", value: "35%" }
      ],
      techStack: ["Python", "AWS Lambda", "RAG", "Multi-Agent System"]
    },
    {
      id: "cs5",
      title: "Soul Mesh - Distributed Compute Network",
      role: "Architect",
      challenge: "Multiple low-powered devices (Raspberry Pi, old PCs) sitting idle while cloud GPU costs for LLM inference are prohibitive.",
      solution: "Built a distributed compute mesh that combines multiple devices into one virtual machine using hub-agent model with WebSocket heartbeats, JWT auth, and mDNS discovery.",
      impact: "v0.2.0 with 253 tests passing, live-tested across 2 devices. Enables local LLM inference without cloud costs.",
      metrics: [
        { label: "Tests", value: "253" },
        { label: "Devices", value: "2+" },
        { label: "Cloud Cost", value: "$0" }
      ],
      techStack: ["Python", "FastAPI", "WebSocket", "JWT", "mDNS"]
    },
    {
      id: "cs6",
      title: "Soul Outreach - AI Marketing Pipeline",
      role: "Architect",
      challenge: "Manual outreach workflows — finding contacts, researching them, drafting personalized messages — take hours per prospect and don't scale.",
      solution: "Building a CLI pipeline that automates the full outreach flow: import contacts, enrich with AI research, draft personalized messages, and send — all from the terminal.",
      impact: "End-to-end automation of outreach workflows, from contact import to personalized message delivery.",
      metrics: [
        { label: "Pipeline", value: "End-to-End" },
        { label: "Steps", value: "4-Stage" },
        { label: "Interface", value: "CLI" }
      ],
      techStack: ["Python", "FastAPI", "Pydantic", "aiosqlite", "structlog"]
    }
  ],

  // V3 Specific Data
  statsDashboard: [
    { label: "Users Impacted", value: "7,000+" },
    { label: "Cost Savings Delivered", value: "$2M+" },
    { label: "Enterprise Clients", value: "15+" },
    { label: "Client Satisfaction", value: "99.5%" }
  ] as StatItem[],

  servicesV3: [
    {
      title: "AI System Architecture",
      description: "Custom Agentic AI solutions and LLM integration for enterprise workflows.",
      priceRange: "$5k - $15k",
      timeline: "4-8 weeks",
      features: ["RAG Pipelines", "Multi-Agent Systems", "Custom Fine-tuning"]
    },
    {
      title: "Data Pipeline Optimization",
      description: "Modernize legacy ETLs to reduce latency and cloud costs.",
      priceRange: "$3k - $10k",
      timeline: "2-6 weeks",
      features: ["Snowflake/Databricks", "Airflow Migration", "Cost Audit"]
    },
    {
      title: "Enterprise Data Strategy",
      description: "Consulting on data governance, stack selection, and team structure.",
      priceRange: "$200/hr or Retainer",
      timeline: "Ongoing",
      features: ["Tech Stack Audit", "Hiring Support", "Roadmap Planning"]
    }
  ] as ServiceV3[],

  faqs: [
    {
      question: "What is your typical engagement model?",
      answer: "I work primarily on a project basis with fixed milestones. For ongoing advisory, I offer monthly retainer packages."
    },
    {
      question: "Do you handle the entire development lifecycle?",
      answer: "Yes, from architectural design and coding to deployment and CI/CD setup. I can also work with your existing team to hand off knowledge."
    },
    {
      question: "What industries have you worked with?",
      answer: "My core experience is in AdTech, Healthcare, Retail, and SaaS. However, data and AI principles apply universally."
    }
  ] as FAQItem[],


  freelanceExperience: [
    {
      period: "Jun 2025",
      startDate: "2025-06-01",
      endDate: "2025-06-30",
      location: "Delhi, India",
      company: "Green Space Energies",
      role: "Web Developer",
      experienceType: "freelance" as const,

      achievements: [
        "Successfully architected and launched greenspaceenergies.com, providing the client with a professional, high-performance digital presence.",
        "Engineered a zero-cost hosting strategy by leveraging Vercel's serverless infrastructure, meeting client budget constraints without sacrificing scalability."
      ],
      details: [
        "AI-Accelerated Full-Stack Development: Developed the entire platform from scratch using Next.js, utilizing Cline and Claude 3.5 Sonnet to optimize the development lifecycle.",
        "Infrastructure & Deployment: Orchestrated the complete production pipeline, including domain registration, DNS configuration, and automated CI/CD via Vercel.",
        "Responsive Architecture: Implemented a mobile-first design philosophy to ensure a seamless and fluid user experience across all device ecosystems."
      ],
      tags: ["Full-Stack Development", "AI-Driven Engineering", "Cloud Deployment"],
      remoteWork: true,
      technicalEnvironment: ["Next.js", "React", "Vercel", "Cline/Claude 3.5", "Tailwind CSS", "DNS Management"]
    },
    {
      period: "Feb 2023",
      startDate: "2023-02-13",
      endDate: null,
      location: "Pennsylvania, USA",
      company: "IBM - TWC",
      role: "Lead AI Engineer",
      experienceType: "freelance" as const,
      achievements: [
        "Engineered an intelligent Data Quality Framework utilizing asynchronous AWS Lambda architecture. Integrated AI-driven anomaly detection to automate the identification and remediation of data integrity issues in real-time.",
        "Architected a large-scale migration to dbt (Data Build Tool), modernizing the transformation layer. Achieved a 40% reduction in processing latency and a 30% decrease in infrastructure overhead through optimized modular modeling.",
        "Spearheaded the enterprise-wide transition from Qlik Sense to Preset, enhancing self-service analytics accessibility while significantly reducing licensing expenditure.",
        "Pioneered a unified B2B/B2C analytics engine, delivering high-fidelity insights through probabilistic forecasting, multi-touch marketing attribution, and cohort-based renewal metrics.",
        "Systematized and refactored the Programmatic Advertising data pipeline, leveraging parallel processing to realize a 60% gain in computational efficiency.",
        "Orchestrated a seamless ETL integration between NetSuite and Salesforce, ensuring bidirectional data consistency for critical financial invoicing and CRM workflows.",
        "Decoupled legacy reporting by migrating Qlik Sense nPrinting logic to a Python-based framework, enabling greater flexibility, version control, and integration with modern AI workflows."
      ],
      details: [
        "Initial Role: Started as an individual contributor, leveraging my expertise in Python and SQL.",
        "Expanded Responsibilities: Took on additional roles and responsibilities due to team restructuring during multiple layoffs.",
        "Current Role: Leading multiple projects across B2B, B2C and various migrations, including requirements gathering, task delegation and project management.",
        "Strategic Leadership: Orchestrated the adoption of Agentic AI workflows, transforming legacy data operations into autonomous, self-healing systems.",
        "Mentorship: Mentored a cross-functional team of 8 (Dev, QA, DevOps) in cloud-native best practices and AI engineering principles.",
        "Key Achievement: Successfully delivered enterprise-wide analytics platform accessed by 200+ stakeholders daily",
        "Technical InSnovation: Pioneered implementation of ML algorithms for predictive analytics in advertisement performance",
        "Collaboration: Worked closely with Sylvia and Ivan on ad hoc requests and strategic initiatives",
        "ExecutSive Reporting: Built Google Sheets dashboard for CEO to track user behavior metrics",
        "B2B Reporting: Launched comprehensive B2B reporting including Funnel Analysis, Forecasting, Renewal Metrics, and Attribution",
        "Technical Growth: Advanced skills in Python (pandas, automation), SQL (advanced queries), Salesforce & Tableau CRM (QA, dashboards), Qlik Sense (debugging, dashboarding), AWS (Glue, EMR, Athena, QuickSight, Batch, S3, EC2), Airflow (DAG creation, recovery), and supporting tools like Jira, Confluence, Git Bash, Linux",

      ],
      tags: ["Data Engineering", "Cloud Infrastructure", "Team Leadership", "Machine Learning", "Enterprise Integration", "Remote Work"],
      remoteWork: true,
      teamSize: 8,
      managerialAchievements: [
        "Leading a team of 8 engineers (Dev, QA, DevOps) in delivering enterprise-wide analytics platforms.",
        "Orchestrated the adoption of Agentic AI workflows, transforming legacy data operations.",
        "Reduced ad-hoc reporting requests by 65% through GenAI-powered self-service tools."
      ],
      aiEnablement: [
        "Orchestrated the adoption of Agentic AI workflows, transforming legacy data operations into autonomous, self-healing systems.",
        "Engineered an intelligent Data Quality Framework with AI-driven anomaly detection to automate identification and remediation of data integrity issues.",
        "Pioneered implementation of ML algorithms for predictive analytics in advertisement performance."
      ],
      technicalEnvironment: ["Agentic AI", "Python", "SQL", "AWS", "Airflow", "Tableau CRM", "Salesforce", "Qlik Sense", "Preset", "Jira", "Confluence", "Git Bash", "Linux", "Google Ads Manager"],
      keyMetrics: [
        { label: "Processing Time Reduced", value: "-60%" },
        { label: "Infra Cost Savings", value: "-30%" },
        { label: "AI Adoption", value: "+90%" }
      ]
    },
    {
      period: "Dec 2019",
      startDate: "2019-12-01",
      endDate: "2019-12-31",
      location: "Delhi, India",
      company: "Reventus Services",
      role: "Web Developer",
      experienceType: "freelance" as const,
      achievements: [
        "Architechted and developed a scalable and responsive website for the client reventus.in",
        "Sucessfully deployed and hosted the single page scrollable website on goDaddy"
      ],
      details: [
        "Requirement Analysis: Collaborated with the client to understand business needs and translate them into technical requirements.",
        "UI/UX Implementation: Translated design mockups into responsive, pixel-perfect web pages.",
        "Delivery: Successfully launched the platform within the stipulated timeline."
      ],
      tags: ["Web Development", "HTML/CSS"],
      remoteWork: true,
      technicalEnvironment: ["HTML", "CSS", "jQuery", "Bootstrap"]
    }
  ],

  servicesV2: [
    {
      title: "Data Engineering",
      description: "Design and build scalable, reliable data pipelines that transform raw data into trusted, analytics-ready assets.",
      outcomes: ["Faster reporting", "Cleaner data", "Reduced failures"]
    },
    {
      title: "Cloud & Platform Engineering",
      description: "Architect and optimize cloud-native data platforms on AWS and modern data stacks for performance, cost, and scale.",
      outcomes: ["Lower cloud costs", "High availability", "Secure infrastructure"]
    },
    {
      title: "Analytics & Dashboards",
      description: "Build actionable dashboards and data models that turn complex datasets into clear, decision-ready insights.",
      outcomes: ["Better decisions", "Real-time visibility", "Stakeholder alignment"]
    },
    {
      title: "AI / ML & Automation",
      description: "Develop intelligent automation and ML solutions to reduce manual work, detect patterns, and predict outcomes.",
      outcomes: ["Time savings", "Predictive insights", "Smarter systems"]
    }
  ] as ServiceV2[],

  professionalExperience: [
    {
      period: "Dec 2022 - Present",
      startDate: "2022-12-26",
      endDate: null,
      location: "Gurugram, Haryana",
      company: "Gartner India (Bitwise)",
      role: "Project Leader - AI Engineer",
      experienceType: "professional" as const,
      achievements: [
        "Spearheaded the company-wide launch of GOAT (Gartner’s Own Agentic Tech), an enterprise-grade Agentic AI platform, **reducing internal query resolution time by 88%**.",
        "Re-architected the GOAT platform from AWS EKS to a serverless AWS Lambda framework, enabling **scale for 5,000+ concurrent users** while reducing cloud costs.",
        "Engineered an automated A/B testing framework for LLMs, benchmarking performance and **improving token efficiency by 40%**.",
        "Developed a centralized multi-agent ecosystem that empowers sales teams, **automating 65% of routine client research tasks**.",
        "Optimized Unified AL pipelines to achieve a landmark **88% reduction in processing latency** and a **60% decrease in total operational costs**."
      ],

      details: [
        "Initiated tenure at Gartner within the Strategic Supply Chain (SSC) team, managing high-visibility, mission-critical data architectures.",
        "Managed a legacy system with 7,000+ end users, navigating a high-pressure environment to implement complex business logic refinements and enhancements.",
        "Led data pipeline evolution using an Agile/Sprint model, collaborating closely with QA teams to ensure zero-defect deployments for critical business updates.",
        "Demonstrated technical leadership by identifying and optimizing system bottlenecks under immense workload and high-pressure delivery timelines.",
        "Transitioned to the GOAT team as a Senior AI Developer to lead the technical evolution of Gartner's proprietary Agentic AI platform.",
        "Built the foundational architecture for GOAT, transforming it from an initial Proof of Concept (PoC) to a production-ready enterprise solution.",
        "Scaled the pilot platform from 50 initial users to an enterprise-wide deployment catering to over 5,000 active users.",
        "Modernized the infrastructure stack from EKS to AWS Lambda to handle increased load while significantly reducing cloud overhead.",
        "Currently overseeing a fleet of 20+ specialized AI Agents designed to streamline day-to-day operations for sales and service departments."
      ],

      managerialAchievements: [
        "Directed a cross-functional team of 5 Data Engineers and 3 QA Testers to successfully deploy mission-critical pipeline enhancements.",
        "Orchestrated the migration and modernization of legacy Lotus Notes data into modern Dev, UAT, and Production environments.",
        "Established and implemented rigorous engineering policies, standards, and best-practice methods for AI and data development.",
        "Strategically managed an ever-increasing roadmap of change requests and feature enhancements for high-visibility executive projects."
      ],

      aiEnablement: [
        "Architected the 'GOAT' multi-agent framework to orchestrate complex query resolution and enhance executive productivity.",
        "Implemented high-performance RAG (Retrieval-Augmented Generation) pipelines for semantic search across Gartner’s proprietary research repositories.",
        "Integrated sophisticated multi-agent orchestration for advanced session management and context-aware interaction models."
      ],
      tags: ["Data Engineering", "Cloud Infrastructure", "Team Leadership", "Machine Learning", "Enterprise Integration", "Remote Work"],
      remoteWork: true,
      teamSize: 15,
      technicalEnvironment: [
        "Python",
        "Ollama",
        "LangGraph",
        "LangChain",
        "AWS (Lambda, EKS, API Gateway, S3, IAM)",
        "SQL",
        "Apache Spark",
        "Airflow",
        "Docker",
        "Jenkins (CI/CD)",
        "LLM Observability",
        "RESTful APIs"
      ], keyMetrics: [
        { label: "Users", value: "7000+" },
        { label: "Processing Time", value: "-88%" },
        { label: "Cost Saving", value: "60%" }
      ]
    },
    {
      period: "May 2020 - Dec 2022",
      startDate: "2020-05-01",
      endDate: "2022-12-31",
      location: "Hyderabad, Telangana",
      company: "Novartis Healthcare Pvt Ltd",
      role: "Senior Data Engineer",
      experienceType: "professional" as const,
      achievements: [
        "Migrated from HIVE to Snowflake, increasing pipeline performance by **60%** and reducing query times.",
        "Orchestrated jobs using Apache Airflow and Alteryx, improving system speed by **40%**.",
        "Maintained **99.5% data accuracy** with **9.5/10 stakeholder satisfaction** across 15 brands.",
        "Led team of 3, collaborating with 15+ data vendors and **10+ brand leaders**.",
        "Led Data Integration for 15 brands and 50+ dosages from 20 vendors; processed over **100GB of daily data**.",
        "Developed sales and demand forecasting dashboards using custom models like the Elapsed Days Model.",
        "Automated previously manual data ingestion pipelines, **reducing manual effort by 20 hours/week**.",
        "Currently automating National Demand Reports using Qlik, Alteryx, SQL, and Python.",
        "Built QA dashboards to monitor data quality and monthly sales projections for Oncology brands."
      ],
      tags: ["Data Migration", "Process Automation", "Team Mentoring", "Remote Work", "Healthcare Analytics", "Pharmaceutical Data"],
      remoteWork: true,
      teamSize: 3,
      managerialAchievements: [
        "Led team of 3, collaborating with 15+ data vendors and 10+ brand leaders",
        "Led Data Integration for 15 brands and 50+ dosages"
      ],
      technicalEnvironment: ["Snowflake", "Apache Airflow", "Alteryx", "Qlik", "Python", "SQL"],
      keyMetrics: [
        { label: "Pipeline Performance", value: "+60%" },
        { label: "System Speed", value: "+40%" },
        { label: "Data Accuracy", value: "99.5%" }
      ]
    },
    {
      period: "Jun 2018 - Apr 2020",
      startDate: "2018-06-01",
      endDate: "2020-04-30",
      location: "Noida, Uttar Pradesh",
      company: "Polestar Solutions and Services",
      role: "Data Engineer",
      experienceType: "professional" as const,
      achievements: [
        "Worked with Jubilant FoodWorks to reduce production pipeline execution time by 66%",
        "Migrated IndiaMART's on-premises system to AWS",
        "Delivered automated prediction model workflows for Reckitt Benckiser using Azure Databricks",
        "Successfully started cloud-based services as a new vertical for the organization"
      ],
      clients: [
        {
          name: "Jubilant FoodWorks Limited",
          description: "The aim of this project was to develop, maintain and upgrade data pipelines to automate and optimize the production process on AWS Infrastructure. Successfully reduced the execution time for the production pipeline by 66% and decreased the cost of Data Storage on Amazon Redshift by 50%."
        },
        {
          name: "IndiaMART InterMESH Ltd",
          description: "This project aimed at migrating the existing on-premises system to Amazon Web Services and generate Power BI reports for Sales and HR by extracting Parquet files from Amazon S3 and creating a warehouse in Amazon Redshift while processing the data in AWS Glue using Pyspark."
        },
        {
          name: "Reckitt Benckiser Group",
          description: "In this project, the aim was to deliver automated workflows of the prediction model using Azure Databricks. Data needed to be extracted from Azure Blob Storage and Azure SQL Data Warehouse, then process the Parquet files are shared with DataRobot and finally the output is sent to the cube."
        }
      ],
      tags: ["AWS Services", "Azure Databricks", "Data Pipeline Optimization", "E-commerce Analytics", "Retail Operations"],
      remoteWork: false,
      teamSize: 4,
      managerialAchievements: [
        "Successfully started cloud-based services as a new vertical for the organization",
        "Delivered automated prediction model workflows"
      ],
      technicalEnvironment: ["AWS", "Azure Databricks", "Pyspark", "AWS Glue", "Redshift", "Power BI"],
      keyMetrics: [
        { label: "Execution Time", value: "-66%" },
        { label: "Storage Cost", value: "-50%" },
        { label: "Cloud Migration", value: "100%" }
      ]
    }
  ],

  education: [
    {
      period: "Aug 2014 - May 2018",
      location: "Rohini, Delhi",
      institution: "Delhi Technological University (DTU)",
      degree: "Bachelor's Degree",
      focusArea: "Environmental Engineering",
      description: "Focused on environmental engineering principles and sustainable technologies. Participated in multiple research projects related to waste management and environmental impact assessment. Developed strong analytical and problem-solving skills through practical lab work and field studies. Active member of the Engineering Society and Environmental Club."
    },
    {
      period: "Apr 2013 - Mar 2014",
      location: "R.K. Puram, Delhi",
      institution: "LBS Senior Secondary School - FIITJEE",
      degree: "12th Education",
      focusArea: "Physics, Chemistry, Mathematics",
      description: "Completed senior secondary education with specialization in science subjects. Achieved academic excellence with particular strength in mathematics and physics. Participated in various inter-school competitions and science exhibitions. Developed strong foundations in analytical thinking and scientific concepts that later supported engineering studies."
    },
    {
      period: "Apr 2011 - Mar 2012",
      location: "Faridabad, Haryana",
      institution: "MVN School, Aravalli Hills",
      degree: "10th Education",
      focusArea: "English, Mathematics, Science, Social Studies, Sanskrit",
      description: "Completed foundational education with a strong academic record across all subjects. Actively participated in various extracurricular activities including sports, cultural events, and science exhibitions. Received recognition for academic performance and leadership skills in group projects and classroom activities."
    }
  ],

  skills: {
    'Agentic AI': [
      { name: 'LangGraph', level: 4 },
      { name: 'LangChain', level: 4 },
      { name: 'Ollama', level: 3 },
    ],
    'MLOps': [
      { name: 'Git', level: 5 },
      { name: 'Docker', level: 4 },
      { name: 'Kubeflow', level: 3 },
      { name: 'DVC', level: 3 },
      { name: 'vLLM', level: 3 },
    ],
    'AI Tool Mastery': [
      { name: 'Claude Code', level: 5 },
      { name: 'CLAUDE.md Configuration', level: 5 },
      { name: 'Google Copilot', level: 4 },
      { name: 'Cline', level: 4 },
      { name: 'Kilo Code', level: 3.5 },
    ],
    'Python': [
      { name: 'Pandas', level: 4.5 },
      { name: 'SQLAlchemy', level: 4.5 },
      { name: 'Pyspark', level: 4 },
      { name: 'Sklearn', level: 4 },
      { name: 'Selenium', level: 4.5 },
    ],
    'SQL': [
      { name: 'SQL Server', level: 5 },
      { name: 'Postgre SQL', level: 5 },
      { name: 'Spark SQL', level: 4.5 },
      { name: 'SnowSQL', level: 4.5 },
    ],
    'ETL Tools': [
      { name: 'AWS Glue', level: 4 },
      { name: 'Azure Databricks', level: 4 },
      { name: 'AWS Lambda', level: 4.5 },
      { name: 'AWS Batch', level: 4.5 },
      { name: 'Alteryx', level: 3.5 },
    ],
    'Analytical Tools': [
      { name: 'Tableau CRM', level: 4 },
      { name: 'Qlik Sense', level: 3.5 },
      { name: 'Preset', level: 3.5 },
      { name: 'Power BI', level: 3 },
      { name: 'Microsoft Excel', level: 4 },
    ],
    'Project Management': [
      { name: 'JIRA', level: 4 },
      { name: 'Confluence', level: 3.5 },
      { name: 'Figma', level: 3 },
      { name: 'Trello', level: 3.5 },
    ],
    'Soft Skills': [
      { name: 'Effective Communication', level: 4.5 },
      { name: 'Client Management', level: 4.5 },
      { name: 'Problem-solving', level: 4.5 },
      { name: 'Leadership', level: 4 },
      { name: 'Prompt Engineering', level: 4.5 }
    ],
    'Cloud Services': [
      { name: 'AWS', level: 4.5 },
      { name: 'Azure', level: 3.5 },
      { name: 'Databricks', level: 3.5 },
    ],
    'Data Warehouse': [
      { name: 'Redshift', level: 4.5 },
      { name: 'Azure SQL DWH', level: 4.5 },
      { name: 'Snowflake', level: 4 },
    ],
    'Big Data Tools': [
      { name: 'Apache Spark', level: 3.5 },
      { name: 'HIVE', level: 3 },
    ]
  },

  projects: [
    {
      title: "GOAT - Gartner's Own Agentic Tech",
      short_description: "Conversational Agentic AI Assistant designed to support Gartner associates with quick access to client information, engagement data, and research materials.",
      description: "Architected and developed a serverless conversational AI assistant for Gartner associates that streamlines client interactions and enhances productivity. The platform features client information retrieval with MCP/CI data, call and engagement transcript access, document search across Gartner's research repository, and AI-powered conversational interface. Built on AWS serverless architecture with API Gateway, Lambda functions, and integrated with Okta authentication. Includes comprehensive feedback system, session management, and multi-agent orchestration for complex queries.",
      image: "/images/projects/thumbnail/portfolio_app.png",
      thumbnail: "/images/projects/thumbnail/portfolio_app.png",
      techStack: ["Python", "AWS Lambda", "API Gateway", "Serverless", "LLM", "AI", "Agentic AI", "PostgreSQL", "S3", "Okta", "REST API", "Multi-Agent System", "Conversational AI", "RAG", "Vector Database"],
      category: "Ongoing",
      company: "Bitwise Solution Pvt Ltd",
      clients: "Gartner",
      start_date: "2024-03-01",
      end_date: "",
      link: "projects/goat-agentic-ai"
    },
    {
      title: "Enterprise Data Quality Framework",
      short_description: "Built a comprehensive serverless data quality validation platform on AWS with AI-powered rule generation, Google Sheets integration, and automated alerting.",
      description: "Architected and developed an enterprise-grade data quality framework leveraging AWS Lambda, API Gateway, and serverless architecture. The platform provides automated data validation across PostgreSQL and Redshift databases with AI-powered rule generation using LLMs, bidirectional Google Sheets synchronization for collaborative rule management, and comprehensive alerting via email. Features include parallel processing for high-performance validation, custom SQL validation support, and extensive API documentation for seamless integration with CI/CD pipelines.",
      image: "/images/projects/thumbnail/portfolio_app.png",
      thumbnail: "/images/projects/thumbnail/portfolio_app.png",
      techStack: ["Python", "AWS Lambda", "API Gateway", "PostgreSQL", "Redshift", "Google Sheets API", "LLM", "AI", "Serverless", "REST API", "CloudWatch", "S3", "Secrets Manager", "Docker", "CI/CD"],
      category: "Ongoing",
      company: "IBM - TWC",
      start_date: "2024-01-01",
      end_date: "",
      link: "projects/data-quality-framework"
    },
    {
      title: "Data Integration Pipeline",
      short_description: "Built scalable data integration pipelines for 15 pharmaceutical brands and 50+ dosages from 20 vendors processing over 100GB of data.",
      description: "Led comprehensive data integration efforts for 15 pharmaceutical brands and 50+ dosages, processing over 100GB of structured and unstructured data from 20 vendors. Implemented robust cleansing and transformation pipelines to ensure data accuracy and consistency across all brand reporting. The solution enabled brand managers to access reliable, unified data for decision-making.",
      image: "/images/projects/thumbnail/portfolio_app.png",
      thumbnail: "/images/projects/thumbnail/portfolio_app.png",
      techStack: ["Python", "SQL", "Alteryx", "Qlik", "Snowflake", "Data Cleansing", "Data Integration", "ETL"],
      category: "Completed",
      company: "Novartis Healthcare Pvt Ltd",
      start_date: "2020-06-01",
      end_date: "2021-04-01",
      link: "projects/data-integration-pipeline"
    },
    {
      title: "Forecasting Dashboards",
      short_description: "Developed sales and demand forecasting dashboards for Oncology brand leaders using custom models including Elapsed Days Model and moving average method.",
      description: "Built comprehensive forecasting dashboards for Oncology brand leaders that incorporate custom analytical models like the Elapsed Days Model and moving average methods. These dashboards provide accurate monthly sales and demand projections, enabling strategic inventory management and sales planning. The solution has become a critical tool for executive decision-making.",
      image: "/images/projects/thumbnail/portfolio_app.png",
      thumbnail: "/images/projects/thumbnail/portfolio_app.png",
      techStack: ["Python", "Qlik", "SQL", "Statistical Modeling", "Forecasting", "Data Visualization", "Healthcare Analytics"],
      category: "Completed",
      company: "Novartis Healthcare Pvt Ltd",
      start_date: "2021-05-01",
      end_date: "2022-02-01",
      link: "projects/forecasting-dashboards"
    },
    {
      title: "Process Automation",
      short_description: "Automated manual processes for data ingestion and report generation including National Demand Reports using modern data tools.",
      description: "Led multiple automation initiatives to transform manual data ingestion and report generation processes into streamlined, automated workflows. Currently working on automating National Demand Reports using a combination of Qlik, Alteryx, SQL, and Python. These automation efforts have significantly reduced manual effort while increasing report frequency and accuracy for stakeholders.",
      image: "/images/projects/thumbnail/portfolio_app.png",
      thumbnail: "/images/projects/thumbnail/portfolio_app.png",
      techStack: ["Qlik", "Python", "Alteryx", "SQL", "Process Automation", "Workflow Optimization", "Report Generation"],
      category: "Completed",
      company: "Novartis Healthcare Pvt Ltd",
      start_date: "2022-03-01",
      end_date: "2022-12-01",
      link: "projects/process-automation"
    },
    {
      title: "Profile Builder with Local LLM",
      short_description: "An AI-powered tool that automatically fills professional profiles across remote work platforms using portfolio data and local LLM models.",
      description: "Built an AI agent that extracts information from your portfolio and uses local Ollama LLM models to generate optimized professional profiles for platforms like Upwork, LinkedIn, and other job boards. The tool features data extraction from portfolios, platform-specific content generation, and automated profile creation, all while keeping your data private by using local AI models.",
      image: "/images/projects/thumbnail/profile_builder.png",
      thumbnail: "/images/projects/thumbnail/profile_builder.png",
      techStack: ["Python", "Flask", "Docker", "Ollama", "LLM", "deepseek-r1", "Web Automation", "AI", "Artificial Intelligence", "BeautifulSoup"],
      category: "Ongoing",
      company: "Personal Project",
      start_date: "2025-04-15",
      end_date: "",
      link: "projects/profile-builder"
    },
    {
      title: "Automated DSA Questions Tracker",
      short_description: "A Python tool that automates tracking and practicing data structure and algorithm problems from NeetCode 150.",
      description: "Built an automation tool that helps track progress through NeetCode 150 DSA problems. The system automatically fetches questions, organizes solutions by category and difficulty, generates solution templates, validates implementations, and maintains a Git repository of solutions. Features include progress tracking, problem categorization, and automated testing.",
      image: "/images/projects/thumbnail/portfolio_app.png",
      thumbnail: "/images/projects/thumbnail/portfolio_app.png",
      techStack: ["Python", "Jupyter Notebook", "Git", "Data Structures", "Algorithms", "Automation", "Web Scraping", "AI", "Artificial Intelligence"],
      category: "Ongoing",
      company: "Personal Project",
      start_date: "2025-04-01",
      end_date: "",
      link: "projects/automated-dsa-questions-tracker"
    },
    {
      title: "AI-Powered Portfolio Website",
      short_description: "Developed a modern, responsive portfolio website entirely using GitHub Copilot - Claude 3.7 Sonnet, demonstrating the power of AI pair programming.",
      description: "Created a Next.js portfolio website featuring responsive design, dynamic content management, interactive visualizations, and SEO optimization. Used GitHub Copilot - Claude 3.7 Sonnet for the entire development process, leveraging prompt engineering to build components, implement features, and solve technical challenges.",
      image: "/images/projects/thumbnail/portfolio_app.png",
      thumbnail: "/images/projects/thumbnail/portfolio_app.png",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "GitHub Copilot", "Claude AI", "Vercel", "Responsive Design", "Artificial Intelligence", "AI", "Web Development"],
      category: "Ongoing",
      company: "Personal Project",
      start_date: "2025-04-21",
      end_date: "",
      link: "projects/portfolio-app-with-ai-assistance"
    },
    {
      title: "Migration from On-premise to AWS Infra",
      short_description: "This project aimed at migrating the existing on-premises system to Amazon Web Services and generate Power BI reports for Sales and HR by extracting Parquet files.",
      description: "This project aimed at migrating the existing on-premises system to Amazon Web Services and generate Power BI reports for Sales and HR by extracting Parquet files from Amazon S3 and creating a warehouse in Amazon Redshift while processing the data in AWS Glue using Pyspark.",
      image: "/images/projects/thumbnail/im_aws_migration.png",
      thumbnail: "/images/projects/thumbnail/im_aws_migration.png",
      techStack: ["Cloud", "AWS", "AWS Glue", "Amazon S3", "AWS Lambda", "SQL", "Python", "Pyspark", "Redshift", "Power BI"],
      category: "Completed",
      company: "Polestar Solutions and Services",
      clients: "IndiaMART InterMESH Ltd",
      start_date: "2018-09-01",
      end_date: "2019-03-01",
      link: "projects/migration-from-on-premise-to-aws-infra"
    },
    {
      title: "Data Wrangling for Prediction Model",
      short_description: "In this project, the aim was to deliver automated workflows to preprocess the data for the prediction model on Azure Databricks Platform.",
      description: "In this project, the aim was to deliver automated workflows to preprocess the data for the prediction model on Azure Databricks Platform. Data needed to be extracted from Azure Blob Storage and Azure SQL Data Warehouse, then the data cleansing process is conducted and further these files were loaded in the Azure Databricks File System which was shared with the DataRobot Team who implemented the prediction models and then loaded the data into the cube.",
      image: "/images/projects/thumbnail/rb_databricks_wrangling.png",
      thumbnail: "/images/projects/thumbnail/rb_databricks_wrangling.png",
      techStack: ["Cloud", "Azure", "Azure Databricks", "Azure Blob Storage", "Azure SQL Data Warehouse", "Azure Databricks File System", "SQL", "Python", "Pyspark"],
      category: "Completed",
      company: "Polestar Solutions and Services",
      clients: "Reckitt Benckiser Group",
      start_date: "2019-03-01",
      end_date: "2019-06-01",
      link: "projects/data-wrangling-for-prediction-model"
    },
    {
      title: "Maintain and optimize the production pipelines",
      short_description: "The aim of this project was to develop, maintain and upgrade data pipelines to automate and optimize the production process on AWS Infrastructure",
      description: "The aim of this project was to develop, maintain and upgrade data pipelines to automate and optimize the production process on AWS Infrastructure. Successfully reduced the execution time for the production pipeline by 66% and decreased the cost of Data Storage on Amazon Redshift by 50%.",
      image: "/images/projects/thumbnail/jubilant_prod.png",
      thumbnail: "/images/projects/thumbnail/jubilant_prod.png",
      techStack: ["Cloud", "AWS", "AWS Glue", "Amazon S3", "AWS Lambda", "SQL", "Python", "Pyspark", "Redshift", "Power BI"],
      category: "Completed",
      company: "Polestar Solutions and Services",
      clients: "Jubilant FoodWorks Limited",
      start_date: "2019-06-01",
      end_date: "2020-04-01",
      link: "projects/maintain-and-optimize-the-production-pipelines"
    }
  ],

  testimonials: [
    {
      name: "Ivan Cheklin",
      location: "Pennsylvania, USA",
      position: "BI Leader",
      company: "IBM - TWC",
      text: "Rishav is an exceptional talent who consistently delivers high-quality solutions. His technical expertise and problem-solving skills make him an invaluable asset to any team.",
      image: "/images/testimonial1.jpg"
    },
    {
      name: "Sylvia Ho",
      location: "New York, USA",
      position: "Principal Data Scientist",
      company: "IBM - TWC",
      text: "Working with Rishav was a game-changer for our data visualization projects. His innovative approach and attention to detail resulted in solutions that exceeded our expectations.",
      image: "/images/testimonial2.jpg"
    },
    {
      name: "Garima Narang",
      location: "Hyderabad, India",
      position: "Group Lead",
      company: "Novartis Healthcare Pvt Ltd",
      text: "Working with Rishav on our data migration project was exceptional. His technical expertise in Snowflake and pipeline optimization transformed our analytics capabilities. He's a collaborative team player who consistently delivers beyond expectations.",
      image: "/images/testimonial6.jpg"
    },
    {
      name: "Salvatore Guglielmo",
      location: "New Jersey, USA",
      position: "Assistant Director",
      company: "Novartis Inc",
      text: "Rishav's leadership during our data warehouse migration was outstanding. He demonstrated excellent problem-solving skills and technical depth while maintaining clear communication throughout. His work significantly improved our data processing efficiency and analytical capabilities.",
      image: "/images/testimonial7.jpg"
    }
  ],

  brands: [
    { id: '1', name: 'The Weather Company', logo: '/images/brands/twc.svg', color: '#1B4B88' },
    { id: '2', name: 'IBM', logo: '/images/brands/ibm.svg', color: '#006699' },
    { id: '3', name: 'Bitwise', logo: '/images/brands/bitwise.jpg', color: '#6B2C91' },
    { id: '4', name: 'Gartner', logo: '/images/brands/gartner.svg', color: '#002856' },
    { id: '5', name: 'Novartis', logo: '/images/brands/novartis.svg', color: '#E86E25' },
    { id: '6', name: 'Polestar', logo: '/images/brands/polestar.svg', color: '#000000' },
    { id: '7', name: 'Jubilant FoodWorks', logo: '/images/brands/jubilant.png', color: '#E31837' },
    { id: '8', name: 'Dominos', logo: '/images/brands/dominos.png', color: '#006491' },
    { id: '9', name: 'Reckitt Benckiser', logo: '/images/brands/reckitt.svg', color: '#E70068' },
    { id: '10', name: 'Dettol', logo: '/images/brands/dettol.png', color: '#007A33' },
    { id: '11', name: 'IndiaMart', logo: '/images/brands/indiamart.webp', color: '#EF3E42' },
  ]
};

// Export helper functions separately so they can be called directly
export const getAverageSkillRatings = () => {
  const result: { [key: string]: number } = {};

  Object.entries(portfolioData.skills).forEach(([category, skills]) => {
    const sum = skills.reduce((acc, skill) => acc + skill.level, 0);
    const average = sum / skills.length;

    // Round to the nearest 0.25 increment
    const roundedAverage = Math.round(average * 4) / 4;
    result[category] = roundedAverage;
  });

  return result;
};

// Helper function to calculate years of experience
export const getYearsOfExperience = () => {
  const currentYear = new Date().getFullYear();
  return currentYear - portfolioData.personalInfo.yearsExperienceStartYear;
};

// Create a combined experience array for backward compatibility
Object.defineProperty(portfolioData, 'experience', {
  get: function () {
    return [...this.professionalExperience, ...this.freelanceExperience];
  }
});

export default portfolioData;