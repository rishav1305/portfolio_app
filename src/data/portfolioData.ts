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
  image: string;
  techStack: string[];
  link: string;
  category: string;
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
    name: "Rishav Chatterjee",
    title: "Technology Leader",
    email: "rishavchatterjee2024@gmail.com",
    shortBio: "I help companies turn complex datasets into clear, actionable insights through advanced data modeling and visualization.",
    longBio: [
      "I specialize in building scalable data architectures using modern cloud platforms like AWS and Azure, and I'm highly proficient in tools like Python, SQL, Spark, and various BI tools including Tableau CRM, Qlik Sense, Power BI, and Preset. From streamlining programmatic pipelines and integrating enterprise systems like NetSuite and Salesforce, to delivering mission-critical dashboards for C-level executives—I've consistently aligned data solutions with business strategy.",
      "To stay ahead in today's fast-paced environment, I actively integrate AI into my workflow. I leverage tools like GitHub Copilot, Claude, and ChatGPT for code assistance, debugging, and technical documentation. I'm also developing AI agents using Ollama and Autogen frameworks to automate and scale analytical tasks.",
      "With experience across top firms, I build scalable, interactive dashboards and analytics solutions—leveraging AI tools to boost productivity and drive smarter, data-informed decisions."
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
  
  experience: [
    {
      period: "Dec 2022 - Present",
      startDate: "2022-12-01",
      endDate: null,
      location: "Pune, Maharashtra",
      company: "Bitwise Solutions Pvt Ltd",
      role: "Technology Lead",
      achievements: [
        "Initiated B2B analytics reporting with key insights through Funnel Analysis, Forecasting, and more",
        "Optimized Programmatic Advertisers pipeline, reducing processing time by 60%",
        "Executed NetSuite invoice data integration with Salesforce",
        "Led migration from Qlik Sense to Python for Datorama nPrinting"
      ],
      details: [
        "Initial Role: Started as an individual contributor, leveraging my expertise in Python and SQL.",
        "Expanded Responsibilities: Took on additional roles and responsibilities due to team restructuring during multiple layoffs.",
        "Current Role: Leading multiple projects across B2B and B2C, including requirements gathering, task delegation and project management."
      ],
      tags: ["Data Engineering", "Cloud Infrastructure", "Team Leadership"]
    },
    {
      period: "May 2020 - Dec 2022",
      startDate: "2020-05-01",
      endDate: "2022-12-31",
      location: "Hyderabad, Telangana",
      company: "Novartis Healthcare Pvt Ltd",
      role: "Senior Data Engineer",
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
      focusArea: "Science",
      description: "Completed senior secondary education with specialization in science subjects. Achieved academic excellence with particular strength in mathematics and physics. Participated in various inter-school competitions and science exhibitions. Developed strong foundations in analytical thinking and scientific concepts that later supported engineering studies."
    },
    {
      period: "Apr 2011 - Mar 2012",
      location: "Faridabad, Haryana",
      institution: "MVN School, Aravalli Hills",
      degree: "10th Education",
      focusArea: "CBSE",
      description: "Completed foundational education with a strong academic record across all subjects. Actively participated in various extracurricular activities including sports, cultural events, and science exhibitions. Received recognition for academic performance and leadership skills in group projects and classroom activities."
    }
  ],
  
  skills: {
    'Python': [
      { name: 'Pandas', level: 4.5 },
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
      { name: 'Critical thinking', level: 4.5 }
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
      title: "Interactive Sales Analytics Dashboard",
      description: "Created a comprehensive sales analytics dashboard with drill-down capabilities and predictive forecasting for a retail client.",
      image: "/images/profile_bg.jpg",
      techStack: ["Python", "Tableau CRM", "SQL", "AWS"],
      link: "#",
      category: "Data Visualization"
    },
    {
      title: "ETL Pipeline for E-commerce Data",
      description: "Developed a robust ETL pipeline that processes millions of daily transactions and integrates multiple data sources for a global e-commerce platform.",
      image: "/images/photo_bg.png",
      techStack: ["Python", "Apache Spark", "AWS Glue", "Redshift", "Airflow"],
      link: "#",
      category: "Data Engineering"
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Performed advanced customer segmentation using machine learning techniques to identify high-value customer groups and personalization opportunities.",
      image: "/images/profile_bg.jpg",
      techStack: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
      link: "#",
      category: "Data Science"
    },
    {
      title: "Automated Marketing Performance Reporting",
      description: "Built an automated system that pulls data from multiple marketing platforms and generates comprehensive performance reports with minimal manual intervention.",
      image: "/images/photo_bg.png",
      techStack: ["Python", "Google Analytics API", "Google Ads API", "Facebook Marketing API", "Preset"],
      link: "#",
      category: "Automation"
    },
    {
      title: "Cloud Data Warehouse Migration",
      description: "Led the migration of a legacy data warehouse to a modern cloud-based solution, improving query performance by 70% and reducing operating costs.",
      image: "/images/profile_bg.jpg",
      techStack: ["Snowflake", "AWS", "Python", "dbt"],
      link: "#",
      category: "Cloud Infrastructure"
    },
    {
      title: "Real-time Data Processing System",
      description: "Designed and implemented a real-time data processing system that handles high-volume streaming data for immediate business insights.",
      image: "/images/photo_bg.png",
      techStack: ["Apache Kafka", "Apache Spark Streaming", "Redis", "ElasticSearch"],
      link: "#",
      category: "Streaming Data"
    },
    {
      title: "Automated Data Pipeline with AI",
      description: "Built an automated data pipeline that uses machine learning to detect anomalies in real-time data streams. The system employs a combination of statistical methods and neural networks to identify patterns that deviate from expected behavior.",
      image: "/images/profile_bg.jpg",
      techStack: ["Python", "TensorFlow", "Apache Kafka", "Docker"],
      link: "#",
      category: "Artificial Intelligence"
    },
    {
      title: "Natural Language Processing for Business Insights",
      description: "Developed an NLP solution that analyzes customer feedback across multiple channels and extracts actionable business insights. This tool helped stakeholders understand customer sentiment and identify emerging issues quickly.",
      image: "/images/photo_bg.png",
      techStack: ["Python", "NLTK", "spaCy", "Hugging Face Transformers"],
      link: "#",
      category: "Artificial Intelligence"
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Created a real-time dashboard that uses AI to predict business metrics and forecast trends. The system integrates with multiple data sources and provides visual analytics with predictive capabilities.",
      image: "/images/profile_bg.jpg",
      techStack: ["Python", "Scikit-learn", "ReactJS", "D3.js"],
      link: "#",
      category: "Artificial Intelligence"
    },
    {
      title: "AI-powered Content Recommendation Engine",
      description: "Built a content recommendation engine that uses collaborative filtering and deep learning to suggest personalized content to users based on their behavior and preferences.",
      image: "/images/photo_bg.png",
      techStack: ["Python", "PyTorch", "FastAPI", "Redis"],
      link: "#",
      category: "Artificial Intelligence"
    }
  ],

  testimonials: [
    {
      name: "John Doe",
      position: "CEO, Tech Innovations",
      company: "Tech Innovations",
      text: "Rishav is an exceptional talent who consistently delivers high-quality solutions. His technical expertise and problem-solving skills make him an invaluable asset to any team.",
      image: "/images/testimonial1.jpg"
    },
    {
      name: "Jane Smith",
      position: "CTO, DataViz Corp",
      company: "DataViz Corp",
      text: "Working with Rishav was a game-changer for our data visualization projects. His innovative approach and attention to detail resulted in solutions that exceeded our expectations.",
      image: "/images/testimonial2.jpg"
    },
    {
      name: "Michael Johnson",
      position: "Project Manager, Enterprise Solutions",
      company: "Enterprise Solutions",
      text: "Rishav's technical leadership and cloud expertise transformed our infrastructure. He has a unique ability to align technology solutions with business objectives, driving significant value.",
      image: "/images/testimonial3.jpg"
    },
    {
      name: "Sarah Williams",
      position: "Head of Data Science, AnalyticsHub",
      company: "AnalyticsHub",
      text: "I've had the pleasure of collaborating with Rishav on several complex data engineering projects. His deep understanding of data architecture and cloud solutions helped us optimize our systems substantially.",
      image: "/images/testimonial4.jpg"
    },
    {
      name: "David Chen",
      position: "VP of Engineering, CloudScale",
      company: "CloudScale",
      text: "Rishav quickly became an invaluable part of our team. His ability to understand complex requirements and translate them into efficient, scalable solutions is truly impressive. I highly recommend his work.",
      image: "/images/testimonial5.jpg"
    }
  ],

  // Helper function to calculate average rating for each skill category
  getAverageSkillRatings() {
    const result: {[key: string]: number} = {};
    
    Object.entries(this.skills).forEach(([category, skills]) => {
      const sum = skills.reduce((acc, skill) => acc + skill.level, 0);
      const average = sum / skills.length;
      
      // Round to the nearest 0.25 increment
      const roundedAverage = Math.round(average * 4) / 4;
      result[category] = roundedAverage;
    });
    
    return result;
  },
  
  // Helper function to calculate years of experience
  getYearsOfExperience() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.personalInfo.yearsExperienceStartYear;
  }
};

export default portfolioData;