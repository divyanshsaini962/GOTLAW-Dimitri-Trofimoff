import React, { useState, useEffect } from 'react';
import { ActivePage } from './types';
import EmergencyBanner from './components/EmergencyBanner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import CriminalView from './components/CriminalView';
import FamilyView from './components/FamilyView';
import NotaryView from './components/NotaryView';
import AboutView from './components/AboutView';
import ReviewsView from './components/ReviewsView';
import ContactView from './components/ContactView';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');

  // Handle browser back/forward navigation and deep-linking through URL hashes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as ActivePage;
      const validPages: ActivePage[] = ['home', 'criminal', 'family', 'notary', 'about', 'reviews', 'contact'];
      
      if (hash && validPages.includes(hash)) {
        setActivePage(hash);
      } else {
        setActivePage('home');
      }
    };

    // Initialize on first load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderActiveView = () => {
    switch (activePage) {
      case 'home':
        return <HomeView setActivePage={setActivePage} />;
      case 'criminal':
        return <CriminalView />;
      case 'family':
        return <FamilyView />;
      case 'notary':
        return <NotaryView />;
      case 'about':
        return <AboutView />;
      case 'reviews':
        return <ReviewsView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView setActivePage={setActivePage} />;
    }
  };

  return (
    <div id="gotlaw-app" className="min-h-screen bg-white font-sans flex flex-col justify-between selection:bg-gold/30 selection:text-navy">
      <div>
        {/* Emergency Call-Out Banner */}
        <EmergencyBanner />

        {/* Header Navigation */}
        <Navbar activePage={activePage} setActivePage={setActivePage} />

        {/* Dynamic Page Views */}
        <main id="main-content-canvas" className="flex-grow">
          {renderActiveView()}
        </main>
      </div>

      {/* Footer Navigation */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
