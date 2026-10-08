export const SITE = {
  name: "Jordan Lee",
  title: "Jordan Lee — Independent designer & developer",
  description:
    "Independent designer and developer making thoughtful digital experiences.",
  email: "hello@jordanlee.design",
  location: "Brooklyn",
  themeColor: "#f7f6f2",
  locale: "en_US",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "Instagram",
    handle: "@jordanlee",
    href: "https://www.instagram.com/",
  },
  {
    label: "LinkedIn",
    handle: "Jordan Lee",
    href: "https://www.linkedin.com/",
  },
] as const;

export const MAILTO = `mailto:${SITE.email}`;
