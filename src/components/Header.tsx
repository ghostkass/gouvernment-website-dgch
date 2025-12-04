import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'a-propos', label: 'À propos' },
    { 
      id: 'sous-directions', 
      label: 'Sous-Directions',
      submenu: [
        { id: 'sous-directions/dcons', label: 'DCONS' },
        { id: 'sous-directions/igb', label: 'IGB' },
        { id: 'sous-directions/dphs', label: 'DPHS' },
        { id: 'sous-directions/drspl', label: 'DRSPL' },
      ]
    },
    { id: 'projets', label: 'Projets' },
    { id: 'mediatheque', label: 'Médiathèque' },
    { id: 'actualites', label: 'Actualités' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => onNavigate('accueil')}
          >
            <div className="w-12 h-12 dgch-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold dgch-text-primary">DGCH</h1>
              <p className="text-sm text-gray-600">Direction Générale de la Construction et de l'Habitat</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              item.submenu ? (
                <DropdownMenu key={item.id}>
                  <DropdownMenuTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className={`flex items-center space-x-1 ${
                        currentPage.startsWith('sous-directions') 
                          ? 'text-primary bg-primary/5' 
                          : 'text-gray-700 hover:text-primary'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-48">
                    {item.submenu.map((subItem) => (
                      <DropdownMenuItem
                        key={subItem.id}
                        onClick={() => onNavigate(subItem.id)}
                        className={`cursor-pointer ${
                          currentPage === subItem.id ? 'bg-primary/5 text-primary' : ''
                        }`}
                      >
                        {subItem.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => onNavigate(item.id)}
                  className={
                    currentPage === item.id
                      ? 'text-primary bg-primary/5'
                      : 'text-gray-700 hover:text-primary'
                  }
                >
                  {item.label}
                </Button>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <div key={item.id}>
                  {item.submenu ? (
                    <div>
                      <div className="px-4 py-2 text-gray-500 font-medium text-sm">
                        {item.label}
                      </div>
                      {item.submenu.map((subItem) => (
                        <Button
                          key={subItem.id}
                          variant="ghost"
                          onClick={() => {
                            onNavigate(subItem.id);
                            setIsMenuOpen(false);
                          }}
                          className={`w-full justify-start pl-8 ${
                            currentPage === subItem.id
                              ? 'text-primary bg-primary/5'
                              : 'text-gray-700'
                          }`}
                        >
                          {subItem.label}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <Button
                      variant="ghost"
                      onClick={() => {
                        onNavigate(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`w-full justify-start ${
                        currentPage === item.id
                          ? 'text-primary bg-primary/5'
                          : 'text-gray-700'
                      }`}
                    >
                      {item.label}
                    </Button>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Button 
                  className="w-full dgch-gradient text-white"
                  onClick={() => {
                    onNavigate('espace-agent');
                    setIsMenuOpen(false);
                  }}
                >
                  Espace Agent
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
