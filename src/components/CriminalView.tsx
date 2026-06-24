import React from 'react';
import { Phone, Shield, ShieldCheck, AlertCircle, PlayCircle, HelpCircle, Calendar, DollarSign } from 'lucide-react';
import { FIRM_INFO, CRIMINAL_WHY_CHOOSE } from '../data';

export default function CriminalView() {
  const criminalServices = [
    { title: "Police Interaction & Rights Advice", desc: "Immediate legal guidance during arrests or police questioning to prevent self-incrimination." },
    { title: "Bail Hearings (Emergency Same-Day)", desc: "Swift action to secure your release or release of your loved one from custody." },
    { title: "Negotiation with Crown Prosecutors", desc: "Diligent dialogue to seek charge withdrawal, diversion, or reduced sentencing options." },
    { title: "Judicial Pre-Trials (JPT)", desc: "Structured resolution discussions with a Judge and Prosecutor to advance your case strategy." },
    { title: "Full Trial Representation", desc: "Rigorous advocacy in the courtroom, challenging evidence, and cross-examining witnesses." },
    { title: "DUI / Impaired Driving Defence", desc: "Challenging breathalyzer readings, roadside testing procedures, and charter violations." },
    { title: "Domestic Violence Charges", desc: "Managing delicate allegations while aiming to resolve bail conditions and protect family units." },
    { title: "Drug Offences", desc: "Defending simple possession, trafficking, or importing charges with strict adherence to constitutional rights." },
    { title: "Assault Charges", desc: "Advocating self-defence, consent, or factual disputes in simple, domestic, or aggravated assault allegations." },
    { title: "Theft & Fraud", desc: "Providing effective legal representation for shoplifting, white-collar embezzlement, and commercial fraud charges." },
  ];

  const steps = [
    { number: "01", title: "Immediate Emergency Call", desc: "Dial 1.888.511.9118 at any hour. Speak with our office or leave an urgent message to secure immediate legal advice." },
    { number: "02", title: "In-Depth Case Consultation", desc: "Dimitri conducts a comprehensive review of your charges, police synopsis, and personal background to map out your initial options." },
    { number: "03", title: "Strategic Disclosure Analysis", desc: "We request, obtain, and meticulously review all crown disclosure (police notes, body cams, statements) to spot critical weaknesses." },
    { number: "04", title: "Fearless Court Representation", desc: "Whether negotiating a complete withdrawal, conducting judicial pre-trials, or advocating for you at trial, we stand firmly by your side." },
  ];

  return (
    <div id="criminal-view" className="animate-fade-in text-charcoal">
      
      {/* 1. Hero Header */}
      <section className="bg-navy text-white py-16 lg:py-20 border-b border-gold/15 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,168,76,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (Copy) */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-2">Legal Defense Services</span>
              <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-4">
                Criminal Defence Lawyer Ottawa
              </h1>
              <p className="text-lg text-gray-300 font-light leading-relaxed">
                If you or a loved one has been arrested, time is of the essence. Dimitri Trofimoff delivers aggressive, knowledgeable, and reliable criminal defence representation across Eastern Ontario.
              </p>
            </div>

            {/* Right Column (Courtroom Image) */}
            <div className="lg:col-span-5 relative group" id="criminal-hero-image-container">
              <div className="absolute inset-0 bg-gold rounded-lg transform translate-x-3 translate-y-3 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Ottawa Courtroom Defence - Dimitri Trofimoff Lawyer" 
                className="rounded-lg shadow-xl border border-gray-700/50 object-cover w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-square"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Criminal Page Emergency Strip */}
      <section className="bg-red-800 text-white py-4 px-4 border-y border-red-900 shadow">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <AlertCircle className="h-6 w-6 text-gold shrink-0 animate-bounce" />
            <div>
              <span className="font-bold text-base block">ARRESTED? FACING CRIMINAL CHARGES?</span>
              <span className="text-xs text-red-100 font-light">Do not make statements to police without consulting Dimitri Trofimoff first.</span>
            </div>
          </div>
          <a 
            href={`tel:${FIRM_INFO.tollFree}`}
            className="bg-white text-red-800 hover:bg-gold hover:text-navy-dark px-6 py-2.5 rounded font-bold tracking-wider transition-all shadow text-sm shrink-0"
          >
            CALL IMMEDIATELY: {FIRM_INFO.tollFree}
          </a>
        </div>
      </section>

      {/* 3. Services Grid */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">
              Comprehensive Criminal Defence Services
            </h2>
            <div className="h-1 w-16 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 font-light text-sm">
              We guide you through the complex Ontario criminal justice system with absolute transparency and strategic precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {criminalServices.map((service, i) => (
              <div 
                key={i} 
                className="bg-warm-grey/50 p-6 rounded border border-gray-200/60 hover:border-gold/40 transition-colors shadow-sm flex gap-4"
              >
                <div className="text-gold-dark mt-1">
                  <Shield className="h-5 w-5 shrink-0" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-navy text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Why Choose Dimitri block (Focus on Probation Background) */}
      <section className="bg-navy-dark text-white py-24 border-y border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gold">The Gotlaw Difference</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                Why Dimitri Trofimoff is Your Strategic Asset
              </h2>
              <div className="h-1 w-16 bg-gold mt-4 mb-6"></div>
              <p className="text-gray-300 font-light leading-relaxed">
                As a former Ontario probation and parole officer, Dimitri possesses deep practical knowledge of how courts, police departments, and correctional institutions operate. This background provides unique, highly structured insights into prosecution strategies, pre-sentence report preparations, and bail compliance checks.
              </p>
            </div>

            <div className="lg:col-span-7 bg-navy-light/40 border border-gold/15 rounded p-8 space-y-6">
              <h3 className="font-serif text-xl font-bold text-gold">Strategic Representation Points</h3>
              <ul className="space-y-4">
                {CRIMINAL_WHY_CHOOSE.map((point, index) => {
                  const [title, desc] = point.split(": ");
                  return (
                    <li key={index} className="flex gap-3 items-start">
                      <ShieldCheck className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">{title}</strong>
                        <span className="text-sm text-gray-300 font-light leading-relaxed">{desc}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Defense Process Timeline */}
      <section className="bg-warm-grey py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">
              Our Strategic Defence Process
            </h2>
            <div className="h-1 w-16 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 font-light text-sm">
              We break down your defense journey into structured, transparent milestones so you are never left guessing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="bg-white p-6 rounded shadow-sm border border-gray-100 relative group">
                <div className="text-4xl font-serif font-bold text-gold-light/40 mb-4 group-hover:text-gold transition-colors duration-300">
                  {step.number}
                </div>
                <h3 className="font-serif font-bold text-navy text-lg mb-2">{step.title}</h3>
                <p className="text-xs text-gray-600 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Pricing block */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex p-3 bg-gold/10 rounded-full text-gold-dark mb-2">
            <DollarSign className="h-6 w-6" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-navy">
            Transparent Case Pricing
          </h2>
          <div className="h-1 w-12 bg-gold mx-auto mb-4"></div>
          <p className="text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            We operate with straightforward block-fee billing structure. Upfront quotes ensure you can manage your defense resources without unexpected bills.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mt-8">
            <div className="bg-warm-grey p-5 rounded border border-gray-200">
              <span className="text-xs uppercase font-bold tracking-wider text-gray-400 block mb-1">Detailed Case Review</span>
              <p className="text-2xl font-serif font-bold text-navy">From $1,500</p>
              <span className="text-xs text-gray-500 font-light">Includes full disclosure request and evaluation</span>
            </div>
            <div className="bg-warm-grey p-5 rounded border border-gray-200">
              <span className="text-xs uppercase font-bold tracking-wider text-gray-400 block mb-1">Urgent Bail Hearings</span>
              <p className="text-2xl font-serif font-bold text-navy">$500 – $2,500</p>
              <span className="text-xs text-gray-500 font-light">Price varies depending on preparation and court hours</span>
            </div>
          </div>
          
          <p className="text-xs text-gray-400 italic">
            *All rates are estimates. Personalized block-fees are outlined during your initial consult.
          </p>
        </div>
      </section>

      {/* 7. CTA block */}
      <section className="bg-navy text-white py-16 text-center border-t border-gold/15">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gold">Available 24/7 for Jail & Police Advice</h2>
          <p className="text-sm text-gray-300 font-light leading-relaxed max-w-xl mx-auto">
            Secure aggressive representation today. Dial our toll-free hotline or use our Google Calendar scheduler to reserve a secure consultation slot.
          </p>
          <div className="flex justify-center gap-4 flex-wrap pt-2">
            <a 
              href={`tel:${FIRM_INFO.tollFree}`}
              className="bg-gold hover:bg-gold-light text-navy-dark px-6 py-3 rounded font-bold transition-all flex items-center gap-2 shadow"
            >
              <Phone className="h-4.5 w-4.5" />
              Call Now: {FIRM_INFO.tollFree}
            </a>
            <a 
              href={FIRM_INFO.googleCalendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-light hover:bg-navy-light/80 border border-gold/40 text-white px-6 py-3 rounded font-bold transition-colors"
            >
              Book Online Consultation
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
