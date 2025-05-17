// generate-favicon.mjs
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create a 32x32 image with a white background
const width = 32;
const height = 32;
const centerX = width / 2;
const centerY = height / 2;

// Create SVG with the letter "R" in the style of the navbar
const svgBuffer = Buffer.from(`
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="white"/>
  <text 
    x="${centerX}" 
    y="${centerY + 8}" 
    font-family="Arial Black, Impact, sans-serif" 
    font-size="24" 
    font-weight="bold" 
    fill="#000000" 
    text-anchor="middle"
  >R</text>
</svg>
`);

// Process sizes for favicon.ico (16x16, 32x32)
Promise.all([
  // 16x16 favicon
  sharp(svgBuffer)
    .resize(16, 16)
    .toBuffer(),
  
  // 32x32 favicon
  sharp(svgBuffer)
    .resize(32, 32)
    .toBuffer()
])
.then(([icon16, icon32]) => {
  // Write the ICO file
  const publicPath = path.join(__dirname, 'public');
  
  // Use the ico-encoder npm package to create the favicon.ico file
  // Since we don't have ico-encoder installed, we'll output PNGs for now
  fs.writeFileSync(path.join(publicPath, 'favicon-16x16.png'), icon16);
  fs.writeFileSync(path.join(publicPath, 'favicon-32x32.png'), icon32);
  
  console.log('Favicon PNGs generated successfully!');
  console.log('Please note: To create a proper favicon.ico file, you may need to use an online converter.');
})
.catch(err => {
  console.error('Error generating favicon:', err);
});
