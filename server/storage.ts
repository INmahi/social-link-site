import { users, socialLinks, profile, type User, type InsertUser, type SocialLink, type InsertSocialLink, type Profile, type InsertProfile } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getSocialLinks(): Promise<SocialLink[]>;
  createSocialLink(link: InsertSocialLink): Promise<SocialLink>;
  getProfile(): Promise<Profile | undefined>;
  createProfile(profileData: InsertProfile): Promise<Profile>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private socialLinks: Map<number, SocialLink>;
  private profile: Profile | undefined;
  private currentUserId: number;
  private currentSocialLinkId: number;

  constructor() {
    this.users = new Map();
    this.socialLinks = new Map();
    this.currentUserId = 1;
    this.currentSocialLinkId = 1;
    
    // Initialize with default profile and social links
    this.initializeDefaults();
  }

  private initializeDefaults() {
    // Default profile
    this.profile = {
      id: 1,
      name: "Ishat Noor Mahi",
      title: "Statistics - SUST",
      description: "Discover my creative journey across all platforms. Follow me for the latest updates, content, and behind-the-scenes moments.",
      profileImageUrl: "https://avatars.githubusercontent.com/u/71538842?v=4",
      isOnline: true,
    };

    // Default social links with authentic brand colors
    const defaultLinks: (Omit<SocialLink, 'id'>)[] = [
      {
        name: "Facebook",
        url: "https://www.facebook.com/IN.Mahi",
        icon: "fab fa-facebook-f",
        description: "Connect on Facebook",
        gradientFrom: "#1877F2",
        gradientTo: "#166FE5",
        order: 1,
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com/n_ordinary__kid___/",
        icon: "fab fa-instagram",
        description: "Visual stories & daily life",
        gradientFrom: "#E4405F",
        gradientTo: "#F77737",
        order: 2,
      },
      {
        name: "GitHub",
        url: "https://github.com/INmahi/",
        icon: "fab fa-github",
        description: "Code repositories & projects",
        gradientFrom: "#24292e",
        gradientTo: "#0d1117",
        order: 3,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mahi01/",
        icon: "fab fa-linkedin-in",
        description: "Professional network",
        gradientFrom: "#0077B5",
        gradientTo: "#005885",
        order: 4,
      },
      {
        name: "Discord",
        url: "mahi_787",
        icon: "fab fa-discord",
        description: "Code and hangout with me",
        gradientFrom: "#5865F2",
        gradientTo: "#4752C4",
        order: 5,
      },
      {
        name: "X",
        url: "https://x.com/IshatNoor",
        icon: "fab fa-x-twitter",
        description: "Thoughts & quick updates",
        gradientFrom: "#000000",
        gradientTo: "#14171A",
        order: 6,
      },
    ];

    defaultLinks.forEach((link) => {
      const socialLink: SocialLink = { ...link, id: this.currentSocialLinkId++ };
      this.socialLinks.set(socialLink.id, socialLink);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getSocialLinks(): Promise<SocialLink[]> {
    return Array.from(this.socialLinks.values()).sort((a, b) => a.order - b.order);
  }

  async createSocialLink(insertLink: InsertSocialLink): Promise<SocialLink> {
    const id = this.currentSocialLinkId++;
    const link: SocialLink = { 
      id,
      name: insertLink.name,
      url: insertLink.url,
      icon: insertLink.icon,
      description: insertLink.description,
      gradientFrom: insertLink.gradientFrom,
      gradientTo: insertLink.gradientTo,
      order: insertLink.order ?? 0 
    };
    this.socialLinks.set(id, link);
    return link;
  }

  async getProfile(): Promise<Profile | undefined> {
    return this.profile;
  }

  async createProfile(insertProfile: InsertProfile): Promise<Profile> {
    const profile: Profile = { 
      id: 1,
      name: insertProfile.name,
      title: insertProfile.title,
      description: insertProfile.description,
      profileImageUrl: insertProfile.profileImageUrl,
      isOnline: insertProfile.isOnline ?? true 
    };
    this.profile = profile;
    return profile;
  }
}

export const storage = new MemStorage();
