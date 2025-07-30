'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors cursor-pointer">
            <span className="font-pacifico">Linto</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer whitespace-nowrap">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer whitespace-nowrap">
              About
            </Link>
            <Link href="#skills" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer whitespace-nowrap">
              Skills
            </Link>
            <Link href="#projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer whitespace-nowrap">
              Projects
            </Link>
            <Link href="#education" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer whitespace-nowrap">
              Education
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer whitespace-nowrap">
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                About
              </Link>
              <Link href="#skills" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                Skills
              </Link>
              <Link href="#projects" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                Projects
              </Link>
              <Link href="#education" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                Education
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}