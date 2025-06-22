// ========================================
// 🎯 SOCIAL LINK HUB CONFIGURATION
// ========================================
// Edit this file to customize your profile and social links
// After editing, save and deploy - your changes will appear automatically!

// ========================================
// 👤 PROFILE INFORMATION
// ========================================
export const profileConfig = {
  // Your name as it should appear on the site
  name: "Ishat Noor Mahi",
  
  // Your title/designation (e.g., "Software Developer", "Student", "Creator")
  title: "Statistics - SUST",
  
  // A brief description about yourself
  description: "Statistics student at SUST. Connect with me across platforms for code, projects, and creative content.",
  
  // Your profile picture URL (GitHub avatar, or any image URL)
  profileImageUrl: "https://avatars.githubusercontent.com/u/71538842?v=4",
  
  // Set to true to show green online indicator, false to hide it
  isOnline: true,
};

// ========================================
// 🔗 SOCIAL MEDIA LINKS
// ========================================
// Add, remove, or edit social links below
// Each link should have: name, url, icon, description, colors, and comingSoon status
// 
// 🆕 COMING SOON FEATURE:
// - Set url to "#" and comingSoon to true to show "Coming Soon" animation
// - Any social link can be a "Coming Soon" card, not just portfolio
// - Example: YouTube, Blog, Store, etc. can all show "Coming Soon"

export const socialLinksConfig = [
  {
    id: 1,
    name: "Facebook",
    url: "https://www.facebook.com/IN.Mahi",
    icon: "fab fa-facebook-f", // Font Awesome icon class
    description: "Connect on Facebook",
    gradientFrom: "#1877F2", // Start color of gradient
    gradientTo: "#166FE5",   // End color of gradient
    order: 1, // Display order (1 = first, 2 = second, etc.)
    comingSoon: false, // Set to true for "Coming Soon" cards (when url is "#")
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://www.instagram.com/n_ordinary__kid___/",
    icon: "fab fa-instagram",
    description: "Visual stories & daily life",
    gradientFrom: "#E4405F",
    gradientTo: "#F77737",
    order: 2,
    comingSoon: false,
  },
  {
    id: 3,
    name: "GitHub",
    url: "https://github.com/INmahi/",
    icon: "fab fa-github",
    description: "Code repositories & projects",
    gradientFrom: "#24292e",
    gradientTo: "#0d1117",
    order: 3,
    comingSoon: false,
  },
  {
    id: 4,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mahi01/",
    icon: "fab fa-linkedin-in",
    description: "Professional network",
    gradientFrom: "#0077B5",
    gradientTo: "#005885",
    order: 4,
    comingSoon: false,
  },
  {
    id: 5,
    name: "Discord",
    url: "mahi_787", // For Discord, put your username here
    icon: "fab fa-discord",
    description: "Code and hangout with me",
    gradientFrom: "#5865F2",
    gradientTo: "#4752C4",
    order: 5,
    comingSoon: false,
  },
  {
    id: 6,
    name: "X",
    url: "https://x.com/IshatNoor",
    icon: "fab fa-x-twitter",
    description: "Thoughts & quick updates",
    gradientFrom: "#000000",
    gradientTo: "#14171A",
    order: 6,
    comingSoon: false,
  },
  {
    id: 7,
    name: "My Portfolio",
    url: "#", // Keep as "#" for coming soon
    icon: "fas fa-briefcase",
    description: "Personal projects & work showcase",
    gradientFrom: "#6366F1",
    gradientTo: "#8B5CF6",
    order: 7,
    comingSoon: true, // Set to true for "Coming Soon" cards
  },
  // ========================================
  // 🆕 ADD NEW SOCIAL LINKS BELOW
  // ========================================
  // Example: TikTok
  // {
  //   id: 8,
  //   name: "TikTok",
  //   url: "#",
  //   icon: "fab fa-tiktok",
  //   description: "Short videos & creative content",
  //   gradientFrom: "#000000",
  //   gradientTo: "#25F4EE",
  //   order: 8,
  //   comingSoon: false,
  // },
  
  // Example: YouTube (Coming Soon)
  // {
  //   id: 9,
  //   name: "YouTube",
  //   url: "#", // Set to "#" for coming soon
  //   icon: "fab fa-youtube",
  //   description: "Video content & tutorials",
  //   gradientFrom: "#FF0000",
  //   gradientTo: "#CC0000",
  //   order: 9,
  //   comingSoon: true, // Set to true to show "Coming Soon" animation
  // },
  
  // Example: Twitter (if you want both X and Twitter)
  // {
  //   id: 10,
  //   name: "Twitter",
  //   url: "https://twitter.com/yourusername",
  //   icon: "fab fa-twitter",
  //   description: "Follow me on Twitter",
  //   gradientFrom: "#1DA1F2",
  //   gradientTo: "#0D8BD9",
  //   order: 10,
  //   comingSoon: false,
  // },
];

// ========================================
// 🎨 CUSTOMIZATION OPTIONS
// ========================================
export const siteConfig = {
  // Site title (appears in browser tab)
  siteTitle: "Ishat Noor Mahi | Statistics Student - SUST",
  
  // Site description (for SEO)
  siteDescription: "Connect with Ishat Noor Mahi across all social platforms. Statistics student at SUST sharing code, projects, and creative content.",
  
  // Welcome message (appears in typewriter effect)
  welcomeMessage: "Welcome to my universe ✨",
  
  // Main heading text
  mainHeading: "✨ Let's Stay Connected ✨",
  
  // Footer text
  footerText: "Made with passion",
  
  // GitHub repository link (for "See React Source Code" link)
  githubRepo: "https://github.com/INmahi/social-link-site",
  
  // Copyright year
  copyrightYear: "2024",
};

