# 🎯 Social Link Hub

A beautiful, customizable social media link aggregator built with React and Tailwind CSS. Perfect for creators, developers, and anyone who wants to share their social media presence in style.

## ✨ Features

- 🎨 **Beautiful Design**: Modern gradient borders, smooth animations, responsive layout
- ⚡ **Fast & Lightweight**: Built with Vite and React
- 📱 **Mobile Responsive**: Looks great on all devices
- 🎭 **Easy Customization**: Single config file to edit
- 🌙 **Dark Theme**: Elegant dark design with custom animations
- 🔗 **Social Media Ready**: Supports all major platforms
- 📋 **Clipboard Integration**: Copy Discord usernames with one click

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/yourusername/social-link-hub.git
cd social-link-hub
npm install
```

### 2. Customize Your Profile
Edit `client/src/config.ts`:
```typescript
export const profileConfig = {
  name: "Your Name",
  title: "Your Title", 
  description: "Your description",
  profileImageUrl: "https://your-image-url.com",
  isOnline: true,
};
```

### 3. Add Your Social Links
```typescript
export const socialLinksConfig = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "fab fa-github",
    description: "My code repositories",
    gradientFrom: "#24292e",
    gradientTo: "#0d1117",
    order: 1,
    comingSoon: false,
  },
  // Add more links...
];
```

### 4. Deploy
```bash
npm run build
# Deploy dist/public folder to Netlify, Vercel, or any hosting service
```

## 🆕 Coming Soon Feature

Make any link show "Coming Soon" animation:
```typescript
{
  id: 8,
  name: "My Blog",
  url: "#", // Set to "#" for coming soon
  icon: "fas fa-book", 
  description: "Thoughts and insights",
  gradientFrom: "#10B981",
  gradientTo: "#059669",
  order: 8,
  comingSoon: true, // This shows "Coming Soon" animation
}
```

## 📚 Popular Icons

- `fab fa-facebook-f` - Facebook
- `fab fa-instagram` - Instagram  
- `fab fa-twitter` - Twitter
- `fab fa-linkedin-in` - LinkedIn
- `fab fa-github` - GitHub
- `fab fa-discord` - Discord
- `fab fa-tiktok` - TikTok
- `fab fa-youtube` - YouTube
- `fab fa-spotify` - Spotify
- `fab fa-twitch` - Twitch
- `fas fa-globe` - Website
- `fas fa-briefcase` - Portfolio
- `fas fa-envelope` - Email

[More icons →](https://fontawesome.com/icons)

## 🎨 Popular Color Gradients

- **Facebook**: `#1877F2` to `#166FE5`
- **Instagram**: `#E4405F` to `#F77737`
- **Twitter/X**: `#000000` to `#14171A`
- **LinkedIn**: `#0077B5` to `#005885`
- **GitHub**: `#24292e` to `#0d1117`
- **Discord**: `#5865F2` to `#4752C4`
- **TikTok**: `#000000` to `#25F4EE`
- **YouTube**: `#FF0000` to `#CC0000`

## 🚀 Deployment

### Netlify (Recommended)
1. Push to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist/public`

### Vercel
1. Push to GitHub
2. Import to Vercel
3. Build command: `npm run build`
4. Output directory: `dist/public`

## 🛠️ Development

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run check  # Type checking
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**Made with ❤️ by [Ishat Noor Mahi](https://github.com/INmahi)** 