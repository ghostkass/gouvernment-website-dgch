import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Breadcrumb } from './components/Breadcrumb';
import { Accueil } from './components/pages/Accueil';
import { APropos } from './components/pages/APropos';
import { DCONS } from './components/pages/DCONS';
import { IGB } from './components/pages/IGB';
import { DPHS } from './components/pages/DPHS';
import { DRSPL } from './components/pages/DRSPL';
import { Projets } from './components/pages/Projets';
import { Mediatheque } from './components/pages/Mediatheque';
import { EspaceAgent } from './components/pages/EspaceAgent';
import { Actualites } from './components/pages/Actualites';
import { Contact } from './components/pages/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState('accueil');

  const getBreadcrumbItems = (page: string) => {
    const breadcrumbs = [];
    
    if (page.startsWith('sous-directions/')) {
      breadcrumbs.push({ label: 'Sous-Directions', id: 'sous-directions' });
      
      switch (page) {
        case 'sous-directions/dcons':
          breadcrumbs.push({ label: 'DCONS' });
          break;
        case 'sous-directions/igb':
          breadcrumbs.push({ label: 'IGB' });
          break;
        case 'sous-directions/dphs':
          breadcrumbs.push({ label: 'DPHS' });
          break;
        case 'sous-directions/drspl':
          breadcrumbs.push({ label: 'DRSPL' });
          break;
      }
    } else {
      switch (page) {
        case 'a-propos':
          breadcrumbs.push({ label: 'À propos' });
          break;
        case 'projets':
          breadcrumbs.push({ label: 'Projets' });
          break;
        case 'mediatheque':
          breadcrumbs.push({ label: 'Médiathèque' });
          break;
        case 'espace-agent':
          breadcrumbs.push({ label: 'Espace Agent' });
          break;
        case 'actualites':
          breadcrumbs.push({ label: 'Actualités' });
          break;
        case 'contact':
          breadcrumbs.push({ label: 'Contact' });
          break;
      }
    }
    
    return breadcrumbs;
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'accueil':
        return <Accueil onNavigate={setCurrentPage} />;
      case 'a-propos':
        return <APropos />;
      case 'sous-directions/dcons':
        return <DCONS />;
      case 'sous-directions/igb':
        return <IGB />;
      case 'sous-directions/dphs':
        return <DPHS />;
      case 'sous-directions/drspl':
        return <DRSPL />;
      case 'projets':
        return <Projets />;
      case 'mediatheque':
        return <Mediatheque />;
      case 'espace-agent':
        return <EspaceAgent onNavigate={setCurrentPage} />;
      case 'actualites':
        return <Actualites />;
      case 'contact':
        return <Contact />;
      default:
        return <Accueil onNavigate={setCurrentPage} />;
    }
  };

  const breadcrumbItems = getBreadcrumbItems(currentPage);

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {currentPage !== 'accueil' && currentPage !== 'espace-agent' && (
        <Breadcrumb items={breadcrumbItems} onNavigate={setCurrentPage} />
      )}
      
      <main className="flex-1">
        {renderPage()}
      </main>
      
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}