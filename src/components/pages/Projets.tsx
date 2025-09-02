import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Filter } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { ProjectCard } from '../ProjectCard';
import { projectsData } from '../../constants/projectsData';

export function Projets() {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredProjects = projectsData.filter(project => {
    return (
      (selectedType === 'all' || project.type === selectedType) &&
      (selectedRegion === 'all' || project.region === selectedRegion) &&
      (selectedStatus === 'all' || project.status === selectedStatus)
    );
  });

  const projectTypes = [...new Set(projectsData.map(p => p.type))];
  const regions = [...new Set(projectsData.map(p => p.region))];
  const statuses = [...new Set(projectsData.map(p => p.status))];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 dgch-gradient flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop"
            alt="Projets DGCH"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container-custom text-white">
          <div className="max-w-2xl fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Projets</h1>
            <p className="text-xl text-blue-100">
              Découvrez nos initiatives qui transforment le paysage urbain sénégalais
            </p>
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="bg-white border-b border-gray-200 py-6">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="font-medium text-gray-700">Filtrer par:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Type de projet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les types</SelectItem>
                  {projectTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Région" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les régions</SelectItem>
                  {regions.map(region => (
                    <SelectItem key={region} value={region}>{region}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Statut" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les statuts</SelectItem>
                  {statuses.map(status => (
                    <SelectItem key={status} value={status}>{status}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Grille de projets */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-8 fade-in">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} trouvé{filteredProjects.length > 1 ? 's' : ''}
            </h2>
            <p className="text-gray-600">
              Projets correspondant à vos critères de recherche
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}