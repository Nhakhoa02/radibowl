"use client"

import Link from "next/link"
import { Menu, Phone, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#about", label: "Về Chúng Tôi" },
  { href: "#products", label: "Sản Phẩm" },
  { href: "#contact", label: "Liên Hệ" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="nav-logo">
             Redi<span>Bowl</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white font-black transition-all text-xs uppercase tracking-widest"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:1900633345" className="flex items-center gap-2 text-primary font-semibold">
              <Phone className="w-4 h-4" />
              1900 633 345
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6">
              Đặt Ngay
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:1900633345" className="flex items-center gap-2 text-primary font-semibold">
                <Phone className="w-4 h-4" />
                1900 633 345
              </a>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-fit">
                Đặt Ngay
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
