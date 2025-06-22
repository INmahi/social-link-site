# Deploy Your Social Media Link Aggregator to Netlify

## Step-by-Step Deployment Guide

### Method 1: Deploy from GitHub (Recommended)

1. **Push your code to GitHub:**
   - Create a new repository on GitHub
   - Push your project code to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Click "New site from Git"
   - Choose GitHub and authorize Netlify
   - Select your repository
   - Netlify will auto-detect the settings from `netlify.toml`:
     - Build command: `vite build`
     - Publish directory: `dist`
   - Click "Deploy site"

3. **Your site will be live!**
   - Netlify will provide a random URL (e.g., `amazing-site-123456.netlify.app`)
   - You can change this to a custom subdomain in Site settings

### Method 2: Manual Deploy (Drag & Drop)

1. **Build your project locally:**
   ```bash
   vite build
   ```

2. **Upload to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder onto the deploy area
   - Your site will be instantly live!

### Method 3: Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login and deploy:**
   ```bash
   netlify login
   vite build
   netlify deploy --prod --dir=dist
   ```

