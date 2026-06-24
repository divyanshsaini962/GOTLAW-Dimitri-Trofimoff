import React from 'react';
import { Mail, MapPin, Phone, Scale, Clock, Globe } from 'lucide-react';
import { ActivePage } from '../types';
import { FIRM_INFO } from '../data';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
}

export default function Footer({ setActivePage }: FooterProps) {
  const handlePageClick = (pageId: ActivePage) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = pageId;
  };

  return (
    <footer id="main-footer" className="bg-navy-dark text-gray-300 border-t-2 border-gold/30">
      
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand & Tagline */}
          <div className="space-y-6" id="footer-brand-section">
            <div className="flex items-center gap-3">
              <div className="bg-gold p-2 rounded-sm shrink-0">
                <Scale className="h-5 w-5 text-navy-dark" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-wider text-gold block">
                  GOTLAW
                </span>
                <span className="block text-[10px] font-sans tracking-wider text-gray-400">
                  Dimitri Trofimoff
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed font-light">
              {FIRM_INFO.tagline}
            </p>
            <div className="space-y-3 pt-2 text-sm">
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-gold shrink-0" />
                <span>{FIRM_INFO.hours}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="h-4 w-4 text-gold shrink-0" />
                <span>Languages: English & Russian (fluent)</span>
              </div>
            </div>
          </div>

          {/* Practice Areas & Quick Links */}
          <div className="space-y-6" id="footer-links-section">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide border-b border-gold/20 pb-2">
              Practice Areas
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button 
                  onClick={() => handlePageClick('criminal')} 
                  className="hover:text-gold transition-colors text-left font-light hover:underline"
                >
                  ⚖️ Criminal Law & Defense
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageClick('family')} 
                  className="hover:text-gold transition-colors text-left font-light hover:underline"
                >
                  👨‍👩‍👧 Family Law & Divorce
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageClick('notary')} 
                  className="hover:text-gold transition-colors text-left font-light hover:underline"
                >
                  📋 Notary & Commissioning
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handlePageClick('about')} 
                  className="hover:text-gold transition-colors text-left font-light hover:underline"
                >
                  Meet Dimitri Trofimoff
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6" id="footer-contact-section">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide border-b border-gold/20 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="font-light">{FIRM_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <div>
                  <a href={`tel:${FIRM_INFO.tollFree}`} className="hover:text-gold transition-colors font-medium">
                    Toll-Free: {FIRM_INFO.tollFree}
                  </a>
                  <span className="block text-xs text-gray-500">Local: {FIRM_INFO.local}</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <a href={`mailto:${FIRM_INFO.email}`} className="hover:text-gold transition-colors font-light">
                  {FIRM_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Memberships & Socials */}
          <div className="space-y-6" id="footer-memberships-section">
            <h3 className="font-serif text-lg font-bold text-white tracking-wide border-b border-gold/20 pb-2">
              Memberships & Social
            </h3>
            <div className="flex flex-wrap gap-2">
              {FIRM_INFO.memberships.map((member, i) => (
                <span 
                  key={i} 
                  className="text-xs bg-navy-light px-2.5 py-1.5 rounded border border-gold/15 text-gray-300 font-medium inline-flex items-center gap-1"
                >
                  <span>{member.icon}</span>
                  <span>{member.name}</span>
                </span>
              ))}
            </div>
            <div className="pt-2 flex gap-4">
              <a 
                href={`https://${FIRM_INFO.facebook}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm bg-navy-light p-2.5 rounded-full hover:text-gold border border-gold/10 hover:border-gold/40 transition-all text-gray-400"
                title="Follow Gotlaw on Facebook"
              >
                Facebook
              </a>
              <a 
                href={`https://${FIRM_INFO.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm bg-navy-light p-2.5 rounded-full hover:text-gold border border-gold/10 hover:border-gold/40 transition-all text-gray-400"
                title="Connect with Dimitri Trofimoff on LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="bg-navy-darker border-t border-gold/10 text-xs text-gray-500 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <p className="leading-relaxed">
              <strong className="text-gray-400">Disclaimer:</strong> The information on this website is for informational purposes only and does not constitute formal legal advice. Accessing or using this website does not create a lawyer-client relationship. Please contact our office directly to discuss your specific legal situation.
            </p>
            <p>
              © 2025 Gotlaw — Dimitri Trofimoff, Barrister & Solicitor. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4 shrink-0">
            <button 
              onClick={() => handlePageClick('contact')} 
              className="hover:text-gold underline transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => handlePageClick('contact')} 
              className="hover:text-gold underline transition-colors"
            >
              Terms of Service
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}
