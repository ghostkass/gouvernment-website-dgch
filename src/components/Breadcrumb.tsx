import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Button } from './ui/button';

interface BreadcrumbItem {
  label: string;
  id?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onNavigate: (page: string) => void;
}

export function Breadcrumb({ items, onNavigate }: BreadcrumbProps) {
  return (
    <nav className="bg-gray-50 border-b border-gray-200">
      <div className="container-custom py-3">
        <ol className="flex items-center space-x-2 text-sm">
          <li>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate('accueil')}
              className="flex items-center space-x-1 text-gray-600 hover:text-primary p-1"
            >
              <Home className="w-4 h-4" />
              <span>Accueil</span>
            </Button>
          </li>
          
          {items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              {item.id && index < items.length - 1 ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onNavigate(item.id!)}
                  className="text-gray-600 hover:text-primary p-1"
                >
                  {item.label}
                </Button>
              ) : (
                <span className={`${index === items.length - 1 ? 'text-primary font-medium' : 'text-gray-600'}`}>
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}