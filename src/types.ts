export type ActivePage = 'home' | 'criminal' | 'family' | 'notary' | 'about' | 'reviews' | 'contact';

export interface Review {
  id: string;
  author: string;
  title?: string;
  rating: number;
  text: string;
  source: 'Google' | 'LawyerRatingz' | 'Alignable' | 'Professional';
  date?: string;
}

export interface ContactFormInput {
  name: string;
  phone: string;
  email: string;
  legalMatter: 'Criminal Law' | 'Family Law' | 'Notary Services' | 'Other';
  message: string;
  agreeToTerms: boolean;
}

export interface InquirySubmission {
  id: string;
  input: ContactFormInput;
  submittedAt: string;
}
