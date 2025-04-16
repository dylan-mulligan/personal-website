# Personal Portfolio Website

This project is a personal portfolio website built using [Create React App](https://create-react-app.dev/), [TypeScript](https://www.typescriptlang.org/), and [Material-UI](https://mui.com/). It is automatically deployed as a static page using Cloudflare Pages and Workers.

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

The latest build is automatically hosted at:  
[https://dylanmulligan.com](https://dylanmulligan.com)

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

The project is automatically deployed to Cloudflare Pages. Deployments are triggered by merging pull requests into the `master` branch. Additionally, development preview deployments are created automatically for each pull request.

### Deployment Process

1. **Pull Request Workflow:**  
   - When a pull request is created, Cloudflare Pages automatically generates a development preview deployment. This allows contributors to review changes in a live environment before merging.

2. **Merge to `master`:**  
   - Once the pull request is approved and merged into the `master` branch, Cloudflare Pages triggers the production deployment automatically.

3. **Build Configuration:**  
   Cloudflare Pages uses the following settings (configured in the Cloudflare Pages dashboard):  
   - **Build command:** `npm run build`  
   - **Output directory:** `build/`  

The deployment process ensures a seamless workflow with preview environments for testing and a stable production deployment upon merging changes.

### Manual Deployment

If needed, you can manually deploy using the following command:

```bash
npm run build && npm run deploy
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

