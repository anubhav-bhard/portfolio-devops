import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/yourusername',
    label: 'GitHub'
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn'
  },
  {
    icon: Mail,
    href: 'mailto:your.email@example.com',
    label: 'Email'
  }
];

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
          aria-label={link.label}
        >
          <link.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}