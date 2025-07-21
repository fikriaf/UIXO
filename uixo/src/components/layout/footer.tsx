import { Link } from "wouter";
import { Package } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg flex items-center justify-center">
                <Package className="text-white h-5 w-5" />
              </div>
              <span className="text-xl font-bold">ComponentHub</span>
            </div>
            <p className="text-slate-400 text-sm">
              Modern UI components for faster development. Built with React and Tailwind CSS.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/components" className="hover:text-white transition-colors duration-200">
                  Components
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Templates
                </a>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors duration-200">
                  Documentation
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Changelog
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-sm text-slate-400">
          <p>&copy; 2024 ComponentHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
