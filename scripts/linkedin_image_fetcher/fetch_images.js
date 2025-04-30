// LinkedIn image fetcher script
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Testimonials from portfolioData.ts
const testimonials = [
  {
    name: "Ivan Cheklin",
    position: "BI Leader",
    company: "The Weather Company"
  },
  {
    name: "Sylvia Ho",
    position: "Principal Data Scientist",
    company: "The Weather Company"
  },
  {
    name: "Nishant Goel",
    position: "Senior Manager",
    company: "Gartner India"
  },
  {
    name: "Guneet Kaur",
    position: "Lead Data Engineer",
    company: "Gartner India"
  },
  {
    name: "Priyanka Bhambhurkar",
    position: "Project Manager",
    company: "Bitwise Solutions Pvt Ltd"
  },
  {
    name: "Garima Narang",
    position: "Group Lead",
    company: "Novartis Healthcare Pvt Ltd"
  },
  {
    name: "Salvatore Guglielmo",
    position: "Assistant Director",
    company: "Novartis Inc"
  }
];

// Make sure images directory exists
const imagesDir = path.join(__dirname, '../../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to download image from URL and save to file
async function downloadImage(url, fileName) {
  const imagePath = path.join(imagesDir, fileName);
  const writer = fs.createWriteStream(imagePath);

  console.log(`Downloading image to ${imagePath}`);
  
  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve);
    writer.on('error', reject);
  });
}

// Function to fetch LinkedIn profile image
async function fetchLinkedInProfileImage(name, company, position, index) {
  console.log(`Searching for ${name} - ${position} at ${company}`);
  
  try {
    // Since we can't easily scrape LinkedIn due to their anti-scraping measures,
    // we'll use placeholder images for now.
    // In a real implementation, you would need to use LinkedIn API with proper authentication
    const placeholderImages = [
      'https://randomuser.me/api/portraits/men/1.jpg',
      'https://randomuser.me/api/portraits/women/1.jpg',
      'https://randomuser.me/api/portraits/men/2.jpg',
      'https://randomuser.me/api/portraits/women/2.jpg',
      'https://randomuser.me/api/portraits/men/3.jpg',
      'https://randomuser.me/api/portraits/women/3.jpg',
      'https://randomuser.me/api/portraits/men/4.jpg',
    ];
    
    const fileName = `testimonial${index + 1}.jpg`;
    await downloadImage(placeholderImages[index], fileName);
    console.log(`Downloaded placeholder image for ${name} as ${fileName}`);
    
    return fileName;
  } catch (error) {
    console.error(`Error fetching image for ${name}:`, error);
    return null;
  }
}

// Main function to process all testimonials
async function processTestimonials() {
  console.log('Starting to fetch testimonial images...');
  
  for (let i = 0; i < testimonials.length; i++) {
    const { name, company, position } = testimonials[i];
    await fetchLinkedInProfileImage(name, company, position, i);
  }
  
  console.log('All testimonial images have been processed');
}

// Run the script
processTestimonials().catch(console.error);