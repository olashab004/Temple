import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { Search, MapPin, Calendar, Info, Menu, X, Home as HomeIcon, Map, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "./lib/utils";
import type { Temple } from "./types";

// Pages
import HomePage from "./pages/HomePage";
import TempleListing from "./pages/TempleListing";
import TempleDetail from "./pages/TempleDetail";
import Circuits from "./pages/Circuits";
import AdminPanel from "./pages/AdminPanel";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "Temples", path: "/temples", icon: MapPin },
    { name: "Circuits", path: "/circuits", icon: Map },
    { name: "Admin", path: "/admin", icon: ShieldCheck },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-amber-50/80 backdrop-blur-md border-b border-amber-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white shadow-lg">
              <span className="text-xl font-bold">ॐ</span>
            </div>
            <span className="text-xl font-bold text-amber-900 tracking-tight hidden sm:block">
              Temple Heritage
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "flex items-center space-x-1 text-sm font-medium transition-colors hover:text-amber-600",
                  location.pathname === link.path ? "text-amber-700" : "text-amber-900/70"
                )}
              >
                <link.icon className="w-4 h-4" />
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-amber-900 hover:bg-amber-100 rounded-lg"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-amber-50 border-b border-amber-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-3 rounded-lg text-base font-medium transition-colors",
                    location.pathname === link.path
                      ? "bg-amber-100 text-amber-900"
                      : "text-amber-900/70 hover:bg-amber-100/50"
                  )}
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-amber-900 text-amber-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center text-white">
                <span className="text-lg font-bold">ॐ</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Temple Heritage</span>
            </div>
            <p className="text-amber-200/80 text-sm leading-relaxed">
              Preserving and sharing the divine heritage of India's sacred temples. A comprehensive guide for pilgrims and heritage enthusiasts.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-amber-200/80">
              <li><Link to="/temples" className="hover:text-white transition-colors">Temple Directory</Link></li>
              <li><Link to="/circuits" className="hover:text-white transition-colors">Pilgrimage Circuits</Link></li>
              <li><Link to="/admin" className="hover:text-white transition-colors">Admin Portal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm text-amber-200/80">
              Email: info@templeheritage.in<br />
              Phone: +91 123 456 7890
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-amber-800 text-center text-xs text-amber-400">
          © {new Date().getFullYear()} India Temple Heritage Portal. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-amber-50 flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/temples" element={<TempleListing />} />
            <Route path="/temples/:id" element={<TempleDetail />} />
            <Route path="/circuits" element={<Circuits />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
