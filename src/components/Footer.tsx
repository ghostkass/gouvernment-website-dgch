import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'a-propos', label: 'À propos' },
    { id: 'projets', label: 'Projets' },
    { id: 'actualites', label: 'Actualités' },
    { id: 'contact', label: 'Contact' },
  ];

  const sousDirections = [
    { id: 'sous-directions/dcons', label: 'DCONS' },
    { id: 'sous-directions/igb', label: 'IGB' },
    { id: 'sous-directions/dphs', label: 'DPHS' },
    { id: 'sous-directions/drspl', label: 'DRSPL' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo et description */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 dgch-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">D</span>
                </div>
                <div>
                  <h3 className="font-semibold">DGCH</h3>
                  <p className="text-sm text-gray-300">République du Sénégal</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Direction Générale de la Construction et de l'Habitat - 
                Au service du développement urbain et de l'habitat durable au Sénégal.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Liens rapides */}
            <div>
              <h4 className="font-semibold mb-4">Liens Rapides</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => onNavigate(link.id)}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sous-Directions */}
            <div>
              <h4 className="font-semibold mb-4">Sous-Directions</h4>
              <ul className="space-y-2">
                {sousDirections.map((direction) => (
                  <li key={direction.id}>
                    <button
                      onClick={() => onNavigate(direction.id)}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {direction.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-1 text-gray-400" />
                  <div className="text-sm text-gray-300">
                    <p>Building Administratif</p>
                    <p>Ministère de l'Urbanisme</p>
                    <p>Dakar, Sénégal</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">+221 33 XXX XX XX</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300">contact@dgch.gouv.sn</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Direction Générale de la Construction et de l'Habitat. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Plan du site
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}