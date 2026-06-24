import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Scale } from 'lucide-react';
import { ActivePage } from '../types';
import { FIRM_INFO } from '../data';

interface NavbarProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
}

export default function Navbar({ activePage, setActivePage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; id: ActivePage }[] = [
    { label: 'Home', id: 'home' },
    { label: 'Criminal Law', id: 'criminal' },
    { label: 'Family Law', id: 'family' },
    { label: 'Notary', id: 'notary' },
    { label: 'About Dimitri', id: 'about' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (pageId: ActivePage) => {
    setActivePage(pageId);
    setIsOpen(false);
    // Smooth scroll to top when switching pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Update hash
    window.location.hash = pageId;
  };

  return (
    <header 
      id="main-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy-dark shadow-lg border-b border-gold/20 py-2' 
          : 'bg-navy py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Brand */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-gold rounded p-1 group"
            id="nav-logo"
          >
            <div className="bg-gold p-2.5 rounded-sm shrink-0 shadow-md group-hover:bg-gold-light transition-colors">
              <Scale className="h-6 w-6 text-navy-dark" />
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-wider text-gold flex items-center gap-1.5 leading-none">
                GOTLAW
              </span>
              <span className="block text-[10px] sm:text-xs font-sans tracking-wide text-gray-300 font-light mt-1">
                Dimitri Trofimoff, Barrister & Solicitor
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" id="desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-gold ${
                  activePage === item.id
                    ? 'text-gold font-semibold bg-navy-light/60 border-b-2 border-gold rounded-b-none'
                    : 'text-gray-300 hover:text-gold hover:bg-navy-light/30'
                }`}
                id={`nav-item-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Call / Book CTA */}
          <div className="hidden lg:flex items-center gap-4" id="desktop-ctas">
            <a 
              href={`tel:${FIRM_INFO.tollFree}`}
              className="flex items-center gap-1.5 text-gray-300 hover:text-gold text-sm font-semibold transition-colors"
              id="nav-phone-link"
            >
              <Phone className="h-4 w-4 text-gold" />
              <span>{FIRM_INFO.tollFree}</span>
            </a>
            <a
              href={FIRM_INFO.googleCalendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-navy-dark px-4 py-2 rounded text-sm font-bold tracking-wide shadow transition-all duration-200 transform hover:-translate-y-0.5 flex items-center gap-1.5"
              id="nav-book-btn"
            >
              <Calendar className="h-4 w-4" />
              Book Online
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <a 
              href={`tel:${FIRM_INFO.tollFree}`}
              className="p-2 text-gold hover:bg-navy-light/50 rounded-full"
              title="Call Dimitri Trofimoff"
            >
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded text-gray-300 hover:text-gold hover:bg-navy-light/50 focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Fullscreen Overlay */}
      {isOpen && (
        <div 
          id="mobile-menu-overlay" 
          className="fixed inset-x-0 top-[105px] bottom-0 bg-navy-dark/98 backdrop-blur-md z-40 lg:hidden flex flex-col border-t border-gold/10 overflow-y-auto animate-fade-in"
        >
          <div className="p-6 flex-1 flex flex-col justify-between">
            <nav className="flex flex-col space-y-3" id="mobile-nav">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-3 px-4 rounded-lg text-lg font-medium transition-all ${
                    activePage === item.id
                      ? 'bg-gold text-navy-dark font-bold shadow'
                      : 'text-gray-300 hover:text-gold hover:bg-navy-light/40'
                  }`}
                  id={`mobile-nav-item-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="mt-8 pt-6 border-t border-gold/15 space-y-4">
              <div className="flex flex-col gap-1 text-center">
                <span className="text-xs text-gray-400 uppercase tracking-wider">Contact Office 24/7</span>
                <a 
                  href={`tel:${FIRM_INFO.tollFree}`} 
                  className="text-2xl font-serif text-gold font-bold hover:underline"
                >
                  {FIRM_INFO.tollFree}
                </a>
                <span className="text-sm text-gray-400">Local: {FIRM_INFO.local}</span>
              </div>
              <a
                href={FIRM_INFO.googleCalendarLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gold hover:bg-gold-light text-navy-dark py-3.5 rounded-lg text-center font-bold tracking-wide shadow flex items-center justify-center gap-2"
                id="mobile-book-btn"
              >
                <Calendar className="h-5 w-5" />
                Book Free Consultation
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
