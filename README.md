CS 601 Web Application Development 
Final Project - Megha Samala

This final project consists of a personal website that functions like a portfolio with added information. My entire project is built with TypeScript in Next.js and styled with vanilla CSS, and features 7 pages such as About, Contact, Projects, Travels, and more. All pages are styled with either CSS Grid or Flex, and each page has at least one image, with 2 pages featuring image carousels built as Next.js components. Additionally, the Now page and the Favorites page feature an external API call to the LastFM API, to render whatever song I am currently listening to (if any) and my top 5 albums. The Contact page has a functioning form that utilizes Netlify's Netlify Forms to send messages to my Netlify dashboard. The whole website is responsive across different screen sizes (laptop/desktop, tablet, and phone) and works in Firefox, Chrome, and Safari with no issues. The website meets 98% of accessibility standards, as assessed by the WCAG Chrome Dev Tools website scanner.

To run my website locally, make sure npm and Next.js are installed, then use the command "npm run dev" in the root directory of the project. Afterwards, you can view the website in localhost:3000. One thing to note while running my project locally is that the CSS randomly will fail to render a short while after running the website - this only occurs locally, and not on my Netlify deployment. Additionally, if my project code is accessed from Github instead of through the zip file, and then run locally, the API calls will fail due to the key being in a .env file that is not pushed to Github.

Github repo: https://github.com/meghasamala/meghasite
Deployment: https://meghasite.netlify.app/

[![Netlify Status](https://api.netlify.com/api/v1/badges/1f996ff4-f5bc-49ac-8fcd-130a962ca207/deploy-status)](https://app.netlify.com/sites/meghasite/deploys)

