import { Facebook, Instagram, Music, Twitter, Youtube } from "lucide-react";
import { SocialLink } from "..";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    key: "instagram",
    label: "Instagram",
    href: "https://instagram.com/yourbrand",
    icon: Instagram,
  },
  {
    key: "facebook",
    label: "Facebook",
    href: "https://facebook.com/yourbrand",
    icon: Facebook,
  },
  {
    key: "music",
    label: "Music",
    href: "https://spotify.com/yourbrand", // or SoundCloud/Apple Music
    icon: Music,
  },
  {
    key: "twitter",
    label: "Twitter",
    href: "https://twitter.com/yourbrand",
    icon: Twitter,
  },
  {
    key: "youtube",
    label: "YouTube",
    href: "https://youtube.com/yourbrand",
    icon: Youtube,
  },
];
