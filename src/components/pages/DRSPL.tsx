import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Scale, FileText, Users, Building, AlertCircle, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function DRSPL() {
  const regulations = [
    'Élaboration des textes réglementaires du secteur',
    'Contrôle de l\'application des normes d\'urbanisme',
    'Médiation dans les conflits fonciers',
    'Régulation des marchés immobiliers',
    'Coordination des politiques sectorielles'
  ];

  const recentRegulations = [
    {
      title: 'Décret sur les Normes d\'Accessibilité',
      date: '20 Nov 2024',
      type: 'Décret',
      status: 'Adopté',
      description: 'Nouvelles normes pour l\'accessibilité des personnes à mobilité réduite'
    },
    {
      title: 'Arrêté Tarification Expertise',
      date: '15 Nov 2024',
      type: 'Arrêté',
      status: 'En vigueur',
      description: 'Révision des tarifs d\'expertise technique en bâtiment'
    },
    {
      title: 'Circulaire Permis de Construire',
      date: '10 Nov 2024',
      type: 'Circulaire',
      status: 'En cours',
      description: 'Simplification des procédures de délivrance des permis'
    }
  ];

  const mediationCases = [
    {
      type: 'Conflit Foncier',
      location: 'Rufisque',
      parties: 'Particulier vs Collectivité',
      status: 'Résolu',
      duration: '3 mois'
    },
    {
      type: 'Litige Construction',
      location: 'Thiès',
      parties: 'Promoteur vs Acquéreurs',
      status: 'En cours',
      duration: '2 mois'
    },
    {
      type: 'Différend Urbanisme',
      location: 'Kaolack',
      parties: 'Mairie vs Promoteur',
      status: 'Résolu',
      duration: '4 mois'
    }
  ];

  const socialPolitics = [
    {
      icon: Users,
      title: 'Concertation Citoyenne',
      description: 'Organisation de forums et consultations publiques'
    },
    {
      icon: Building,
      title: 'Politique Urbaine',
      description: 'Coordination des stratégies de développement urbain'
    },
    {
      icon: Scale,
      title: 'Équité Territoriale',
      description: 'Veille à l\'équilibre du développement régional'
    },
    {
      icon: FileText,
      title: 'Veille Réglementaire',
      description: 'Suivi de l\'évolution des normes internationales'
    }
  ];

  const procedures = [
    {
      title: 'Saisine pour Médiation',
      description: 'Procédure de demande de médiation en cas de conflit',
      steps: 4,
      duration: '2-6 mois'
    },
    {
      title: 'Consultation Réglementaire',
      description: 'Processus de consultation pour nouveaux textes',
      steps: 5,
      duration: '3-8 mois'
    },
    {
      title: 'Recours Administratif',
      description: 'Voie de recours contre décisions administratives',
      steps: 3,
      duration: '1-3 mois'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-purple-900 to-indigo-700 flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=400&fit=crop"
            alt="DRSPL - Régulation"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container-custom text-white">
          <div className="max-w-2xl fade-in">
            <Badge className="mb-4 bg-white/20 text-white">Sous-Direction</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Direction de la Régulation Socio-Politique et du Logement
            </h1>
            <p className="text-xl text-purple-100">
              DRSPL - Régulation, médiation et coordination des politiques sectorielles
            </p>
          </div>
        </div>
      </section>

      {/* Activités réglementaires */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Activités Réglementaires</h2>
              <p className="text-lg text-gray-600 mb-6">
                La DRSPL élabore et veille à l'application de la réglementation 
                en matière d'urbanisme, de construction et d'habitat.
              </p>
              <ul className="space-y-3">
                {regulations.map((regulation, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Scale className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{regulation}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fade-in">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=600&h=400&fit=crop"
                alt="Activités réglementaires"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Textes réglementaires récents */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Textes Réglementaires Récents</h2>
            <p className="text-lg text-gray-600">
              Dernières évolutions de la réglementation sectorielle
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {recentRegulations.map((regulation, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge 
                      className={
                        regulation.status === 'Adopté' 
                          ? 'bg-green-500' 
                          : regulation.status === 'En vigueur'
                          ? 'bg-blue-500'
                          : 'bg-orange-500'
                      }
                    >
                      {regulation.status}
                    </Badge>
                    <Badge variant="secondary">{regulation.type}</Badge>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-3">{regulation.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{regulation.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {regulation.date}
                    </span>
                    <Button variant="ghost" size="sm" className="text-primary">
                      Consulter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Activités socio-politiques */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Activités Socio-Politiques</h2>
            <p className="text-lg text-gray-600">
              Coordination et animation des politiques publiques du secteur
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialPolitics.map((activity, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow text-center p-6 fade-in">
                <CardContent className="p-0">
                  <activity.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3">{activity.title}</h3>
                  <p className="text-gray-600 text-sm">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Médiation et conflits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service de Médiation</h2>
            <p className="text-lg text-gray-600">
              Résolution amiable des conflits liés au logement et à l'urbanisme
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {mediationCases.map((mediation, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow fade-in">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge 
                      className={
                        mediation.status === 'Résolu' 
                          ? 'bg-green-500' 
                          : 'bg-blue-500'
                      }
                    >
                      {mediation.status}
                    </Badge>
                    <span className="text-sm text-gray-500">{mediation.duration}</span>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-3">{mediation.type}</h3>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>
                      <strong>Lieu:</strong> {mediation.location}
                    </div>
                    <div>
                      <strong>Parties:</strong> {mediation.parties}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Procédures */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Procédures</h2>
            <p className="text-lg text-gray-600">
              Guide des démarches et procédures administratives
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {procedures.map((procedure, index) => (
              <Card key={index} className="border-0 shadow-lg p-6 fade-in">
                <h3 className="text-xl font-semibold mb-3 text-purple-600">{procedure.title}</h3>
                <p className="text-gray-600 mb-4">{procedure.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Étapes:</span>
                    <span className="font-medium">{procedure.steps} étapes</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Durée:</span>
                    <span className="font-medium">{procedure.duration}</span>
                  </div>
                </div>
                
                <Button variant="outline" className="w-full mt-4">
                  En savoir plus
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Alerte et veille */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-700 text-white section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <div className="flex items-center mb-6">
                <AlertCircle className="w-8 h-8 mr-3" />
                <h2 className="text-3xl font-bold">Veille Réglementaire</h2>
              </div>
              <p className="text-xl text-purple-100 mb-6">
                Restez informés des évolutions réglementaires et des nouvelles 
                procédures dans le secteur de la construction et de l'habitat.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                S'abonner aux alertes
              </Button>
            </div>
            <div className="fade-in">
              <Card className="bg-white/10 border-white/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4">Dernières Alertes</h3>
                  <div className="space-y-3">
                    <div className="pb-3 border-b border-white/20">
                      <p className="font-medium">Nouveau Code de l'Urbanisme</p>
                      <p className="text-sm text-purple-100">Consultation publique ouverte</p>
                    </div>
                    <div className="pb-3 border-b border-white/20">
                      <p className="font-medium">Réforme Permis de Construire</p>
                      <p className="text-sm text-purple-100">Dématérialisation en cours</p>
                    </div>
                    <div>
                      <p className="font-medium">Normes Environnementales</p>
                      <p className="text-sm text-purple-100">Nouvelles exigences 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contactez la DRSPL</h2>
            <p className="text-lg text-gray-600 mb-8">
              Pour vos questions réglementaires et demandes de médiation
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <Card className="p-6 border-0 shadow-md">
                <h3 className="font-semibold mb-3 text-primary">Service Réglementation</h3>
                <p className="text-gray-600">
                  Tél: +221 33 XXX XX XX<br/>
                  Email: reglementation@drspl.gouv.sn
                </p>
              </Card>
              <Card className="p-6 border-0 shadow-md">
                <h3 className="font-semibold mb-3 text-primary">Service Médiation</h3>
                <p className="text-gray-600">
                  Tél: +221 33 XXX XX XX<br/>
                  Email: mediation@drspl.gouv.sn
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}