# Project Setup

This guide will help you set up and run a the project.

## Prerequisites

Before starting, ensure you have the following installed on your machine:

- **Node.js** (v14.18+ or v16+)
- **npm** (comes with Node.js)

## Getting Started

Follow these steps to set up and run the Vite project:

### 1. Clone the Repository

```bash
git clone https://github.com/KAREACM/kareacm.git
cd kareacm
```
### 2. Install Dependencies

Use **npm** to install project dependencies:

```bash
# Using npm
npm install
```

### 3. Run the Development Server

Start the Vite development server:

```bash
# Using npm
npm run dev
```

This will start a local development server and the app will be available at:

```
http://localhost:5173
```

### 4. Build for Production

To create a production build of your project, run:

```bash
# Using npm
npm run build

```

The built files will be located in the `dist/` folder.

### 5. Preview the Production Build

To preview the production build locally, you can use:

```bash
# Using npm
npm run preview

# OR

# Using yarn
yarn preview
```

This will start a server to serve the production files on:

```
http://localhost:4173
```

## Project Structure

A typical Vite project structure looks like this:

```bash
├── index.html        # Entry HTML file
├── /src              # Main source folder
|   ├── assets        # Contains the images, videos, etc
|   ├── components    # Contains the reuseable components (Contact Card, Navbar,Footer)
|   ├── pages         # Contains the different pages (Home Page, About Page)
|   ├── sections      # Contains the different sections (Hero Section, Profile Section)
|   ├── constants     # This contains data.js that imports and exports all data as arrays of objects to organize team members, events, projects, and more
│   ├── main.jsx      # Entry JavaScript file
│   └── App.jsx       # Main application component
├── /public           # Static assets (favicon,logo)
├── /dist             # Production build folder (auto-generated)
└── package.json      # Project configuration and dependencies
```

## Useful Scripts

Here are some commonly used scripts in Vite projects:

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Builds the project for production.
- **`npm run preview`**: Previews the production build.

## Learn More

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

## Collaborators

### We'd like to thank the following people who have contributed to this project:

- **[Yashwanth A](https://github.com/yash27007)**
- **[Mahasri Jeyalakshmi ](https://github.com/Mahasri-B)**
- **[Aathithiya Raman ](https://github.com/athithyaramaa1)**
- **[Pranavi Srinivas ](https://github.com/kannapranavi15)**
- **[Harshad ](https://github.com/imvsharshad)**
- **[Karthick Verma ](https://github.com/Varma0099)**
- **[Sethu Sairam ](https://github.com/setusairam)**
