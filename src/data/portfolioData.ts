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
    description: string;
  }[];
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

// The main data object
const portfolioData = {
  personalInfo: {
    name: "RISHAV",
    title: "Technology Leader & Freelance Data Consultant",
    email: "rishavchatterjee2024@gmail.com",
    shortBio: "As an independent freelancer and data expert, I provide specialized proficiency and flexible solutions tailored to each client's unique needs. My freelancing practice combines enterprise-level quality with the agility of independent work, offering freelance data engineering, visualization, and analytics services to clients worldwide. I take pride in delivering high-quality freelance solutions that match or exceed the standards of large consultancies.",
    longBio: [
      "I specialize in building scalable data architectures using modern cloud platforms like AWS and Azure, and I'm highly proficient in tools like Python, SQL, Spark, and various BI tools including Tableau CRM, Qlik Sense, Power BI, and Preset. From streamlining programmatic pipelines and integrating enterprise systems like NetSuite and Salesforce, to delivering mission-critical dashboards for C-level executives—I've consistently aligned data solutions with business strategy.",
      "To stay ahead in today's fast-paced environment, I actively integrate AI into my workflow. I leverage tools like GitHub Copilot, Claude, and ChatGPT for code assistance, debugging, and technical documentation. I'm also developing AI agents using Ollama and Autogen frameworks to automate and scale analytical tasks.",
      "With experience as both a freelance consultant and across top firms, I build scalable, interactive dashboards and analytics solutions—leveraging AI tools to boost productivity and drive smarter, data-informed decisions. My freelance practice specializes in providing enterprise-grade data solutions with the flexibility and personalized approach of an independent professional."
    ],
    location: "Delhi",
    yearsExperienceStartYear: 2018,
    whatsapp: "+91 9560382351",
    contactInfo: {
      sidebarTitle: "CONNECT WITH RISHAV",
      buttonText: "CONNECT WITH RISHAV"
    },
    socialMedia: {
      github: "https://github.com/rishav1305",
      linkedin: "https://www.linkedin.com/in/chatterjeerishav/",
      leetcode: "https://leetcode.com/u/rishav115/",
      medium: "https://medium.com/@chatterjeerishav96"
    }
  },
  
  freelanceExperience: [
    {
      period: "Feb 2023 - Present",
      startDate: "2023-02-13",
      endDate: null,
      location: "Pennsylvania, USA",
      company: "The Weather Company",
      role: "Technology Lead",
      experienceType: "freelance",
      achievements: [
        "Initiated B2B analytics reporting with key insights through Funnel Analysis, Forecasting, and more",
        "Optimized Programmatic Advertisers pipeline, reducing processing time by 60%",
        "Executed NetSuite invoice data integration with Salesforce",
        "Led migration from Qlik Sense to Python for Datorama nPrinting",
        "Implemented data-driven decision making across business units leading to 25% increase in revenue",
        "Architected cloud-based data solutions that reduced infrastructure costs by 30%"
      ],
      details: [
        "Initial Role: Started as an individual contributor, leveraging my expertise in Python and SQL.",
        "Expanded Responsibilities: Took on additional roles and responsibilities due to team restructuring during multiple layoffs.",
        "Current Role: Leading multiple projects across B2B and B2C, including requirements gathering, task delegation and project management.",
        "Key Achievement: Successfully delivered enterprise-wide analytics platform accessed by 200+ stakeholders daily",
        "Technical Innovation: Pioneered implementation of ML algorithms for predictive analytics in advertisement performance"
      ],
      tags: ["Data Engineering", "Cloud Infrastructure", "Team Leadership", "Machine Learning", "Enterprise Integration"]
    }
  ],
  
  professionalExperience: [
    {
      period: "May 2020 - Dec 2022",
      startDate: "2020-05-01",
      endDate: "2022-12-31",
      location: "Hyderabad, Telangana",
      company: "Novartis Healthcare Pvt Ltd",
      role: "Senior Data Engineer",
      experienceType: "professional",
      achievements: [
        "Migrated from HIVE to Snowflake, increasing pipeline performance by 60%",
        "Orchestrated jobs using Apache Airflow and Alteryx, improving system speed by 40%",
        "Maintained 99.5% data accuracy with 9.5/10 stakeholder satisfaction",
        "Led team of 3, collaborating with 15+ data vendors and 10+ brand leaders"
      ],
      tags: ["Data Migration", "Process Automation", "Team Mentoring"]
    },
    {
      period: "Jun 2018 - Apr 2020",
      startDate: "2018-06-01",
      endDate: "2020-04-30",
      location: "Noida, Uttar Pradesh",
      company: "Polestar Solutions and Services",
      role: "Data Engineer",
      experienceType: "professional",
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
      tags: ["AWS Services", "Azure Databricks", "Data Pipeline Optimization"]
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
      image: "/images/projects/images/im_aws_migration.png",
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
      image: "/images/projects/images/rb_databricks_wrangling.png",
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
      image: "/images/projects/images/jubilant_prod.png",
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
      company: "The Weather Company",
      text: "Rishav is an exceptional talent who consistently delivers high-quality solutions. His technical expertise and problem-solving skills make him an invaluable asset to any team.",
      image: "/images/testimonial1.jpg"
    },
    {
      name: "Sylvia Ho",
      location: "New York, USA",
      position: "Principal Data Scientist",
      company: "The Weather Company",
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
  ]
};

// Export helper functions separately so they can be called directly
export const getAverageSkillRatings = () => {
  const result: {[key: string]: number} = {};
  
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
  get: function() {
    return [...this.professionalExperience, ...this.freelanceExperience];
  }
});

export default portfolioData;