import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Target, Eye, Award, Users2, Building, Shield, Handshake } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function APropos() {
  const missions = [
    {
      icon: Building,
      title: 'Régulation de la Construction',
      description: 'Élaboration et application des normes de construction et d\'urbanisme'
    },
    {
      icon: Users2,
      title: 'Promotion du Logement Social',
      description: 'Développement de programmes de logement accessible pour tous'
    },
    {
      icon: Shield,
      title: 'Contrôle Qualité',
      description: 'Inspection et certification de la conformité des constructions'
    },
    {
      icon: Handshake,
      title: 'Partenariats Stratégiques',
      description: 'Collaboration avec les acteurs publics et privés du secteur'
    }
  ];

  const timeline = [
    {
      year: '1960',
      title: 'Création du Service de l\'Urbanisme',
      description: 'Mise en place des premières structures de planification urbaine'
    },
    {
      year: '1985',
      title: 'Réforme Institutionnelle',
      description: 'Création de la Direction de l\'Urbanisme et de l\'Habitat'
    },
    {
      year: '2000',
      title: 'Modernisation',
      description: 'Transformation en Direction Générale avec élargissement des missions'
    },
    {
      year: '2020',
      title: 'Vision 2030',
      description: 'Adoption du plan stratégique pour un développement urbain durable'
    }
  ];

  const partners = [
    'Banque Mondiale',
    'AFD',
    'Union Européenne',
    'BAD',
    'ONU-Habitat',
    'Coopération Française',
    'USAID',
    'GIZ'
  ];

  const organigramme = [
    {
      title: 'Directeur Général',
      name: 'M. Moussa Tine',
      departments: [
        {
          title: 'DCONS - Direction de la Construction',
          description: 'Régulation et contrôle des constructions'
        },
        {
          title: 'IGB - Inspection Générale des Bâtiments',
          description: 'Contrôle qualité et conformité'
        },
        {
          title: 'DPHS - Direction de la Promotion et de l\'Habitation Sociale',
          description: 'Programmes de logement social'
        },
        {
          title: 'DRSPL - Direction de la Régulation Socio-Politique et du Logement',
          description: 'Régulation et politiques sectorielles'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 to-blue-700 flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop"
            alt="À propos DGCH"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container-custom text-white">
          <div className="max-w-2xl fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">À Propos de la DGCH</h1>
            <p className="text-xl text-blue-100">
              Une institution au service du développement urbain et de l'habitat au Sénégal
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg p-8 fade-in">
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold">Notre Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Être l'institution de référence en matière de développement urbain durable 
                et d'habitat au Sénégal, contribuant à l'amélioration du cadre de vie des 
                populations et à la modernisation du territoire national.
              </p>
            </Card>

            <Card className="border-0 shadow-lg p-8 fade-in">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold">Notre Mission</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Concevoir, coordonner et mettre en œuvre la politique nationale en matière 
                de construction, d'urbanisme et d'habitat, en veillant à la qualité, 
                la durabilité et l'accessibilité pour tous.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Missions Principales */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Missions Principales</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La DGCH intervient dans quatre domaines clés pour le développement urbain du Sénégal
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missions.map((mission, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow text-center p-6 fade-in">
                <CardContent className="p-0">
                  <mission.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-3">{mission.title}</h3>
                  <p className="text-gray-600 text-sm">{mission.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Historique */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Notre Historique</h2>
            <p className="text-lg text-gray-600">
              Plus de 60 ans au service du développement urbain sénégalais
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={index} className="flex items-start space-x-6 fade-in">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 dgch-gradient rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">{event.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Organigramme */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Organisation</h2>
            <p className="text-lg text-gray-600">
              Structure organisationnelle de la Direction Générale
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {organigramme.map((level, levelIndex) => (
              <div key={levelIndex} className="fade-in">
                <Card className="border-0 shadow-lg p-8 mb-8 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-2">{level.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{level.name}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {level.departments.map((dept, deptIndex) => (
                      <Card key={deptIndex} className="border border-gray-200 p-4">
                        <h4 className="font-semibold text-lg mb-2 text-primary">{dept.title}</h4>
                        <p className="text-gray-600 text-sm">{dept.description}</p>
                      </Card>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partenaires */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Partenaires</h2>
            <p className="text-lg text-gray-600">
              Collaboration avec les institutions nationales et internationales
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow p-6 text-center fade-in">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <Award className="w-8 h-8 text-gray-400" />
                  </div>
                  <p className="font-medium text-gray-800">{partner}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="dgch-gradient text-white section-padding">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto fade-in">
            <h2 className="text-3xl font-bold mb-8">Nos Valeurs</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 dgch-accent">Excellence</h3>
                <p className="text-blue-100">
                  Nous nous engageons à fournir des services de la plus haute qualité
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 dgch-accent">Transparence</h3>
                <p className="text-blue-100">
                  Nous opérons avec intégrité et responsabilité envers le public
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 dgch-accent">Innovation</h3>
                <p className="text-blue-100">
                  Nous adoptons les meilleures pratiques et technologies modernes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
