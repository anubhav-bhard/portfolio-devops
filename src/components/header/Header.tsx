import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="bg-slate-900/95 backdrop-blur-sm text-white py-4 fixed w-full top-0 z-50 border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Logo />
          <Navigation />
          <div className="flex items-center space-x-6">
            <SocialLinks />
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}