import React from 'react';
import { Phone, AlertTriangle } from 'lucide-react';
import { FIRM_INFO } from '../data';

export default function EmergencyBanner() {
  return (
    <div 
      id="emergency-banner" 
      className="bg-red-700 text-white py-2.5 px-4 text-center text-sm font-semibold tracking-wide flex items-center justify-center gap-2 relative z-50 animate-pulse border-b border-red-800"
    >
      <AlertTriangle className="h-4.5 w-4.5 animate-bounce shrink-0" />
      <span>Arrested? Facing Criminal Charges? Call immediately:</span>
      <a 
        href={`tel:${FIRM_INFO.tollFree}`} 
        className="underline hover:text-gold-light transition-colors font-bold inline-flex items-center gap-1.5 focus:ring-2 focus:ring-white focus:outline-none rounded px-1"
        id="emergency-call-link"
      >
        <Phone className="h-3.5 w-3.5" />
        {FIRM_INFO.tollFree}
      </a>
      <span className="hidden md:inline text-red-200">|</span>
      <span className="hidden md:inline text-xs font-normal bg-red-950/40 px-2 py-0.5 rounded border border-red-500/20">
        Available 24/7 Messaging & Urgent Bail
      </span>
    </div>
  );
}
