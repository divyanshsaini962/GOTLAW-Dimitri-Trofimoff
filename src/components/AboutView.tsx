import React from 'react';
import { Phone, Calendar, Award, Shield, CheckCircle, Globe, GraduationCap, Briefcase } from 'lucide-react';
import { FIRM_INFO } from '../data';

export default function AboutView() {
  return (
    <div id="about-view" className="animate-fade-in text-charcoal">
      
      {/* 1. Full-width Hero Header / Image Area */}
      <section className="relative bg-navy text-white py-24 border-b border-gold/15 overflow-hidden">
        {/* Subtle radial light bloom */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.1),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Bio Title Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-gold block">Advocate Profile</span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight text-white">
                Meet Dimitri Trofimoff
              </h1>
              <p className="text-xl text-gold-light font-serif italic">
                Your Dedicated Family & Criminal Defence Lawyer
              </p>
              <p className="text-gray-300 font-light leading-relaxed text-base">
                Dimitri is a client-focused barrister and solicitor based in Ottawa, Ontario. Grounded in deep practical insight, diverse academic training, and bilingual fluency, he offers accessible, results-oriented support during challenging life chapters.
              </p>
            </div>

            {/* Profile Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                <div className="absolute inset-0 bg-gold rounded transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=600" 
                  alt="Dimitri Trofimoff Lawyer Ottawa" 
                  className="rounded shadow-2xl border border-gray-700/50 object-cover w-full aspect-square"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Full Biography Details */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Bio Column */}
            <div className="lg:col-span-7 space-y-8" id="full-bio-details">
              
              <div className="space-y-4">
                <h2 className="font-serif text-3xl font-bold text-navy">
                  Global Perspective, Local Excellence
                </h2>
                <div className="h-1 w-16 bg-gold"></div>
              </div>

              <div className="space-y-6 text-gray-700 font-light leading-relaxed text-sm sm:text-base">
                <p>
                  Dimitri Trofimoff brings a rare, diverse international educational background to his legal practice. Having pursued advanced legal studies across Russia, England, and Ontario, Canada, he understands how contrasting legal frameworks process rights, liability, and dispute resolutions.
                </p>
                
                <p>
                  This expansive intellectual foundation enables Dimitri to analyze simple and complex civil or state actions with extreme care. He crafts defense positions and domestic contract splits designed to shield client resources and withstand rigorous courtroom scrutiny.
                </p>

                <p className="border-l-4 border-gold pl-4 italic text-navy-light font-normal">
                  "Dimitri's philosophy is rooted in down-to-earth honesty. You will never hear heavy legal jargon. Instead, you receive clear answers, practical recommendations, and complete cost transparency."
                </p>

                <p>
                  Dimitri frequently travels across Eastern Ontario to advocate for clients in provincial courts, boardrooms, and correctional settings. His practice is grounded in Ottawa and Kanata, with comprehensive legal aid and bilingual capabilities matching the demands of a diverse community.
                </p>
              </div>

            </div>

            {/* Right Credentials Column */}
            <div className="lg:col-span-5 space-y-8" id="academic-professional-timeline">
              
              {/* Education block */}
              <div className="bg-warm-grey p-8 rounded border border-gray-200 space-y-6">
                <h3 className="font-serif text-xl font-bold text-navy flex items-center gap-2">
                  <GraduationCap className="h-5.5 w-5.5 text-gold-dark shrink-0" />
                  <span>Academic Background</span>
                </h3>
                <div className="h-0.5 w-12 bg-gold"></div>
                
                <div className="space-y-4">
                  <div className="relative pl-6 border-l border-gray-300">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-gold rounded-full" />
                    <strong className="text-navy text-sm block font-semibold">Ontario, Canada</strong>
                    <span className="text-xs text-gray-500 font-light">NCA Qualification Certificate & LSO Licensing standard</span>
                  </div>
                  
                  <div className="relative pl-6 border-l border-gray-300">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-gold rounded-full" />
                    <strong className="text-navy text-sm block font-semibold">England, United Kingdom</strong>
                    <span className="text-xs text-gray-500 font-light">Advanced Common Law analytical studies</span>
                  </div>

                  <div className="relative pl-6 border-l border-gray-300">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 bg-gold rounded-full" />
                    <strong className="text-navy text-sm block font-semibold">Russian Federation</strong>
                    <span className="text-xs text-gray-500 font-light">Civil Law educational foundations & Bilingual validation</span>
                  </div>
                </div>
              </div>

              {/* Parole Background block */}
              <div className="bg-navy text-white p-8 rounded shadow-md space-y-4 border-l-4 border-gold">
                <h3 className="font-serif text-lg font-bold text-gold flex items-center gap-2">
                  <Briefcase className="h-5 w-5 shrink-0" />
                  <span>Former Probation & Parole Officer</span>
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  Dimitri's experience within the Ontario correctional framework provides an invaluable layer of insight. Having managed bail compliance checks, pre-sentence investigations, and rehabilitation plans, he knows exactly how state institutions assess risk and compliance.
                </p>
                <span className="text-[10px] bg-gold/15 text-gold px-2.5 py-1 rounded inline-block font-semibold border border-gold/35">
                  Deep Criminal System Insight
                </span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3. Memberships Section (4 Cards) */}
      <section className="bg-warm-grey py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-dark block mb-2">Credentials</span>
            <h2 className="font-serif text-3xl font-bold text-navy">
              Professional Memberships & Affiliations
            </h2>
            <div className="h-1 w-16 bg-gold mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="memberships-grid">
            
            <div className="bg-white p-6 rounded shadow-sm border-t-4 border-gold text-center space-y-3">
              <div className="text-3xl">🏛️</div>
              <h3 className="font-serif font-bold text-navy text-base leading-tight">Law Society of Ontario</h3>
              <p className="text-xs text-gray-500 font-light">Fully licensed Barrister & Solicitor in good standing.</p>
            </div>

            <div className="bg-white p-6 rounded shadow-sm border-t-4 border-gold text-center space-y-3">
              <div className="text-3xl">⚖️</div>
              <h3 className="font-serif font-bold text-navy text-base leading-tight">Criminal Lawyers' Association</h3>
              <p className="text-xs text-gray-500 font-light">Committed to preserving human rights and constitutional defense standards.</p>
            </div>

            <div className="bg-white p-6 rounded shadow-sm border-t-4 border-gold text-center space-y-3">
              <div className="text-3xl">🤝</div>
              <h3 className="font-serif font-bold text-navy text-base leading-tight">JusticeNet</h3>
              <p className="text-xs text-gray-500 font-light">Supporting access to justice through reduced-rate legal programs.</p>
            </div>

            <div className="bg-white p-6 rounded shadow-sm border-t-4 border-gold text-center space-y-3">
              <div className="text-3xl">🏥</div>
              <h3 className="font-serif font-bold text-navy text-base leading-tight">Legal Aid Ontario</h3>
              <p className="text-xs text-gray-500 font-light">Registered panel member accepting family and criminal legal aid certificates.</p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Russian Speaking Spotlight */}
      <section className="bg-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(201,168,76,0.06),transparent_60%)]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold px-3.5 py-1 rounded text-xs font-semibold uppercase tracking-wider">
            <Globe className="h-4 w-4" />
            <span>Fluent Bilingual Counsel</span>
          </div>
          
          <h2 className="font-serif text-3xl font-bold">Говорите по-русски?</h2>
          <p className="text-lg text-gold font-light italic">Мы говорим на Вашем языке и защищаем Ваши права в суде.</p>
          
          <p className="text-gray-300 font-light leading-relaxed text-sm max-w-2xl mx-auto">
            Dimitri Trofimoff provides complete legal counseling in fluent Russian. If you require legal documents drafted in English but prefer to communicate details, history, and goals in Russian, Dimitri guarantees fluent counsel without any translation fees.
          </p>

          <div className="pt-2">
            <a 
              href={`tel:${FIRM_INFO.tollFree}`} 
              className="inline-block bg-gold hover:bg-gold-light text-navy-dark px-8 py-3 rounded font-bold transition-all shadow"
            >
              Call Us: {FIRM_INFO.tollFree}
            </a>
          </div>
        </div>
      </section>

      {/* 5. Philosophy / CTA */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-dark block">Firm Core Philosophy</span>
          <h2 className="font-serif text-3xl font-bold text-navy">"Down to Earth. Committed to Legal Excellence."</h2>
          <div className="h-1 w-12 bg-gold mx-auto"></div>
          <p className="text-gray-600 font-light text-sm max-w-2xl mx-auto leading-relaxed">
            Every legal challenge can be managed with structured counsel. Let us assume the legal burden while you focus on rebuilding stability. Click below to book a free initial strategy consultation with Dimitri.
          </p>
          
          <div className="pt-4">
            <a 
              href={FIRM_INFO.googleCalendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark text-white px-8 py-4 rounded font-bold shadow-md transition-colors text-base"
              id="about-consultation-btn"
            >
              <Calendar className="h-5 w-5 text-gold shrink-0" />
              <span>Book consultation with Dimitri</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
