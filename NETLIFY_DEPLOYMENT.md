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

## Your Site Features

✅ **Responsive Design** - Works on all devices
✅ **Fast Loading** - Optimized static files
✅ **Custom Domain** - Can add your own domain
✅ **HTTPS** - Automatic SSL certificate
✅ **Global CDN** - Fast worldwide access

## Custom Domain (Optional)

1. Go to your Netlify dashboard
2. Click on your site
3. Go to "Domain settings"
4. Click "Add custom domain"
5. Follow the DNS configuration steps

## Automatic Updates

If you used Method 1 (GitHub), your site will automatically update when you push changes to your repository!

## Your Live Site Will Include:

- Dark-themed portfolio with fixed background
- Animated social media cards with hover effects
- Discord username copy functionality
- Quick action buttons for GitHub and LinkedIn
- Custom cursor design
- Mobile-responsive layout
- Fast loading times

Your social media link aggregator is now ready for the world! 🚀