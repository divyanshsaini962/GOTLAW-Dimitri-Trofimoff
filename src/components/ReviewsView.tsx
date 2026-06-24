import React from 'react';
import { Star, MessageSquare, Plus, ExternalLink, Calendar, Phone } from 'lucide-react';
import { FIRM_INFO, REVIEWS_DATA } from '../data';

export default function ReviewsView() {
  // We have 7 reviews in REVIEWS_DATA.
  // We want to highlight Glenn Sandberg's recommendation separately or style it beautifully.
  const professionalEndorsements = REVIEWS_DATA.filter(r => r.source === 'Professional');
  const clientReviews = REVIEWS_DATA.filter(r => r.source !== 'Professional');

  return (
    <div id="reviews-view" className="animate-fade-in text-charcoal">
      
      {/* 1. Hero Section */}
      <section className="bg-navy text-white py-16 lg:py-24 border-b border-gold/15 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.08),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-2">Client Endorsements & Peer Trust</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Client Reviews — ⭐ 4.8/5 | 34+ Reviews
            </h1>
            <p className="text-lg text-gray-300 font-light leading-relaxed">
              Dimitri Trofimoff is highly regarded by his clients and peers for his diligence, professional demeanor, and practical legal guidance in Ottawa and across Eastern Ontario.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Rating Badges Section */}
      <section className="bg-warm-grey py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            
            {/* Google Badge */}
            <div className="bg-white p-6 rounded shadow-sm border border-gray-200 text-center space-y-2">
              <div className="font-serif font-bold text-navy text-base">Google Ratings</div>
              <div className="flex justify-center text-gold gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <div className="text-2xl font-bold text-navy">5.0 / 5.0</div>
              <p className="text-xs text-gray-500 font-light">Verified Local Business Rating</p>
            </div>

            {/* LawyerRatingz Badge */}
            <div className="bg-white p-6 rounded shadow-sm border border-gray-200 text-center space-y-2">
              <div className="font-serif font-bold text-navy text-base">LawyerRatingz</div>
              <div className="flex justify-center text-gold gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <div className="text-2xl font-bold text-navy">4.8 / 5.0</div>
              <p className="text-xs text-gray-500 font-light">Based on 34+ Client Evaluations</p>
            </div>

            {/* Alignable Badge */}
            <div className="bg-white p-6 rounded shadow-sm border border-gray-200 text-center space-y-2">
              <div className="font-serif font-bold text-navy text-base">Alignable Network</div>
              <div className="flex justify-center text-gold gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <div className="text-2xl font-bold text-navy">Highly Recommended</div>
              <p className="text-xs text-gray-500 font-light">Peer Network Endorsement</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Peer / Professional Endorsements (Featuring Glenn Sandberg) */}
      <section className="bg-navy text-white py-20 border-b border-gold/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold text-gold tracking-widest">Professional Recommendation</span>
            <h2 className="font-serif text-3xl font-bold">Respected by Fellow Members</h2>
            <div className="h-1 w-12 bg-gold mx-auto mt-2"></div>
          </div>

          {professionalEndorsements.map((endorsement) => (
            <div 
              key={endorsement.id}
              className="bg-navy-light/40 border border-gold/20 p-8 rounded shadow-lg relative"
            >
              <div className="absolute top-4 right-4 bg-gold text-navy-dark text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">
                Peer Endorsement
              </div>
              <div className="flex gap-1 text-gold mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4.5 w-4.5 fill-gold text-gold" />
                ))}
              </div>
              
              <blockquote className="text-base sm:text-lg text-gray-200 font-serif italic leading-relaxed mb-6">
                "{endorsement.text}"
              </blockquote>
              
              <div className="border-t border-gray-700/60 pt-4 flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div>
                  <p className="font-serif font-bold text-gold text-base">{endorsement.author}</p>
                  <p className="text-xs text-gray-400 font-light">{endorsement.title}</p>
                </div>
                <span className="text-xs bg-navy-light border border-gold/15 px-3 py-1 rounded font-medium text-gray-300">
                  Verified Legal Peer Certification
                </span>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* 4. Client Review Cards Grid (All client cards formatted nicely with gold stars, dark navy card style) */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">
              Verified Client Testimonials
            </h2>
            <div className="h-1 w-16 bg-gold mx-auto mb-6"></div>
            <p className="text-gray-600 font-light text-sm">
              Read real accounts of how Dimitri Trofimoff helped individuals, business owners, and families navigate critical legal hurdles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="reviews-grid">
            {clientReviews.map((review) => (
              <div 
                key={review.id} 
                className="bg-navy-dark text-white p-8 rounded shadow-md hover:shadow-lg border border-gold/10 transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-gold mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  {review.title && (
                    <h3 className="font-serif font-bold text-white text-lg mb-3">"{review.title}"</h3>
                  )}
                  <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed italic mb-6">
                    "{review.text}"
                  </p>
                </div>
                
                <div className="border-t border-gray-800 pt-4 flex items-center justify-between text-xs text-gray-400">
                  <div>
                    <span className="font-semibold block text-gray-200">{review.author}</span>
                    {review.date && <span className="text-[10px] text-gray-500 font-light">{review.date}</span>}
                  </div>
                  <span className="bg-navy px-2 py-0.5 rounded border border-gold/15 text-[10px] text-gold font-medium">
                    {review.source} Verified
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Leave a review button */}
          <div className="text-center mt-16" id="leave-review-section">
            <p className="text-sm text-gray-500 font-light mb-4">Were you a client of Dimitri Trofimoff?</p>
            <a 
              href={`https://${FIRM_INFO.facebook}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-navy hover:bg-navy hover:text-white text-navy px-6 py-3 rounded font-bold transition-all text-sm shadow-sm"
            >
              <Plus className="h-4.5 w-4.5" />
              <span>Leave a Review on Facebook / Google</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* 5. Consultation Booking CTA */}
      <section className="bg-navy text-white py-16 text-center border-t border-gold/15">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-3xl font-bold text-gold">Ready to Secure Your Rights?</h2>
          <p className="text-sm text-gray-300 font-light leading-relaxed max-w-xl mx-auto">
            Get down-to-earth support from Dimitri Trofimoff. Schedule a completely private family or criminal law defense consultation today.
          </p>
          <div className="flex justify-center gap-4 flex-wrap pt-2">
            <a 
              href={FIRM_INFO.googleCalendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-navy-dark px-8 py-3.5 rounded font-bold shadow transition-all flex items-center gap-2"
              id="reviews-book-cta"
            >
              <Calendar className="h-4.5 w-4.5" />
              Book Online Consultation
            </a>
            <a 
              href={`tel:${FIRM_INFO.tollFree}`}
              className="bg-navy-light hover:bg-navy-light/80 border border-gold/30 text-white px-8 py-3.5 rounded font-bold transition-all flex items-center gap-2"
              id="reviews-call-cta"
            >
              <Phone className="h-4.5 w-4.5 text-gold" />
              <span>Call Toll-Free: {FIRM_INFO.tollFree}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