// ========================================
// 📚 AVAILABLE ICONS
// ========================================
// You can use any Font Awesome icon. Here are some popular ones:
// 
// Social Media:
// - "fab fa-facebook-f" (Facebook)
// - "fab fa-instagram" (Instagram)
// - "fab fa-twitter" (Twitter)
// - "fab fa-x-twitter" (X/Twitter)
// - "fab fa-linkedin-in" (LinkedIn)
// - "fab fa-github" (GitHub)
// - "fab fa-discord" (Discord)
// - "fab fa-tiktok" (TikTok)
// - "fab fa-youtube" (YouTube)
// - "fab fa-snapchat-ghost" (Snapchat)
// - "fab fa-reddit-alien" (Reddit)
// - "fab fa-pinterest" (Pinterest)
// - "fab fa-whatsapp" (WhatsApp)
// - "fab fa-telegram" (Telegram)
// - "fab fa-spotify" (Spotify)
// - "fab fa-soundcloud" (SoundCloud)
// - "fab fa-twitch" (Twitch)
// - "fab fa-behance" (Behance)
// - "fab fa-dribbble" (Dribbble)
// - "fab fa-medium" (Medium)
// - "fab fa-dev" (Dev.to)
// - "fab fa-hashnode" (Hashnode)
// - "fab fa-stack-overflow" (Stack Overflow)
// - "fab fa-quora" (Quora)
// - "fab fa-product-hunt" (Product Hunt)
// 
// General:
// - "fas fa-globe" (Website)
// - "fas fa-briefcase" (Portfolio)
// - "fas fa-envelope" (Email)
// - "fas fa-phone" (Phone)
// - "fas fa-map-marker-alt" (Location)
// - "fas fa-calendar" (Calendar)
// - "fas fa-book" (Blog)
// - "fas fa-camera" (Photography)
// - "fas fa-music" (Music)
// - "fas fa-gamepad" (Gaming)
// - "fas fa-palette" (Art)
// - "fas fa-code" (Code)
// - "fas fa-laptop-code" (Development)
// - "fas fa-mobile-alt" (Mobile)
// - "fas fa-server" (Server)
// - "fas fa-database" (Database)
// - "fas fa-cloud" (Cloud)
// - "fas fa-rocket" (Launch)
// - "fas fa-star" (Featured)
// - "fas fa-heart" (Favorites)
// - "fas fa-fire" (Trending)
// - "fas fa-trophy" (Achievements)
// - "fas fa-award" (Awards)
// - "fas fa-certificate" (Certificates)
// - "fas fa-graduation-cap" (Education)
// - "fas fa-university" (University)
// - "fas fa-building" (Company)
// - "fas fa-users" (Team)
// - "fas fa-handshake" (Partnership)
// - "fas fa-hand-holding-heart" (Support)
// - "fas fa-coffee" (Buy me a coffee)
// - "fas fa-gift" (Donations)
// - "fas fa-shopping-cart" (Store)
// - "fas fa-tag" (Products)
// - "fas fa-tools" (Tools)
// - "fas fa-wrench" (Services)
// - "fas fa-cog" (Settings)
// - "fas fa-info-circle" (Info)
// - "fas fa-question-circle" (Help)
// - "fas fa-exclamation-circle" (Important)
// - "fas fa-check-circle" (Success)
// - "fas fa-times-circle" (Error)
// - "fas fa-exclamation-triangle" (Warning)
// - "fas fa-lightbulb" (Ideas)
// - "fas fa-comment" (Comments)
// - "fas fa-comments" (Discussions)
// - "fas fa-share" (Share)
// - "fas fa-download" (Download)
// - "fas fa-upload" (Upload)
// - "fas fa-save" (Save)
// - "fas fa-edit" (Edit)
// - "fas fa-trash" (Delete)
// - "fas fa-plus" (Add)
// - "fas fa-minus" (Remove)
// - "fas fa-search" (Search)
// - "fas fa-filter" (Filter)
// - "fas fa-sort" (Sort)
// - "fas fa-arrow-up" (Up)
// - "fas fa-arrow-down" (Down)
// - "fas fa-arrow-left" (Left)
// - "fas fa-arrow-right" (Right)
// - "fas fa-chevron-up" (Chevron Up)
// - "fas fa-chevron-down" (Chevron Down)
// - "fas fa-chevron-left" (Chevron Left)
// - "fas fa-chevron-right" (Chevron Right)
// - "fas fa-home" (Home)
// - "fas fa-user" (User)
// - "fas fa-user-friends" (Friends)
// - "fas fa-user-plus" (Add User)
// - "fas fa-user-minus" (Remove User)
// - "fas fa-user-edit" (Edit User)
// - "fas fa-user-cog" (User Settings)
// - "fas fa-user-shield" (User Security)
// - "fas fa-user-lock" (User Lock)
// - "fas fa-user-unlock" (User Unlock)
// - "fas fa-user-check" (User Check)
// - "fas fa-user-times" (User Times)
// - "fas fa-user-clock" (User Clock)
// - "fas fa-user-graduate" (User Graduate)
// - "fas fa-user-tie" (User Tie)
// - "fas fa-user-ninja" (User Ninja)
// - "fas fa-user-astronaut" (User Astronaut)
// - "fas fa-user-hard-hat" (User Hard Hat)
// - "fas fa-user-md" (User Doctor)
// - "fas fa-user-nurse" (User Nurse)
// - "fas fa-user-teacher" (User Teacher)
// - "fas fa-user-student" (User Student)
// 
// For more icons, visit: https://fontawesome.com/icons 