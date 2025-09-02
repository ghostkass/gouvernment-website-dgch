import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MapPin, Calendar, Users, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Project } from '../constants/projectsData';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Terminé': return 'bg-green-500';
      case 'En cours': return 'bg-blue-500';
      case 'Planification': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 fade-in">
      <div className="relative">
        <ImageWithFallback 
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge className={getStatusColor(project.status)}>
            {project.status}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge variant="secondary">{project.type}</Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="font-semibold text-xl mb-3">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center text-gray-500">
              <MapPin className="w-4 h-4 mr-1" />
              {project.region}
            </span>
            <span className="flex items-center text-gray-500">
              <Users className="w-4 h-4 mr-1" />
              {project.beneficiaries.toLocaleString()} bénéficiaires
            </span>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center text-gray-500">
              <Calendar className="w-4 h-4 mr-1" />
              {project.startDate} - {project.endDate}
            </span>
            <span className="font-medium text-primary">{project.budget}</span>
          </div>
        </div>
        
        {project.status !== 'Planification' && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Progression</span>
              <span>{project.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all duration-500"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>
        )}
        
        <Button variant="outline" className="w-full">
          <Eye className="w-4 h-4 mr-2" />
          Voir les détails
        </Button>
      </CardContent>
    </Card>
  );
}