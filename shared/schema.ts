import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const socialLinks = pgTable("social_links", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  url: text("url").notNull(),
  icon: text("icon").notNull(),
  description: text("description").notNull(),
  gradientFrom: text("gradient_from").notNull(),
  gradientTo: text("gradient_to").notNull(),
  order: integer("order").notNull().default(0),
  comingSoon: boolean("coming_soon").notNull().default(false),
});

export const profile = pgTable("profile", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  profileImageUrl: text("profile_image_url").notNull(),
  isOnline: boolean("is_online").notNull().default(true),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertSocialLinkSchema = createInsertSchema(socialLinks).pick({
  name: true,
  url: true,
  icon: true,
  description: true,
  gradientFrom: true,
  gradientTo: true,
  order: true,
  comingSoon: true,
});

export const insertProfileSchema = createInsertSchema(profile).pick({
  name: true,
  title: true,
  description: true,
  profileImageUrl: true,
  isOnline: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type SocialLink = typeof socialLinks.$inferSelect;
export type InsertSocialLink = z.infer<typeof insertSocialLinkSchema>;
export type Profile = typeof profile.$inferSelect;
export type InsertProfile = z.infer<typeof insertProfileSchema>;
