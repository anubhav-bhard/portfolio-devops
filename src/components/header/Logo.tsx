import React from 'react';
import { Terminal } from 'lucide-react';

export default function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Terminal className="w-8 h-8 text-blue-400" />
      <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
        Anubhav Bhardwaj
      </span>
    </div>
  );
}