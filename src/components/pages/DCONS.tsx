import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { FileText, Users, Building2, CheckCircle, Download, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function DCONS() {
  const missions = [
    'Élaboration des normes et réglementations de construction',
    'Contrôle de conformité des projets de construction',
    'Délivrance des autorisations de construire',
    'Supervision des chantiers de construction publique',
    'Formation et certification des professionnels du BTP'
  ];

  const projects = [
    {
      title: 'Complexe Administratif de Diamniadio',
      status: 'En cours',
      progress: 75,
      budget: '25 milliards FCFA',
      completion: 'Déc 2024'
    },
    {
      title: 'Centre des Conférences de Dakar',
      status: 'Terminé',
      progress: 100,
      budget: '40 milliards FCFA',
      completion: 'Mars 2024'
    },
    {
      title: 'Hôpital Régional de Saint-Louis',
      status: 'En cours',
      progress: 45,
      budget: '15 milliards FCFA',
      completion: 'Juin 2025'
    }
  ];

  const documents = [
    {
      title: 'Code de la Construction 2024',
      type: 'Réglementation',
      date: '15 Nov 2024',
      size: '2.5 MB'
    },
    {
      title: 'Guide des Normes Parasismiques',
      type: 'Guide technique',
      date: '10 Nov 2024',
      size: '1.8 MB'
    },
    {
      title: 'Procédures d\'Autorisation',
      type: 'Procédure',
      date: '05 Nov 2024',
      size: '950 KB'
    },
    {
      title: 'Rapport Annuel 2023',
      type: 'Rapport',
      date: '30 Oct 2024',
      size: '4.2 MB'
    }
  ];

  const team = [
    {
      name: 'Ing. Fatou DIOP',
      title: 'Directrice DCONS',
      speciality: 'Génie Civil'
    },
    {
      name: 'Arch. Moussa KANE',
      title: 'Chef Division Normes',
      speciality: 'Architecture'
    },
    {
      name: 'Ing. Aminata SOW',
      title: 'Chef Division Contrôle',
      speciality: 'Bâtiment'
    },
    {
      name: 'Ing. Mamadou BA',
      title: 'Chef Division Autorisations',
      speciality: 'Urbanisme'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=400&fit=crop"
            alt="DCONS - Construction"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container-custom text-white">
          <div className="max-w-2xl fade-in">
            <Badge className="mb-4 bg-white/20 text-white">Sous-Direction</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Direction de la Construction
            </h1>
            <p className="text-xl text-blue-100">
              DCONS - Régulation, contrôle et promotion de la qualité dans la construction
            </p>
          </div>
        </div>
      </section>

      {/* Missions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nos Missions</h2>
              <p className="text-lg text-gray-600 mb-6">
                La Direction de la Construction assure la régulation et le contrôle 
                de toutes les activités de construction au Sénégal.
              </p>
              <ul className="space-y-3">
                {missions.map((mission, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fade-in">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop"
                alt="Missions DCONS"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projets en cours */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Projets Sous Supervision</h2>
            <p className="text-lg text-gray-600">
              Grands projets de construction pilotés par la DCONS
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge 
                      className={
                        project.status === 'Terminé' 
                          ? 'bg-green-500' 
                          : 'bg-blue-500'
                      }
                    >
                      {project.status}
                    </Badge>
                    <span className="text-sm text-gray-500">{project.progress}%</span>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-3">{project.title}</h3>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Budget:</span>
                      <span className="font-medium">{project.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Livraison:</span>
                      <span className="font-medium">{project.completion}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Équipe</h2>
            <p className="text-lg text-gray-600">
              Professionnels expérimentés au service de la construction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow text-center p-6 fade-in">
                <CardContent className="p-0">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.title}</p>
                  <p className="text-gray-600 text-sm">{member.speciality}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Documents & Ressources</h2>
            <p className="text-lg text-gray-600">
              Réglementations, guides et documents techniques
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {documents.map((doc, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow fade-in">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <FileText className="w-8 h-8 text-primary mt-1" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold mb-1">{doc.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <Badge variant="secondary">{doc.type}</Badge>
                          <span className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {doc.date}
                          </span>
                          <span>{doc.size}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-primary">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="dgch-gradient text-white section-padding">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto fade-in">
            <h2 className="text-3xl font-bold mb-6">Contactez la DCONS</h2>
            <p className="text-xl text-blue-100 mb-8">
              Pour toute question relative à la construction et aux autorisations
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Bureau des Autorisations</h3>
                <p className="text-blue-100">
                  Tél: +221 33 XXX XX XX<br/>
                  Email: autorisations@dcons.gouv.sn
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Bureau du Contrôle</h3>
                <p className="text-blue-100">
                  Tél: +221 33 XXX XX XX<br/>
                  Email: controle@dcons.gouv.sn
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}