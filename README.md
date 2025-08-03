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

## Other useful Git Commands 

### 1. Create a new branch
```bash
git checkout -b <feature-branch-name>
```

### 2. Stage and commit changes
```bash
git add .
git commit -m "Add feature description"
```

### 3. Push the feature branch to the remote repository
```bash
git push origin <feature-branch-name>
```

### 4. Switch back to the main branch
```bash
git checkout main
```

### 5. Pull the latest changes from the main branch
```bash
git pull origin main
```

### 6. Merge the feature branch into the main branch
```bash
git merge <feature-branch-name>
```

### 7. Push the updated main branch to the remote repository
```bash
git push origin main
```

### 8. Delete the feature branch locally and remotely (optional)
```bash
git branch -d <feature-branch-name>
git push origin --delete <feature-branch-name>
```


## Learn More

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/docs/getting-started.html)

## Collaborators

### We'd like to thank the following people who have contributed to this project:

- **[Yashwanth A](https://github.com/yash27007)**
- **[Mahasri B](https://github.com/Mahasri-B)**
- **[Harshad ](https://github.com/imvsharshad)**
- **[Karthick Verma ](https://github.com/Varma0099)**
- **[Sethu Sairam ](https://github.com/setusairam)**
- **[Pranavi Srinivas ](https://github.com/kannapranavi15)**
- **[Sahanashre V](https://github.com/Sahanashre-V)**
- **[Shiva Varma](https://github.com/varmashiva)**
- **[Gargeya Mithra](https://github.com/GARGEYAMITHRA)**
