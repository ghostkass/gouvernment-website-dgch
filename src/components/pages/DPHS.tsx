import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Home, Users, Heart, MapPin, TrendingUp, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function DPHS() {
  const programs = [
    {
      title: 'Programme 100,000 Logements',
      description: 'Construction de logements sociaux accessibles',
      target: '100,000 logements',
      progress: 35,
      beneficiaries: '500,000 personnes'
    },
    {
      title: 'Rénovation Urbaine',
      description: 'Amélioration de l\'habitat existant',
      target: '50 quartiers',
      progress: 60,
      beneficiaries: '200,000 personnes'
    },
    {
      title: 'Logements Ruraux',
      description: 'Développement de l\'habitat en milieu rural',
      target: '25,000 logements',
      progress: 28,
      beneficiaries: '125,000 personnes'
    }
  ];

  const actions = [
    'Élaboration des politiques de logement social',
    'Coordination des programmes d\'habitat',
    'Financement et subventions pour l\'accession à la propriété',
    'Partenariats public-privé pour le logement',
    'Formation et accompagnement des bénéficiaires'
  ];

  const recentProjects = [
    {
      title: 'Cité des Enseignants - Mbao',
      location: 'Dakar',
      units: '2,500 logements',
      status: 'En cours',
      completion: '75%',
      type: 'Logement Social'
    },
    {
      title: 'Village de Vacances - Saly',
      location: 'Thiès',
      units: '800 logements',
      status: 'Terminé',
      completion: '100%',
      type: 'Tourisme Social'
    },
    {
      title: 'Résidence Universitaire - Saint-Louis',
      location: 'Saint-Louis',
      units: '1,200 chambres',
      status: 'En cours',
      completion: '45%',
      type: 'Logement Étudiant'
    }
  ];

  const benefits = [
    {
      icon: Home,
      title: 'Accès facilité au logement',
      description: 'Financement avantageux et procédures simplifiées'
    },
    {
      icon: Users,
      title: 'Accompagnement social',
      description: 'Suivi personnalisé des familles bénéficiaires'
    },
    {
      icon: Heart,
      title: 'Solidarité nationale',
      description: 'Programmes adaptés aux revenus modestes'
    },
    {
      icon: TrendingUp,
      title: 'Développement durable',
      description: 'Constructions écologiques et économes en énergie'
    }
  ];

  const eligibilityCriteria = [
    'Être de nationalité sénégalaise',
    'Revenus inférieurs à 300,000 FCFA/mois',
    'Ne pas être propriétaire d\'un logement',
    'Justifier d\'une activité professionnelle stable',
    'Résider au Sénégal depuis au moins 5 ans'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-900 to-teal-700 flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=400&fit=crop"
            alt="DPHS - Logement Social"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container-custom text-white">
          <div className="max-w-2xl fade-in">
            <Badge className="mb-4 bg-white/20 text-white">Sous-Direction</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Direction de la Promotion et de l'Habitation Sociale
            </h1>
            <p className="text-xl text-green-100">
              DPHS - Un logement décent pour tous les Sénégalais
            </p>
          </div>
        </div>
      </section>

      {/* Programmes sociaux */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Programmes Sociaux</h2>
            <p className="text-lg text-gray-600">
              Initiatives phares pour démocratiser l'accès au logement
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {programs.map((program, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow fade-in">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-3 text-primary">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>Objectif:</span>
                      <span className="font-medium">{program.target}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Bénéficiaires:</span>
                      <span className="font-medium">{program.beneficiaries}</span>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className="bg-green-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${program.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600">Progression: {program.progress}%</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Actions DPHS */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nos Actions</h2>
              <p className="text-lg text-gray-600 mb-6">
                La DPHS développe et met en œuvre les politiques publiques 
                en matière de logement social et d'habitat pour tous.
              </p>
              <ul className="space-y-3">
                {actions.map((action, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Home className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{action}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fade-in">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
                alt="Actions DPHS"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projets récents */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Projets en Cours</h2>
            <p className="text-lg text-gray-600">
              Réalisations récentes et projets de logement social
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {recentProjects.map((project, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow fade-in">
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
                    <Badge variant="secondary">{project.type}</Badge>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {project.location}
                      </span>
                      <span className="font-medium">{project.units}</span>
                    </div>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: project.completion }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600">Avancement: {project.completion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Avantages du Logement Social</h2>
            <p className="text-lg text-gray-600">
              Les bénéfices d'accéder aux programmes de la DPHS
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow text-center p-6 fade-in">
                <CardContent className="p-0">
                  <benefit.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Critères d'éligibilité */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600&h=400&fit=crop"
                alt="Critères éligibilité"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Critères d'Éligibilité</h2>
              <p className="text-lg text-gray-600 mb-6">
                Conditions requises pour bénéficier des programmes de logement social
              </p>
              <ul className="space-y-3">
                {eligibilityCriteria.map((criteria, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">{criteria}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8 bg-green-600 hover:bg-green-700">
                Faire une demande
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gradient-to-r from-green-900 to-teal-700 text-white section-padding">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto fade-in">
            <h2 className="text-3xl font-bold mb-6">Contactez la DPHS</h2>
            <p className="text-xl text-green-100 mb-8">
              Renseignements sur les programmes de logement social
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Service Information</h3>
                <p className="text-green-100">
                  Tél: +221 33 XXX XX XX<br/>
                  Email: info@dphs.gouv.sn
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Candidatures</h3>
                <p className="text-green-100">
                  Tél: +221 33 XXX XX XX<br/>
                  Email: candidatures@dphs.gouv.sn
                </p>
              </div>
            </div>
            <Button size="lg" className="mt-8 bg-white text-primary hover:bg-gray-100">
              Postuler maintenant
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}