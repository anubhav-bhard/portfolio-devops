import React from 'react';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

export default function Navigation() {
  return (
    <nav className="hidden md:flex space-x-8">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm uppercase tracking-wider font-medium"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}