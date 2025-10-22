import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#495E57] rounded-full flex items-center justify-center">
                <span className="text-[#F4CE14]">🍋</span>
              </div>
              <span className="text-[#495E57]">Little Lemon</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-[#495E57] hover:text-[#F4CE14] transition-colors">
              Home
            </a>
            <a href="#" className="text-[#495E57] hover:text-[#F4CE14] transition-colors">
              Menu
            </a>
            <a href="#" className="text-[#F4CE14] border-b-2 border-[#F4CE14]">
              Reserve a Table
            </a>
            <a href="#" className="text-[#495E57] hover:text-[#F4CE14] transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#495E57]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <a href="#" className="text-[#495E57] hover:text-[#F4CE14] transition-colors">
              Home
            </a>
            <a href="#" className="text-[#495E57] hover:text-[#F4CE14] transition-colors">
              Menu
            </a>
            <a href="#" className="text-[#F4CE14]">
              Reserve a Table
            </a>
            <a href="#" className="text-[#495E57] hover:text-[#F4CE14] transition-colors">
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
