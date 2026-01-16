# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Designed to showcase your projects, skills, and professional information for job applications.

## Features

- 🎨 Modern, dark-themed UI/UX design
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast and optimized with Vite
- 🔧 Easy to customize and maintain
- 📝 Well-commented code for easy updates
- 🎯 SEO-friendly structure
- 🏠 Three main sections: Home, Projects, About

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory. You can preview the production build with:

```bash
npm run preview
```

## Customizing Your Portfolio

### 1. Personal Information

Edit `src/data/personalInfo.ts` to update:
- Your name and title
- Bio/description
- Email and location
- Social media links (GitHub, LinkedIn, etc.)
- Resume URL (if hosted online)

### 2. Projects

Add or modify projects in `src/data/projects.ts`:

```typescript
{
  id: "unique-project-id",
  title: "Project Name",
  description: "Project description...",
  technologies: ["React", "TypeScript", "Node.js"],
  githubUrl: "https://github.com/yourusername/project",
  liveUrl: "https://your-project-demo.com",
  imageUrl: "/images/project-image.jpg", // Add project images to public/images/
  featured: true, // Featured projects appear first
}
```

### 3. Skills

Update your skills in `src/data/skills.ts`. You can add new categories or modify existing ones:

```typescript
{
  category: "Your Category",
  skills: ["Skill 1", "Skill 2", "Skill 3"],
}
```

### 4. Experience & Education

- **Experience**: Edit `src/data/experience.ts` to add or modify work experience
- **Education**: Edit `src/data/education.ts` to update your educational background

### 5. Adding Images

**Profile Picture**: Add `profile.jpg` to `public/images/` - it will appear in the About section

**About Section Photos**: Add photos named `about-1.jpg`, `about-2.jpg`, etc. (up to 8) to `public/images/` - they will appear in a gallery grid in the About section

**Project Images**: Add project screenshots to `public/images/` and reference them in `src/data/projects.ts` using `/images/your-image.jpg`

### 6. Styling

- **Colors**: Modify the color scheme in `tailwind.config.js` under the `primary` color palette
- **Components**: Each component is in `src/components/` and can be customized individually
- **Global Styles**: Edit `src/index.css` for global styles and animations

## Project Structure

```
portfolio-website/
├── public/
│   └── images/         # Add your images here
│       ├── profile.jpg        # Profile picture
│       ├── about-1.jpg        # About section photos (1-8)
│       └── project-name.jpg  # Project screenshots
├── src/
│   ├── pages/          # Page components (routes)
│   │   ├── HomePage.tsx    # Home page route (/)
│   │   ├── ProjectsPage.tsx # Projects page route (/projects)
│   │   └── AboutPage.tsx   # About page route (/about)
│   ├── components/      # Reusable React components
│   │   ├── Header.tsx   # Navigation header
│   │   ├── Home.tsx     # Home content (intro, timeline, skills)
│   │   ├── Projects.tsx # Projects showcase
│   │   ├── About.tsx    # Biography and photos
│   │   └── Footer.tsx   # Site footer
│   ├── data/           # Data files (easy to update)
│   │   ├── personalInfo.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── experience.ts
│   │   └── education.ts
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## Routing

This portfolio uses React Router for multi-page navigation:
- `/` - Home page (introduction, timeline, skills)
- `/projects` - Projects showcase
- `/about` - Biography and photos

Each page is a separate route, providing a better user experience and SEO benefits.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Vite and deploy
4. **Note**: Vercel handles React Router routing automatically - no configuration needed!

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`
5. **Important**: Create a `public/_redirects` file with:
   ```
   /*    /index.html   200
   ```
   This ensures React Router works correctly on Netlify.

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json` scripts:
   ```json
   "deploy": "npm run build && gh-pages -d dist"
   ```
3. Update `vite.config.ts` to set `base: '/your-repo-name/'` (replace with your actual repo name)
4. Run: `npm run deploy`

## Tips for Job Applications

1. **Keep it updated**: Regularly update your projects and skills
2. **Showcase your best work**: Use the `featured` flag to highlight your top projects
3. **Add real demos**: Include live URLs when possible
4. **Professional photos**: Use a professional headshot in the About section
5. **Resume link**: Host your resume and add the URL in personalInfo.ts
6. **Contact form**: Integrate a contact form service (Formspree, EmailJS) for the Contact section

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing for multi-page navigation
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## License

This project is open source and available for personal use.

## Support

For questions or issues, feel free to open an issue on GitHub or reach out directly.

---

**Happy coding! 🚀**

