import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#495E57] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-[#F4CE14] mb-4">Contact Us</h3>
            <p className="text-sm mb-2">123 Lemon Street</p>
            <p className="text-sm mb-2">Chicago, IL 60601</p>
            <p className="text-sm mb-2">Phone: (312) 555-0123</p>
            <p className="text-sm">Email: info@littlelemon.com</p>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-[#F4CE14] mb-4">Hours</h3>
            <p className="text-sm mb-2">Monday - Friday: 11am - 10pm</p>
            <p className="text-sm mb-2">Saturday: 10am - 11pm</p>
            <p className="text-sm">Sunday: 10am - 9pm</p>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-[#F4CE14] mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#F4CE14] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-[#F4CE14] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-[#F4CE14] transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Little Lemon Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
