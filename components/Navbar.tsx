"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { useState } from "react";
import { useTheme } from "@/lib/useTheme";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-primary">
              <Logo className="h-16 w-16" animate={true} />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              KnowFlow
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/features"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/roadmap"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Roadmap
            </Link>
            <Link
              href="/about"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {mounted && (
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="hidden md:inline-flex"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
            )}
            <Button variant="ghost" size="sm" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Link href="/#waitlist">
              <Button size="sm">Join Waitlist</Button>
            </Link>
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-200 dark:border-gray-800">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white w-full"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="h-5 w-5" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="h-5 w-5" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            )}
            <Link
              href="/features"
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Pricing
            </Link>
            <Link
              href="/roadmap"
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Roadmap
            </Link>
            <Link
              href="/about"
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
