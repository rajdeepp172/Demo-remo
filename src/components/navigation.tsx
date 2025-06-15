"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ImageIcon } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <ImageIcon className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ResizeIt
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="text-slate-700 hover:text-blue-600 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-slate-700 hover:text-blue-600 transition-colors">
              Terms
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-slate-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-slate-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-slate-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="text-slate-700 hover:text-blue-600 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-slate-700 hover:text-blue-600 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
