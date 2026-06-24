import React from 'react';
import { Phone, Calendar, Heart, ShieldAlert, FileText, CheckCircle } from 'lucide-react';
import { FIRM_INFO, FAMILY_SERVICES_LIST } from '../data';

export default function FamilyView() {
  return (
    <div id="family-view" className="animate-fade-in text-charcoal">
      
      {/* 1. Hero Section */}
      <section className="bg-navy text-white py-16 lg:py-20 border-b border-gold/15 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (Copy) */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-2">Compassionate & Focused Counsel</span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-4">
                Family Lawyer Ottawa
              </h1>
              <p className="text-xl text-gold-light font-light italic mb-6">
                Compassionate & Results-Oriented Representation
              </p>
              <p className="text-lg text-gray-300 font-light leading-relaxed">
                Family disputes are often emotionally demanding and legally complex. Dimitri Trofimoff provides down-to-earth support, focusing on resolving disagreements productively, protecting parent-child relationships, and securing your financial stability.
              </p>
            </div>

            {/* Right Column (Family Counseling Image) */}
            <div className="lg:col-span-5 relative group" id="family-hero-image-container">
              <div className="absolute inset-0 bg-gold rounded-lg transform translate-x-3 translate-y-3 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Compassionate Family Lawyer Consultation Ottawa — Dimitri Trofimoff" 
                className="rounded-lg shadow-xl border border-gray-700/50 object-cover w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-square"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Compassionate Tone Alert Box */}
      <section className="bg-warm-grey py-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex p-2.5 bg-gold/10 rounded-full text-gold-dark">
            <Heart className="h-5 w-5 shrink-0" />
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy">
            "We understand this is a difficult time for your family."
          </h3>
          <p className="text-gray-600 font-light text-sm leading-relaxed max-w-2xl mx-auto">
            Whether you are entering a relationship and want to protect your assets, or experiencing a separation, we avoid unnecessary confrontation to keep your legal bills manageable and prioritize your children's well-being.
          </p>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">
              Our Family Law Services
            </h2>
            <div className="h-1 w-16 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 font-light text-sm">
              We cover the full spectrum of legal assistance for couples, cohabitants, and parents in Ottawa and Eastern Ontario.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="family-services-grid">
            {FAMILY_SERVICES_LIST.map((service, i) => (
              <div 
                key={i} 
                className="bg-white p-8 rounded border border-gray-200 shadow-sm hover:shadow-md hover:border-gold/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="bg-gold/10 w-10 h-10 rounded-full flex items-center justify-center text-gold-dark mb-5 font-serif font-bold">
                    {i + 1}
                  </div>
                  <h3 className="font-serif font-bold text-navy text-xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                    {service.desc}
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-3 text-xs text-gold-dark font-semibold">
                  Tailored Strategic Plan • LSO Standard
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Sensitive Callout Section (Free Consultation Offer) */}
      <section className="bg-navy text-white py-20 relative overflow-hidden border-y border-gold/15">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(201,168,76,0.1),transparent_50%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-gold">Confidential Strategy Session</span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Free Initial Family Consultation
          </h2>
          <div className="h-1 w-12 bg-gold mx-auto mb-4"></div>
          <p className="text-gray-300 font-light leading-relaxed max-w-2xl mx-auto">
            Discussing your private family situation can feel daunting. We guarantee 100% confidentiality from your first interaction. Dimitri will sit down with you virtually or in Ottawa to hear your story and explain your legal rights.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={FIRM_INFO.googleCalendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-navy-dark px-8 py-3.5 rounded font-bold transition-all shadow"
              id="family-book-cta"
            >
              Book Confidential Consultation
            </a>
            <a 
              href={`tel:${FIRM_INFO.tollFree}`}
              className="bg-navy-light hover:bg-navy-light/80 border border-gold/40 px-8 py-3.5 rounded font-bold transition-all flex items-center justify-center gap-2"
              id="family-call-cta"
            >
              <Phone className="h-4.5 w-4.5 text-gold" />
              <span>Call Office: {FIRM_INFO.tollFree}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 5. What to expect */}
      <section className="bg-warm-grey py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-dark">Our Approach</span>
              <h2 className="font-serif text-3xl font-bold text-navy">
                An Amicable, Highly Structured Resolution Path
              </h2>
              <div className="h-1 w-16 bg-gold"></div>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                While Dimitri Trofimoff is prepared to vigorously advocate for you in an Ontario court of law, our primary goal is to draft comprehensive separations or cohabitation plans that avoid trial. Settling family conflicts through negotiated contracts is always faster, significantly cheaper, and healthier for all family members.
              </p>
              
              <ul className="space-y-3">
                <li className="flex gap-2.5 items-center text-sm font-medium text-navy">
                  <CheckCircle className="h-4.5 w-4.5 text-gold shrink-0" />
                  <span>Out-of-court settlement prioritizing co-parenting structures</span>
                </li>
                <li className="flex gap-2.5 items-center text-sm font-medium text-navy">
                  <CheckCircle className="h-4.5 w-4.5 text-gold shrink-0" />
                  <span>Meticulous asset tracing and clean property divisions</span>
                </li>
                <li className="flex gap-2.5 items-center text-sm font-medium text-navy">
                  <CheckCircle className="h-4.5 w-4.5 text-gold shrink-0" />
                  <span>Fully calculated child and spousal support alignments</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded shadow border border-gray-100 space-y-6">
              <h3 className="font-serif text-xl font-bold text-navy">Urgent Family Inquiries</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                Do you need immediate advice regarding restraining orders, parental child removal, or lockouts? We process urgent requests and file for emergency court motions when immediate safety borders are required.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-600 p-4 text-red-900 rounded-r">
                <p className="font-bold text-sm">Emergency Family Restraining Orders</p>
                <p className="text-xs font-light mt-1">
                  Contact our legal team immediately at <strong className="font-bold">{FIRM_INFO.local}</strong> for quick filing guidance.
                </p>
              </div>

              <div className="pt-2 text-center">
                <span className="text-xs text-gray-400 block mb-2">Book directly with Dimitri</span>
                <a 
                  href={FIRM_INFO.googleCalendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-navy hover:bg-navy-dark text-white text-xs px-6 py-3 rounded font-bold uppercase tracking-wider"
                >
                  Schedule Appointment Now
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
