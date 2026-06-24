import React from 'react';
import { Shield, CheckCircle, Scale, Phone, Calendar, ArrowRight, Star, MapPin, Globe, Award, MessageSquare } from 'lucide-react';
import { ActivePage } from '../types';
import { FIRM_INFO, REVIEWS_DATA, OFFICE_LOCATIONS } from '../data';

interface HomeViewProps {
  setActivePage: (page: ActivePage) => void;
}

export default function HomeView({ setActivePage }: HomeViewProps) {
  const handleLearnMore = (page: ActivePage) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = page;
  };

  const homeReviews = REVIEWS_DATA.slice(0, 3);

  return (
    <div id="home-view" className="animate-fade-in">
      
      {/* 1. Hero Section */}
      <section 
        id="home-hero" 
        className="relative bg-navy text-white overflow-hidden py-16 lg:py-24 border-b border-gold/15"
      >
        {/* Subtle geometric background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.12),transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column (Copy and actions) */}
            <div className="lg:col-span-7">
              {/* Serving Badge */}
              <div className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/40 text-gold px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 animate-pulse">
                <MapPin className="h-3.5 w-3.5" />
                <span>Serving Ottawa, Kanata, Perth & Surrounding Areas</span>
              </div>

              {/* Headline & Subheadline */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
                Ottawa's Trusted <br />
                <span className="text-gold">Family & Criminal Law</span> Lawyer
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-300 font-light max-w-2xl leading-relaxed mb-8">
                {FIRM_INFO.tagline}
              </p>

              {/* Two Call-to-Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a 
                  href={FIRM_INFO.googleCalendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold hover:bg-gold-light text-navy-dark px-8 py-4 rounded font-bold text-center tracking-wide shadow-lg hover:shadow-gold/20 transition-all duration-200 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-base shrink-0"
                  id="hero-book-btn"
                >
                  <Calendar className="h-5 w-5" />
                  Book Free Consultation
                </a>
                <a 
                  href={`tel:${FIRM_INFO.tollFree}`}
                  className="bg-navy-light hover:bg-navy-light/80 text-white border border-gold/50 hover:border-gold px-8 py-4 rounded font-bold text-center tracking-wide transition-all duration-200 flex items-center justify-center gap-2 text-base shrink-0"
                  id="hero-call-btn"
                >
                  <Phone className="h-5 w-5 text-gold" />
                  <span>Call Now: {FIRM_INFO.tollFree}</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="border-t border-gray-700/60 pt-8" id="hero-trust-badges">
                <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-4">Credentials & Memberships</p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                  <div className="flex items-center gap-2 text-gray-200">
                    <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                    <span>Law Society of Ontario Member</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-200">
                    <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                    <span>Criminal Lawyers' Association</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-200">
                    <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                    <span>Legal Aid Ontario Accepted</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-200">
                    <CheckCircle className="h-4 w-4 text-gold shrink-0" />
                    <span>English & Russian Speaking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column (Hero Photo with border accents) */}
            <div className="lg:col-span-5 relative group mt-8 lg:mt-0" id="hero-image-container">
              <div className="absolute inset-0 bg-gold rounded-lg transform translate-x-3 translate-y-3 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Ottawa Courtroom and Scales of Justice — Dimitri Trofimoff Lawyer" 
                className="rounded-lg shadow-xl border border-gray-700/50 object-cover w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-square"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      </section>

      {/* 2. Practice Areas Section */}
      <section id="practice-areas-section" className="bg-navy-dark text-white py-24 border-b border-gold/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              Dedicated Practice Areas
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-300 font-light leading-relaxed">
              Dimitri Trofimoff provides highly competent and compassionate representation, keeping you informed at every stage of the legal process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Criminal Law */}
            <div 
              id="practice-card-criminal"
              className="bg-navy-light/50 border border-gold/15 rounded overflow-hidden hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&q=80&w=600&h=350"
                  alt="Criminal Law Defence Ottawa"
                  className="w-full h-48 object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="p-8 pb-0">
                  <div className="text-4xl mb-4 bg-gold/10 w-14 h-14 rounded-full flex items-center justify-center border border-gold/25">
                    ⚖️
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">
                    Criminal Law & Defence
                  </h3>
                  <p className="text-gray-300 font-light leading-relaxed mb-6 text-sm">
                    Full spectrum of representation from police interaction and bail hearings to prosecution negotiations and trial representation.
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <button 
                  onClick={() => handleLearnMore('criminal')}
                  className="text-gold font-semibold inline-flex items-center gap-1.5 hover:text-white transition-colors self-start group/btn text-sm"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 2: Family Law */}
            <div 
              id="practice-card-family"
              className="bg-navy-light/50 border border-gold/15 rounded overflow-hidden hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=600&h=350"
                  alt="Family Law & Separation Ottawa"
                  className="w-full h-48 object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="p-8 pb-0">
                  <div className="text-4xl mb-4 bg-gold/10 w-14 h-14 rounded-full flex items-center justify-center border border-gold/25">
                    👨‍👩‍👧
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">
                    Family Law & Divorce
                  </h3>
                  <p className="text-gray-300 font-light leading-relaxed mb-6 text-sm">
                    Result-oriented family law representation including divorce, legal separation, child custody, and complex property division.
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <button 
                  onClick={() => handleLearnMore('family')}
                  className="text-gold font-semibold inline-flex items-center gap-1.5 hover:text-white transition-colors self-start group/btn text-sm"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 3: Notary Services */}
            <div 
              id="practice-card-notary"
              className="bg-navy-light/50 border border-gold/15 rounded overflow-hidden hover:border-gold/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=600&h=350"
                  alt="Notary Services Ottawa"
                  className="w-full h-48 object-cover filter brightness-90 group-hover:brightness-100 transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="p-8 pb-0">
                  <div className="text-4xl mb-4 bg-gold/10 w-14 h-14 rounded-full flex items-center justify-center border border-gold/25">
                    📋
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors">
                    Notary Services
                  </h3>
                  <p className="text-gray-300 font-light leading-relaxed mb-6 text-sm">
                    Quick and accessible notary services including copies certification, witnessing signatures, commissioning oaths, and travel letters.
                  </p>
                </div>
              </div>
              <div className="p-8 pt-0 mt-auto">
                <button 
                  onClick={() => handleLearnMore('notary')}
                  className="text-gold font-semibold inline-flex items-center gap-1.5 hover:text-white transition-colors self-start group/btn text-sm"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. About Snapshot Section */}
      <section id="about-snapshot-section" className="bg-white py-24 text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Headshot Image */}
            <div className="lg:col-span-5" id="about-snapshot-image-container">
              <div className="relative group">
                <div className="absolute inset-0 bg-gold rounded-lg transform translate-x-3 translate-y-3 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600&h=600" 
                  alt="Dimitri Trofimoff - Barrister & Solicitor" 
                  className="rounded-lg shadow-xl border border-gray-200 object-cover w-full aspect-square"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Content Details */}
            <div className="lg:col-span-7 space-y-6" id="about-snapshot-content">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-dark block">Meet Your Advocate</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-2">
                Down to Earth Ottawa Lawyer. <br />
                <span className="text-gold-dark">Serious Results.</span>
              </h2>
              <div className="h-1 w-16 bg-gold mb-6"></div>
              
              <p className="text-gray-700 leading-relaxed font-light">
                Dimitri Trofimoff is a dedicated family and criminal law lawyer based in Ottawa, Ontario. With a diverse educational background spanning Russia, England, and Ontario, he brings a highly valued global perspective to his Ottawa practice.
              </p>
              
              <p className="text-gray-700 leading-relaxed font-light">
                As a former Ontario probation and parole officer, Dimitri has deep practical, hands-on experience handling complex family conflict and criminal justice proceedings. He understands the mechanics behind court-ordered resolutions and is dedicated to guiding you with absolute clarity.
              </p>

              {/* Mini Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                <div className="space-y-1">
                  <span className="text-xs uppercase font-semibold text-gray-400 block">Education Background</span>
                  <p className="text-sm font-semibold text-navy">Russia | England | Ontario (Canada)</p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs uppercase font-semibold text-gray-400 block">Prior Professional Role</span>
                  <p className="text-sm font-semibold text-navy">Former Probation & Parole Officer</p>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  onClick={() => handleLearnMore('about')}
                  className="inline-flex items-center gap-2 font-bold text-navy hover:text-gold-dark transition-colors group text-base"
                >
                  <span>Meet Dimitri & Read Full Bio</span>
                  <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Stats Strip (Navy BG, Gold Numbers) */}
      <section id="stats-strip" className="bg-navy text-white py-14 border-y border-gold/15 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(201,168,76,0.05),transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            
            <div className="space-y-2">
              <div className="text-gold text-4xl sm:text-5xl font-serif font-bold">3</div>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-300 font-light">Convenient Locations</p>
            </div>
            
            <div className="space-y-2">
              <div className="text-gold text-4xl sm:text-5xl font-serif font-bold">2</div>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-300 font-light">Bilingual (English / Russian)</p>
            </div>

            <div className="space-y-2">
              <div className="text-gold text-4xl sm:text-5xl font-serif font-bold">24/7</div>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-300 font-light">Toll-Free Emergency Access</p>
            </div>

            <div className="space-y-2">
              <div className="text-gold text-4xl sm:text-5xl font-serif font-bold">LSO</div>
              <p className="text-xs sm:text-sm uppercase tracking-wider text-gray-300 font-light">Law Society of Ontario Member</p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Client Reviews Section */}
      <section id="client-reviews-section" className="bg-navy-dark py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-2">Testimonials</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                What Our Clients Say
              </h2>
              <div className="h-1 w-16 bg-gold mt-4 mb-2"></div>
              <p className="text-gray-300 text-sm font-light mt-1">
                ⭐ 4.8 / 5 Rating on LawyerRatingz | 5.0 Google Rating
              </p>
            </div>
            <button 
              onClick={() => handleLearnMore('reviews')}
              className="text-gold font-semibold inline-flex items-center gap-1.5 hover:text-white transition-colors group text-sm shrink-0"
            >
              <span>See all reviews</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeReviews.map((review) => (
              <div 
                key={review.id} 
                className="bg-navy-light/50 border border-gold/10 p-8 rounded flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-gold mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  {review.title && (
                    <h4 className="font-serif text-lg font-bold text-white mb-2">"{review.title}"</h4>
                  )}
                  <p className="text-gray-300 text-sm font-light leading-relaxed italic mb-6">
                    "{review.text}"
                  </p>
                </div>
                <div className="border-t border-gray-700/60 pt-4 flex items-center justify-between text-xs text-gray-400">
                  <span className="font-semibold text-gray-200">{review.author}</span>
                  <span className="bg-navy-light px-2 py-0.5 rounded border border-gold/10 text-[10px] text-gold font-medium">
                    Verified {review.source}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Locations Section (with active map embed) */}
      <section id="home-locations" className="bg-warm-grey py-24 text-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-dark block mb-2">Locations</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-navy mb-4">
              3 Convenient Locations & Virtual Meetings
            </h2>
            <div className="h-1 w-20 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 font-light leading-relaxed">
              We travel to serve clients across Eastern Ontario, and support secure video and phone consultations for ultimate convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* List of Locations */}
            <div className="lg:col-span-5 space-y-6" id="locations-list">
              
              <div className="bg-white p-6 rounded shadow-sm border-l-4 border-gold">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark block mb-1">Primary Office</span>
                <h3 className="font-serif text-xl font-bold text-navy mb-2">Ottawa / Kanata</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  430 Hazeldean Rd Unit 6, <br />
                  Ottawa, ON K2L 1T9
                </p>
                <span className="text-xs bg-navy/5 text-navy px-2.5 py-1 rounded font-medium inline-block border border-navy/10">
                  📍 Main Office Boardroom
                </span>
              </div>

              <div className="bg-white p-6 rounded shadow-sm border-l-4 border-gray-400">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">By Appointment Only</span>
                <h3 className="font-serif text-xl font-bold text-navy mb-2">Perth</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Perth, ON
                </p>
                <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded font-medium inline-block border border-gray-200">
                  Meeting Spaces Available
                </span>
              </div>

              <div className="bg-white p-6 rounded shadow-sm border-l-4 border-gray-400">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">By Appointment Only</span>
                <h3 className="font-serif text-xl font-bold text-navy mb-2">Brockville</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Brockville, ON
                </p>
                <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded font-medium inline-block border border-gray-200">
                  Meeting Spaces Available
                </span>
              </div>

              <div className="bg-navy text-white p-6 rounded shadow">
                <h4 className="font-serif text-lg font-bold text-gold mb-2">💻 Secure Virtual Consultations</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  We leverage encrypted, fully compliant Zoom, Google Meet, and teleconference platforms to meet with clients province-wide.
                </p>
              </div>

            </div>

            {/* Google Map Embed */}
            <div className="lg:col-span-7" id="locations-map">
              <div className="bg-white p-2 rounded shadow-md border border-gray-200 w-full h-full min-h-[400px]">
                <iframe
                  title="Gotlaw Dimitri Trofimoff Ottawa Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.819213813636!2d-75.9036888!3d45.2977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd200ecf85bc1f1%3A0xe54e2c9ef89196b0!2s430%20Hazeldean%20Rd%20Unit%206%2C%20Kanata%2C%20ON%20K2L%201T9!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded"
                  id="google-maps-iframe"
                ></iframe>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Russian Speaking Section */}
      <section id="russian-speaking-section" className="bg-navy text-white py-20 relative overflow-hidden border-t border-gold/15">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.08),transparent_70%)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/40 text-gold px-4 py-2 rounded mb-6 text-sm font-semibold">
            <Globe className="h-4 w-4" />
            <span>Русскоязычный Адвокат в Оттаве</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-white mb-4">
            Говорите по-русски? Мы тоже.
          </h2>
          <p className="text-xl text-gold font-serif mb-6 italic">
            "Do you speak Russian? So do we."
          </p>
          
          <p className="text-gray-300 font-light max-w-2xl mx-auto leading-relaxed mb-8">
            Dimitri Trofimoff provides fully bilingual legal representation in both English and Russian. Avoid any translation hurdles and discuss your complex criminal defence or family matter directly with your advocate in your native language.
          </p>

          <a 
            href={`tel:${FIRM_INFO.tollFree}`}
            className="inline-flex items-center gap-2.5 bg-gold hover:bg-gold-light text-navy-dark px-8 py-4 rounded font-bold tracking-wide shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
            id="russian-call-cta"
          >
            <Phone className="h-5 w-5 shrink-0" />
            <span>Call us in Russian: {FIRM_INFO.tollFree}</span>
          </a>

        </div>
      </section>

      {/* 8. Final CTA Banner (Gold BG) */}
      <section id="final-cta-banner" className="bg-gradient-to-r from-gold via-gold-light to-gold-dark text-navy-dark py-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-navy">
            Need Legal Help? Talk to Dimitri Today.
          </h2>
          <p className="text-navy/85 max-w-2xl mx-auto font-medium mb-8">
            Take the first step towards securing your rights and peace of mind. Request a free, fully confidential consultation or dial toll-free immediately.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={FIRM_INFO.googleCalendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy hover:bg-navy-dark text-white px-8 py-4 rounded font-bold shadow-md transition-colors text-center"
              id="footer-cta-book"
            >
              Book Online Consultation
            </a>
            <a 
              href={`tel:${FIRM_INFO.tollFree}`}
              className="bg-white/90 hover:bg-white text-navy-dark border border-navy/20 px-8 py-4 rounded font-bold shadow-md transition-colors text-center flex items-center justify-center gap-2"
              id="footer-cta-call"
            >
              <Phone className="h-5 w-5 text-gold-dark shrink-0" />
              <span>Call Toll-Free: {FIRM_INFO.tollFree}</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
