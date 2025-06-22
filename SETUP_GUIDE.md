# 🚀 Quick Setup Guide

## How to Customize Your Social Link Hub

### Step 1: Edit the Configuration File

Open `client/src/config.ts` and customize your profile and social links.

### Step 2: Profile Information

```typescript
export const profileConfig = {
  name: "Your Name",                    // Your display name
  title: "Your Title",                  // Your job title
  description: "Your description",      // About yourself
  profileImageUrl: "https://...",      // Your profile picture
  isOnline: true,                      // Show online status
};
```

### Step 3: Add Your Social Links

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
    comingSoon: false, // Set to true for "Coming Soon" cards
  },
  // Add more links...
];
```

### Step 4: Deploy

1. Run `npm run build`
2. Deploy the `dist/public` folder to Netlify, Vercel, or any hosting service

## 🎯 Example: Adding TikTok

```typescript
{
  id: 8,
  name: "TikTok",
  url: "https://www.tiktok.com/@yourusername",
  icon: "fab fa-tiktok",
  description: "Short videos & creative content",
  gradientFrom: "#000000",
  gradientTo: "#25F4EE",
  order: 8,
}
```

## 📚 Available Icons

- `fab fa-facebook-f` - Facebook
- `fab fa-instagram` - Instagram
- `fab fa-twitter` - Twitter
- `fab fa-linkedin-in` - LinkedIn
- `fab fa-github` - GitHub
- `fab fa-discord` - Discord
- `fab fa-tiktok` - TikTok
- `fab fa-youtube` - YouTube
- `fab fa-snapchat-ghost` - Snapchat
- `fab fa-reddit-alien` - Reddit
- `fab fa-pinterest` - Pinterest
- `fab fa-whatsapp` - WhatsApp
- `fab fa-telegram` - Telegram
- `fab fa-spotify` - Spotify
- `fab fa-twitch` - Twitch
- `fab fa-medium` - Medium
- `fab fa-dev` - Dev.to
- `fas fa-globe` - Website
- `fas fa-briefcase` - Portfolio
- `fas fa-envelope` - Email
- `fas fa-book` - Blog
- `fas fa-camera` - Photography
- `fas fa-music` - Music
- `fas fa-gamepad` - Gaming
- `fas fa-palette` - Art
- `fas fa-code` - Code

For more icons: https://fontawesome.com/icons

## 🎨 Popular Color Gradients

- **Facebook**: `#1877F2` to `#166FE5`
- **Instagram**: `#E4405F` to `#F77737`
- **Twitter/X**: `#000000` to `#14171A`
- **LinkedIn**: `#0077B5` to `#005885`
- **GitHub**: `#24292e` to `#0d1117`
- **Discord**: `#5865F2` to `#4752C4`
- **TikTok**: `#000000` to `#25F4EE`
- **YouTube**: `#FF0000` to `#CC0000`
- **Purple**: `#6366F1` to `#8B5CF6`
- **Pink**: `#EC4899` to `#BE185D`
- **Blue**: `#3B82F6` to `#1D4ED8`
- **Green**: `#10B981` to `#059669`

## 🚀 Deployment Options

### Netlify (Easiest)
1. Push to GitHub
2. Connect to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist/public`

### Vercel
1. Push to GitHub
2. Import to Vercel
3. Build command: `npm run build`
4. Output directory: `dist/public`

### Manual
1. Run `npm run build`
2. Upload `dist/public` to your web server

## 🆕 Coming Soon Feature

You can make any social link show a "Coming Soon" animation:

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
  comingSoon: true, // This makes it a "Coming Soon" card
}
```

---

**That's it! Your social link hub will be live with your custom profile and links.** 