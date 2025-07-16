import { Mail, Linkedin, Github } from "lucide-react";

const socialLinks = [
  {
    href: "mailto:tamiramrani1@gmail.com",
    icon: Mail,
    label: "Email",
  },
  {
    href: "https://www.linkedin.com/in/tamir-amrani-a14b4a258/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/dogleading",
    icon: Github,
    label: "GitHub",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={
                social.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          © {currentYear} Tamir Amrani. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
