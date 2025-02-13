# Personal Portfolio

This project is a personal portfolio website built using [Create React App](https://create-react-app.dev/), [TypeScript](https://www.typescriptlang.org/), and [Material-UI](https://mui.com/). It is deployed as a static page using GitHub Pages and GitHub Actions.

## Table of Contents
- [Live Site](#live-site)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
  - [GitHub Actions Workflow](#github-actions-workflow)
- [License](#license)

## Live Site

The latest build is automatically hosted via GitHub Actions at:  
[https://dylan-mulligan.github.io/personal-website/index.html](https://dylan-mulligan.github.io/personal-website/index.html)

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or later recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/dylan-mulligan/personal-website.git
   cd personal-website
   ```

2. **Install dependencies:**

   Due to potential peer dependency issues, use the legacy peer dependencies flag:

   ```bash
   npm install --legacy-peer-deps
   ```

### Running the Development Server

To start the development server:

```bash
npm start
```

This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes.

## Building for Production

To generate an optimized production build:

```bash
npm run build
```

This creates a `build/` directory containing the optimized static files.

## Deployment

The project is automatically deployed to GitHub Pages using GitHub Actions. The deployment process is defined in the `.github/workflows/deploy.yml` file.

### GitHub Actions Workflow

The deployment workflow executes the following steps:

1. **Checkout the repository:**
   
   Uses `actions/checkout@v2` to clone the repository.

2. **Set up Node.js:**
   
   Uses `actions/setup-node@v2` to set up the Node.js environment.

3. **Install dependencies:**
   
   Runs `npm install --legacy-peer-deps` to install project dependencies.

4. **Build the application:**
   
   Runs `npm run build` to create an optimized production build.

5. **Deploy to GitHub Pages:**
   
   Uses `peaceiris/actions-gh-pages@v3` to deploy the contents of the `build/` directory to the `gh-pages` branch, which GitHub Pages serves as the live site.

### Manual Deployment

If needed, you can manually deploy using the following command:

```bash
npm run build && npm run deploy
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

