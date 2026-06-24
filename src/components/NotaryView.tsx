import React from 'react';
import { Phone, Calendar, FileText, CheckCircle, Clock, Info, ShieldCheck } from 'lucide-react';
import { FIRM_INFO, NOTARY_SERVICES_LIST } from '../data';

export default function NotaryView() {
  return (
    <div id="notary-view" className="animate-fade-in text-charcoal">
      
      {/* 1. Hero Section */}
      <section className="bg-navy text-white py-16 lg:py-20 border-b border-gold/15 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (Copy) */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-2">Prompt & Accessible Legal Seals</span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-4">
                Fast & Affordable Notary Services in Ottawa
              </h1>
              <p className="text-lg text-gray-300 font-light leading-relaxed">
                Need documents verified, affidavits commissioned, or signatures witnessed? Dimitri Trofimoff is a registered Notary Public and Commissioner of Oaths in Ontario, providing rapid, same-week validation services.
              </p>
            </div>

            {/* Right Column (Notary Document Image) */}
            <div className="lg:col-span-5 relative group" id="notary-hero-image-container">
              <div className="absolute inset-0 bg-gold rounded-lg transform translate-x-3 translate-y-3 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1505664194779-8bebcb95c557?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Notary Public Document Verification and Seals — Dimitri Trofimoff" 
                className="rounded-lg shadow-xl border border-gray-700/50 object-cover w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-square"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Key Banner Points */}
      <section className="bg-warm-grey py-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-gray-600 font-medium">
            <span className="flex items-center gap-2 text-navy">
              <Clock className="h-4.5 w-4.5 text-gold-dark shrink-0" />
              <span>Same-Week Appointments Available</span>
            </span>
            <span className="hidden md:inline text-gray-300">|</span>
            <span className="flex items-center gap-2 text-navy">
              <ShieldCheck className="h-4.5 w-4.5 text-gold-dark shrink-0" />
              <span>Registered LSO Lawyer Credentials</span>
            </span>
            <span className="hidden md:inline text-gray-300">|</span>
            <span className="flex items-center gap-2 text-navy">
              <Info className="h-4.5 w-4.5 text-gold-dark shrink-0" />
              <span>Competitive Rates — Call for Quotes</span>
            </span>
          </div>
        </div>
      </section>

      {/* 3. Services Layout */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">
              Notary Public & Commissioner of Oaths Services
            </h2>
            <div className="h-1 w-16 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 font-light text-sm">
              We certify and seal a full variety of civil, travel, identity, and immigration documents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="notary-services-grid">
            {NOTARY_SERVICES_LIST.map((service, i) => (
              <div 
                key={i} 
                className="bg-white p-6 rounded border border-gray-200/80 shadow-sm hover:border-gold/30 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="bg-navy-light text-gold h-9 w-9 rounded flex items-center justify-center font-bold text-sm">
                    <FileText className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="font-serif font-bold text-navy text-base">{service.title}</h3>
                  <p className="text-xs text-gray-600 font-light leading-relaxed">{service.desc}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
                  <span>Authorized seal</span>
                  <span className="text-gold-dark font-medium">LSO Registered</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Pricing and Requirements Block */}
      <section className="bg-navy-dark text-white py-24 border-y border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-gold block">Notary Pricing & Appointment Requirements</span>
              <h2 className="font-serif text-3xl font-bold">
                Competitive & Fully Transparent Rates
              </h2>
              <div className="h-1 w-12 bg-gold"></div>
              <p className="text-gray-300 font-light leading-relaxed">
                Notary fee parameters depend on document quantities and specific seal formats. We offer highly competitive pricing, with convenient package rates for multi-document signing. Contact our office for a personalized, straightforward quote.
              </p>
              
              <div className="bg-navy-light/60 border border-gold/15 p-5 rounded">
                <span className="text-xs uppercase font-bold text-gold block mb-1">Standard Booking Notice</span>
                <p className="text-sm font-light text-gray-200 leading-relaxed">
                  Same-week slots are frequently open. We recommend booking 24–48 hours in advance to guarantee Dimitri's schedule presence at the Ottawa boardroom.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white text-navy-dark p-8 rounded shadow-xl space-y-6 border border-gray-200">
              <h3 className="font-serif text-xl font-bold text-navy">What to bring to your appointment:</h3>
              <div className="h-0.5 w-12 bg-gold"></div>
              
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <CheckCircle className="h-5 w-5 text-gold-dark shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-sm font-semibold">1. Two Pieces of Government ID</strong>
                    <span className="text-xs text-gray-500 font-light leading-relaxed">
                      At least one must be a valid, unexpired photo ID (e.g. Passport, Driver's License, Permanent Resident card). Health cards are generally not accepted.
                    </span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="h-5 w-5 text-gold-dark shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-sm font-semibold">2. The Unsigned Documents</strong>
                    <span className="text-xs text-gray-500 font-light leading-relaxed">
                      Do not sign or date any portion of the documents before meeting with the Notary. All signatures must be physically witnessed by Dimitri.
                    </span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="h-5 w-5 text-gold-dark shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-sm font-semibold">3. Original Supporting Credentials</strong>
                    <span className="text-xs text-gray-500 font-light leading-relaxed">
                      If you need copies certified, please bring the original physical papers. A notary cannot certify a copy without inspecting the original document.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CTA Block */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-3xl font-bold text-navy">
            Book Your Notary Appointment Today
          </h2>
          <div className="h-1 w-12 bg-gold mx-auto mb-4"></div>
          <p className="text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Click below to instantly schedule your signing session on Dimitri's Google Calendar, or dial our main office lines to arrange a swift custom boardroom meeting.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={FIRM_INFO.googleCalendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-navy-dark px-8 py-4 rounded font-bold transition-all shadow-md transform hover:-translate-y-0.5"
              id="notary-book-btn-final"
            >
              Book Notary Appointment
            </a>
            <a 
              href={`tel:${FIRM_INFO.tollFree}`}
              className="bg-navy hover:bg-navy-dark text-white px-8 py-4 rounded font-bold transition-colors flex items-center justify-center gap-2"
              id="notary-call-btn-final"
            >
              <Phone className="h-5 w-5 text-gold shrink-0" />
              <span>Call Toll-Free: {FIRM_INFO.tollFree}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
