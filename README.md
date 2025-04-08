Ahmed Bousahla's Portfolio Website

Welcome to my personal portfolio website! This project is built using modern web technologies like Svelte, TypeScript, Vite, and TailwindCSS. The design is clean, responsive, and fully customizable, allowing you to showcase your skills, projects, and experiences effectively.

This template is based on NotSooShariff's Svelte Portfolio Template (https://github.com/NotSooShariff/svelte-portfolio), which I have adapted and personalized to suit my needs.

---

Features:

- Modern glass-morphism design with dark/light mode toggle
- Fully responsive layout for all devices
- Optimized for performance with Vite
- Type-safe development with TypeScript
- Easy customization via a single configuration file
- SEO-friendly structure for better search engine visibility

---

Quick Start:

1. Clone the repository:
   git clone https://github.com/AhmedBsl/my-portfolio.git
   cd my-portfolio

2. Install dependencies:
   npm install

3. Customize your portfolio:
   - Update the src/data/config.json file with your personal information.
   - Replace placeholder images like profile.png with your own files in the public directory.

4. Run the development server:
   npm run dev

5. Open your browser and navigate to http://localhost:5173 (or the port specified in your terminal).

---

Configuration:

All content for your portfolio is managed through the src/data/config.json file. Here’s a breakdown of what you can customize:

Personal Information:
Update your name, title, contact details, and profile picture:
{
  "name": "Bousahla Ahmed Abdelghani",
  "title": "Computer Science & Developer",
  "phone": "+213 674473811",
  "address": "Sidi Bel Abbes, Algeria",
  "email": "ahmedbousahla@gmail.com",
  "image": "/github_qrcode.png"
}

Skills & Tools:
List your technical and soft skills under the tools section:
"tools": [
  {
    "name": "Programming Languages",
    "skills": ["Python", "JavaScript", "PHP"]
  },
  {
    "name": "Web & Mobile Development",
    "skills": ["HTML", "CSS", "JavaScript", "SvelteKit", "Flutter", "Android Studio"]
  }
]

Projects:
Add your projects with descriptions, links, and technologies used:
"projects": [
  {
    "title": "Final Year Project",
    "description": "Developed a secure Responsive RWD web platform for organizations to manage and ensure data integrity.",
    "link": "",
    "technologies": ["HTML", "CSS", "JavaScript", "MySQL"]
  }
]

Education & Professional Experience:
Include your academic background and work history:
"education": [
  {
    "degree": "Bachelor's Degree in Computer Science, Information Systems",
    "school": "University of Exact Sciences Djilali Liabes Abbès",
    "year": "2017 - 2021",
    "location": "Sidi-Bel Abbès, Algeria"
  }
]

---

Customization Options:

Colors:
You can modify the primary and secondary colors in src/app.css:
:root {
  --primary: 125 211 252; /* Light Blue */
  --secondary: 147 51 234; /* Purple */
}

Typography:
Change the default font (Plus Jakarta Sans) in tailwind.config.js:
fontFamily: {
  jakarta: ['Plus Jakarta Sans', 'sans-serif'],
},

---

Build for Production:

To build the project for deployment:
npm run build

The production-ready files will be generated in the dist folder.

---

Deployment:

Deploy your portfolio to your preferred hosting platform:

- Deploy to Vercel: https://vercel.com/new/clone
- Deploy to Netlify: https://app.netlify.com/start
- Deploy to GitHub Pages: https://pages.github.com
- Deploy to Cloudflare Pages: https://dash.cloudflare.com/?to=/:account/pages/new

---

License:

This project is licensed under the MIT License. You are free to use, modify, and distribute it as per the terms of the license.

---

Credits:

This portfolio template is inspired by and adapted from NotSooShariff's Svelte Portfolio Template (https://github.com/NotSooShariff/svelte-portfolio). Special thanks to the original creator for their hard work and contribution to the open-source community.

---

Made with ❤️ by Ahmed Bousahla (https://github.com/AhmedBsl)
Feel free to reach out if you have any questions or feedback!