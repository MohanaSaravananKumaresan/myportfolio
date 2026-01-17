# MyPortfolio

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It is a modern, responsive portfolio application built using React, TypeScript, and Next.js.

---

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Learn More](#learn-more)
- [Deployment](#deployment)

---

## Getting Started

To get started with the project, follow these steps:

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v16 or higher)
- **npm** (v8 or higher) or an alternative package manager (yarn, pnpm, or bun)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MohanaSaravananKumaresan/myportfolio.git
   cd myportfolio
   ```

2. Install dependencies and start the development server:

   Using **npm**:
   ```bash
   npm install
   npm run dev
   ```

   Using **yarn**:
   ```bash
   yarn install
   yarn dev
   ```

   Using **pnpm**:
   ```bash
   pnpm install
   pnpm dev
   ```

   Using **bun**:
   ```bash
   bun install
   bun dev
   ```

3. To build the application for production:

   Using **npm**:
   ```bash
   npm run build
   ```

   Using **yarn**:
   ```bash
   yarn build
   ```

   Using **pnpm**:
   ```bash
   pnpm build
   ```

   Using **bun**:
   ```bash
   bun build
   ```

The optimized build will be available in the `.next` directory.

---

## Features

- **Responsive Design**: Fully optimized for all screen sizes.
- **TypeScript Support**: Ensures type safety and better developer experience.
- **Font Optimization**: Uses `next/font` for automatic font optimization.
- **SEO Friendly**: Built-in support for SEO best practices.
- **Fast Performance**: Leveraging Next.js features like server-side rendering (SSR) and static site generation (SSG).

---

## Technologies Used

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: CSS Modules / Tailwind CSS (if applicable)
- **Fonts**: Geist
- **Package Manager**: npm / yarn / pnpm / bun

---

## Project Structure

The project structure is as follows:

```
myportfolio/
├── app/
│   ├── favicon.ico       # Favicon for the application
│   ├── globals.css       # Global CSS styles
│   ├── layout.tsx        # Application layout
│   ├── page.tsx          # Main application page
│   └── api/
│       └── views/        # API views (if applicable)
├── components/           # Reusable components
│   ├── About.tsx         # About section to display personal details
│   ├── Achievements.tsx  # Highlights the key achievements
│   ├── Contact.tsx       # Contact form or contact details section
│   ├── Credentials.tsx   # Displays certifications or credentials
│   ├── Footer.tsx        # Footer component for page footer
│   ├── Hero.tsx          # Hero section for the landing page
│   ├── Navbar.tsx        # Navigation bar for the application
│   ├── ProjectCard.tsx   # Represents individual project cards
│   ├── ScrollHint.tsx    # Visual hint for scrolling
│   ├── Section.tsx       # Generic section component
│   └── Work.tsx          # Showcases professional work experience
├── public/               # Static assets
│   ├── file.svg          # Example SVG file
│   ├── globe.svg         # Example SVG file
│   ├── hey.png           # Example PNG file
│   ├── MohanaSaravanan_CV.pdf # Resume/CV file
│   ├── next.svg          # Example SVG file
│   ├── thank you.png     # Example PNG file
│   ├── vercel.svg        # Example SVG file
│   └── window.svg        # Example SVG file
├── .next/                # Build output (auto-generated)
├── package.json          # Project metadata and scripts
├── tsconfig.json         # TypeScript configuration
├── eslint.config.mjs     # ESLint configuration
├── next-env.d.ts         # Next.js environment types
├── next.config.ts        # Next.js configuration
├── postcss.config.mjs    # PostCSS configuration
└── README.md             # Project documentation
```

### Components Directory

The `components` directory contains reusable UI components that are used across the application. Here's a brief overview of the key components:

- **Navbar.tsx**: Contains the navigation bar for the application, including links to different sections of the portfolio.
- **Footer.tsx**: Displays the footer of the application, which may include social media links, copyright information, etc.
- **Hero.tsx**: Represents the hero section of the landing page, typically used to grab the user's attention with a headline and a call-to-action.
- **About.tsx**: Displays information about the portfolio owner, such as a bio, skills, and achievements.
- **Achievements.tsx**: Highlights the key achievements of the portfolio owner.
- **Credentials.tsx**: Displays certifications or credentials earned by the portfolio owner.
- **ProjectCard.tsx**: Represents individual project cards used in the Projects section.
- **ScrollHint.tsx**: Provides a visual hint for users to scroll down the page.
- **Section.tsx**: A generic section component used to structure different sections of the portfolio.
- **Work.tsx**: Showcases the professional work experience of the portfolio owner.
- **Contact.tsx**: Provides a contact form or displays contact details for users to get in touch.

These components are designed to be modular and reusable, making it easier to maintain and extend the application.

---

## Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `.next` folder.

### `npm start`
Starts the production server.

---

## Learn More

To learn more about the technologies used in this project, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - Learn about TypeScript.
- [React Documentation](https://reactjs.org/docs/getting-started.html) - Learn about React.

---

## Deployment

This app is deployed on **Vercel**. You can deploy your own version by connecting your GitHub repository to Vercel and following the deployment instructions.

---

## About

This app was designed and developed by **Mohana Saravanan**.
