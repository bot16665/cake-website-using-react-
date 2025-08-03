'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-3xl">🍰</span>
            <span className="text-2xl font-bold text-pink-500">Sweet Dreams</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-pink-500 transition-colors">
              Home
            </Link>
            <Link href="/cakes" className="text-gray-700 hover:text-pink-500 transition-colors">
              Cakes
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-pink-500 transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-pink-500 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-pink-500 transition-colors">
              Contact
            </Link>
            <Link 
              href="/order" 
              className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-pink-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/cakes" 
                className="text-gray-700 hover:text-pink-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Cakes
              </Link>
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-pink-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-pink-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-pink-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/order" 
                className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Order Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 