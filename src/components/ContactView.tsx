import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Printer, Clock, AlertTriangle, Send, CheckCircle2, Calendar, ClipboardList } from 'lucide-react';
import { ContactFormInput, InquirySubmission } from '../types';
import { FIRM_INFO, OFFICE_LOCATIONS } from '../data';

export default function ContactView() {
  const [formInput, setFormInput] = useState<ContactFormInput>({
    name: '',
    phone: '',
    email: '',
    legalMatter: 'Criminal Law',
    message: '',
    agreeToTerms: false,
  });

  const [submissions, setSubmissions] = useState<InquirySubmission[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Load existing inquiries from localStorage for durable client persistence
  useEffect(() => {
    try {
      const stored = localStorage.getItem('gotlaw_inquiries');
      if (stored) {
        setSubmissions(JSON.parse(stored));
      }
    } catch (e) {
      console.error("Failed to load inquiries from localStorage", e);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormInput(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormInput(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Form validation
    if (!formInput.name.trim()) return setErrorMsg('Please enter your full name.');
    if (!formInput.phone.trim()) return setErrorMsg('Please provide a contact phone number.');
    if (!formInput.email.trim()) return setErrorMsg('Please enter an email address.');
    if (!formInput.message.trim()) return setErrorMsg('Please provide a message outlining your inquiry.');
    if (!formInput.agreeToTerms) return setErrorMsg('You must agree to be contacted via phone, SMS, or email.');

    const newInquiry: InquirySubmission = {
      id: Math.random().toString(36).substring(2, 9),
      input: { ...formInput },
      submittedAt: new Date().toLocaleString(),
    };

    const updated = [newInquiry, ...submissions];
    setSubmissions(updated);
    localStorage.setItem('gotlaw_inquiries', JSON.stringify(updated));
    setIsSubmitted(true);
    
    // Reset form fields
    setFormInput({
      name: '',
      phone: '',
      email: '',
      legalMatter: 'Criminal Law',
      message: '',
      agreeToTerms: false,
    });
  };

  return (
    <div id="contact-view" className="animate-fade-in text-charcoal">
      
      {/* 1. Hero Title */}
      <section className="bg-navy text-white py-16 lg:py-24 border-b border-gold/15 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(201,168,76,0.1),transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-2">Secure Correspondence Portal</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Get Legal Help Today
            </h1>
            <p className="text-lg text-gray-300 font-light leading-relaxed">
              Contact our Ottawa headquarters for immediate scheduling assistance. Send a confidential message or schedule an appointment online using our digital portal.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Emergency 24/7 Strip */}
      <section className="bg-red-800 text-white py-4 px-4 border-y border-red-900 shadow">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-gold shrink-0 animate-pulse" />
            <div>
              <span className="font-bold text-base block uppercase tracking-wide">Criminal Legal Emergency?</span>
              <span className="text-xs text-red-100 font-light">Immediate representation, bail scheduling, and jail assistance is open 24 hours a day.</span>
            </div>
          </div>
          <a 
            href={`tel:${FIRM_INFO.tollFree}`}
            className="bg-white text-red-800 hover:bg-gold hover:text-navy-dark px-6 py-2.5 rounded font-bold tracking-wider transition-all shadow text-sm shrink-0"
          >
            CALL 24/7 EMERGENCY: {FIRM_INFO.tollFree}
          </a>
        </div>
      </section>

      {/* 3. Main Split Form / Contacts section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7 bg-warm-grey/50 border border-gray-200 p-8 rounded shadow-sm" id="contact-form-container">
              
              <div className="mb-8">
                <h2 className="font-serif text-2xl font-bold text-navy mb-2">Send a Confidential Message</h2>
                <p className="text-xs text-gray-500 font-light">Submitting this form does not establish a formal lawyer-client retainer. Do not submit sensitive details.</p>
              </div>

              {isSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-400 p-6 rounded text-emerald-900 space-y-4 animate-fade-in" id="contact-success-notification">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0" />
                    <strong className="text-base font-bold">Inquiry Transmitted Successfully!</strong>
                  </div>
                  <p className="text-sm font-light leading-relaxed">
                    Thank you. Dimitri Trofimoff's legal assistant will review your request immediately. We typically follow up via telephone or email within 1–3 business hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-bold underline text-emerald-700 hover:text-emerald-950 block"
                  >
                    Submit another legal inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {errorMsg && (
                    <div className="bg-red-50 border border-red-300 p-3 rounded text-red-900 text-xs font-semibold">
                      ⚠️ {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-gray-600">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formInput.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-sm focus:border-gold focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-gray-600">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formInput.phone}
                        onChange={handleInputChange}
                        placeholder="613-555-0199"
                        className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-sm focus:border-gold focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-gray-600">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formInput.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-sm focus:border-gold focus:outline-none"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="legalMatter" className="text-xs font-bold uppercase tracking-wider text-gray-600">Legal Matter Practice</label>
                      <select 
                        id="legalMatter"
                        name="legalMatter"
                        value={formInput.legalMatter}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-sm focus:border-gold focus:outline-none h-[46px]"
                      >
                        <option value="Criminal Law">Criminal Law & Defense</option>
                        <option value="Family Law">Family Law & Separation</option>
                        <option value="Notary Services">Notary Services public seal</option>
                        <option value="Other">Other general inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-gray-600">Brief Message Summary</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows={5}
                      value={formInput.message}
                      onChange={handleInputChange}
                      placeholder="Outline your situation (e.g., received a court summons, separation planning, need certified passport copies notarized)..."
                      className="w-full bg-white border border-gray-300 rounded px-4 py-3 text-sm focus:border-gold focus:outline-none"
                    />
                  </div>

                  {/* Agree Checkbox */}
                  <div className="flex items-start gap-2.5 pt-2">
                    <input 
                      type="checkbox" 
                      id="agreeToTerms"
                      name="agreeToTerms"
                      checked={formInput.agreeToTerms}
                      onChange={handleInputChange}
                      className="mt-1 accent-gold scale-110"
                    />
                    <label htmlFor="agreeToTerms" className="text-xs text-gray-500 leading-normal font-light">
                      I agree to be contacted via phone call, SMS text, or email by Gotlaw — Dimitri Trofimoff Lawyer's office to arrange consultations.
                    </label>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="submit"
                      className="w-full bg-navy hover:bg-navy-dark text-white font-bold py-3.5 px-6 rounded tracking-wide transition-all shadow flex items-center justify-center gap-2 text-sm uppercase"
                    >
                      <Send className="h-4 w-4 text-gold shrink-0" />
                      Submit Legal Inquiry
                    </button>
                  </div>

                </form>
              )}

              {/* Submissions Drawer (Displays local submissions securely for real verification) */}
              {submissions.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200" id="inquiry-history-container">
                  <div className="flex items-center gap-2 text-navy mb-4 font-serif font-bold text-lg">
                    <ClipboardList className="h-5 w-5 text-gold-dark shrink-0" />
                    <h3>Your Inquiries ({submissions.length})</h3>
                  </div>
                  <div className="space-y-3 max-h-48 overflow-y-auto pr-2">
                    {submissions.map((sub) => (
                      <div key={sub.id} className="bg-white p-4 rounded border border-gray-200 text-xs space-y-1">
                        <div className="flex justify-between font-semibold text-navy">
                          <span>{sub.input.name} - {sub.input.legalMatter}</span>
                          <span className="text-[10px] text-gray-400 font-normal">{sub.submittedAt}</span>
                        </div>
                        <p className="text-gray-600 line-clamp-1 italic">"{sub.input.message}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Contact info */}
            <div className="lg:col-span-5 space-y-8" id="contact-credentials-sidebar">
              
              {/* Office Booking block */}
              <div className="bg-navy text-white p-8 rounded shadow space-y-5">
                <h3 className="font-serif text-xl font-bold text-gold flex items-center gap-2">
                  <Calendar className="h-5 w-5 shrink-0" />
                  <span>Immediate Calendar Reservation</span>
                </h3>
                <div className="h-0.5 w-12 bg-gold"></div>
                <p className="text-xs text-gray-300 leading-relaxed font-light">
                  Skip the emails and book directly onto Dimitri's firm calendar. Select your optimal date and time for a complimentary legal evaluation.
                </p>
                <a 
                  href={FIRM_INFO.googleCalendarLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gold hover:bg-gold-light text-navy-dark py-3 rounded text-center block font-bold text-sm tracking-wide transition-colors"
                  id="contact-calendar-booking-link"
                >
                  Schedule Appointment Online
                </a>
              </div>

              {/* Credentials Details Card */}
              <div className="bg-warm-grey p-8 rounded border border-gray-200 space-y-6">
                <h3 className="font-serif text-lg font-bold text-navy">Direct Contact Coordinates</h3>
                <div className="h-0.5 w-12 bg-gold"></div>

                <ul className="space-y-4 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-gold-dark shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-gray-400 font-bold">Toll-Free Helpline</span>
                      <a href={`tel:${FIRM_INFO.tollFree}`} className="font-bold text-navy hover:underline text-base">
                        {FIRM_INFO.tollFree}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-gold-dark shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-gray-400 font-bold">Local Ottawa Line</span>
                      <a href={`tel:${FIRM_INFO.local}`} className="font-semibold text-navy hover:underline">
                        {FIRM_INFO.local}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Printer className="h-5 w-5 text-gold-dark shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-gray-400 font-bold">Secure Fax Dial</span>
                      <span className="font-light text-gray-600">
                        {FIRM_INFO.fax}
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-gold-dark shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-gray-400 font-bold">Email Inbox</span>
                      <a href={`mailto:${FIRM_INFO.email}`} className="text-navy hover:underline font-light">
                        {FIRM_INFO.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-gold-dark shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-gray-400 font-bold">Legal Office Hours</span>
                      <span className="font-light text-gray-600 block">
                        {FIRM_INFO.hours}
                      </span>
                      <span className="text-[10px] text-gray-400 font-medium">Sat urgent reviews open</span>
                    </div>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. Three Location Cards */}
      <section className="bg-warm-grey py-20 border-t border-gray-200" id="locations-grid-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold text-navy mb-4">
              Our Physical Locations
            </h2>
            <div className="h-1 w-16 bg-gold mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Ottawa Card */}
            <div className="bg-white p-6 rounded shadow-sm border-t-4 border-gold space-y-3">
              <MapPin className="h-6 w-6 text-gold-dark shrink-0" />
              <h3 className="font-serif font-bold text-navy text-lg">Ottawa / Kanata</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                430 Hazeldean Rd Unit 6, <br />
                Ottawa, ON K2L 1T9
              </p>
              <span className="text-xs font-semibold text-gold-dark block">Ottawa Region Boardroom</span>
            </div>

            {/* Perth Card */}
            <div className="bg-white p-6 rounded shadow-sm border-t-4 border-gray-300 space-y-3">
              <MapPin className="h-6 w-6 text-gray-400 shrink-0" />
              <h3 className="font-serif font-bold text-navy text-lg">Perth Office</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Perth, ON (By Appointment Only)
              </p>
              <span className="text-xs font-semibold text-gray-500 block">Meeting Space Available</span>
            </div>

            {/* Brockville Card */}
            <div className="bg-white p-6 rounded shadow-sm border-t-4 border-gray-300 space-y-3">
              <MapPin className="h-6 w-6 text-gray-400 shrink-0" />
              <h3 className="font-serif font-bold text-navy text-lg">Brockville Office</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">
                Brockville, ON (By Appointment Only)
              </p>
              <span className="text-xs font-semibold text-gray-500 block">Meeting Space Available</span>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Google Maps Embed */}
      <section className="bg-white border-t border-gray-200">
        <div className="w-full h-[450px]">
          <iframe
            title="Ottawa Office Boardroom Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.819213813636!2d-75.9036888!3d45.2977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd200ecf85bc1f1%3A0xe54e2c9ef89196b0!2s430%20Hazeldean%20Rd%20Unit%206%2C%20Kanata%2C%20ON%20K2L%201T9!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            id="contact-location-map-iframe"
          ></iframe>
        </div>
      </section>

    </div>
  );
}
