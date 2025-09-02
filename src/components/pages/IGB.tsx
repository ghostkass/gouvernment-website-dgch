import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Shield, AlertTriangle, CheckCircle, FileText, Calendar, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function IGB() {
  const activities = [
    'Inspection périodique des bâtiments publics',
    'Contrôle de sécurité des établissements recevant du public',
    'Expertise technique en cas de sinistre',
    'Audit de conformité des constructions',
    'Certification de la qualité des matériaux'
  ];

  const inspectionStats = [
    { label: 'Bâtiments inspectés (2024)', value: '1,247', trend: '+12%' },
    { label: 'Rapports de non-conformité', value: '89', trend: '-15%' },
    { label: 'Certifications délivrées', value: '456', trend: '+8%' },
    { label: 'Interventions d\'urgence', value: '23', trend: '-30%' }
  ];

  const recentReports = [
    {
      title: 'Inspection Hôpital Principal de Dakar',
      date: '12 Nov 2024',
      status: 'Conforme',
      priority: 'Élevée',
      type: 'Sécurité'
    },
    {
      title: 'Audit Centre Commercial Sea Plaza',
      date: '10 Nov 2024',
      status: 'Non-conforme',
      priority: 'Critique',
      type: 'Structure'
    },
    {
      title: 'Contrôle École Primaire Liberté 2',
      date: '08 Nov 2024',
      status: 'Conforme',
      priority: 'Normale',
      type: 'Sécurité'
    },
    {
      title: 'Expertise Immeuble Plateau',
      date: '05 Nov 2024',
      status: 'En cours',
      priority: 'Élevée',
      type: 'Sinistre'
    }
  ];

  const certifications = [
    'Certification ISO 9001:2015 pour les processus d\'inspection',
    'Accréditation nationale pour les tests de matériaux',
    'Habilitation contrôle technique bâtiment',
    'Certification expertise judiciaire'
  ];

  const procedures = [
    {
      title: 'Demande d\'Inspection',
      steps: [
        'Dépôt de la demande avec dossier technique',
        'Planification de la visite d\'inspection',
        'Réalisation de l\'inspection sur site',
        'Rédaction et remise du rapport'
      ]
    },
    {
      title: 'Processus de Certification',
      steps: [
        'Analyse de conformité réglementaire',
        'Tests et vérifications techniques',
        'Validation par commission d\'experts',
        'Délivrance du certificat de conformité'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-orange-900 to-red-700 flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=400&fit=crop"
            alt="IGB - Inspection"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container-custom text-white">
          <div className="max-w-2xl fade-in">
            <Badge className="mb-4 bg-white/20 text-white">Sous-Direction</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Inspection Générale des Bâtiments
            </h1>
            <p className="text-xl text-orange-100">
              IGB - Contrôle qualité, sécurité et conformité des constructions
            </p>
          </div>
        </div>
      </section>

      {/* Activités de contrôle */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Activités de Contrôle</h2>
              <p className="text-lg text-gray-600 mb-6">
                L'IGB assure le contrôle qualité et la sécurité de toutes les constructions, 
                garantissant la conformité aux normes nationales et internationales.
              </p>
              <ul className="space-y-3">
                {activities.map((activity, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="fade-in">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop"
                alt="Contrôle qualité"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tableau de Bord 2024</h2>
            <p className="text-lg text-gray-600">
              Performance et activités de l'Inspection Générale des Bâtiments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inspectionStats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg text-center p-6 fade-in">
                <CardContent className="p-0">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                  <p className="text-gray-600 mb-3">{stat.label}</p>
                  <div className={`flex items-center justify-center space-x-1 text-sm ${
                    stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <TrendingUp className="w-4 h-4" />
                    <span>{stat.trend}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rapports récents */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Rapports d'Inspection Récents</h2>
            <p className="text-lg text-gray-600">
              Dernières inspections et contrôles réalisés
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {recentReports.map((report, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow fade-in">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-semibold text-lg flex-1">{report.title}</h3>
                    <Badge 
                      className={`ml-3 ${
                        report.status === 'Conforme' 
                          ? 'bg-green-500' 
                          : report.status === 'Non-conforme'
                          ? 'bg-red-500'
                          : 'bg-blue-500'
                      }`}
                    >
                      {report.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600">{report.date}</span>
                      </div>
                      <Badge variant="secondary">{report.type}</Badge>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <AlertTriangle 
                        className={`w-4 h-4 ${
                          report.priority === 'Critique' 
                            ? 'text-red-500' 
                            : report.priority === 'Élevée'
                            ? 'text-orange-500'
                            : 'text-green-500'
                        }`} 
                      />
                      <span className="text-gray-600">Priorité: {report.priority}</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="mt-4 text-primary">
                    Voir le rapport
                    <FileText className="ml-1 w-3 h-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"
                alt="Certifications"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Nos Certifications</h2>
              <p className="text-lg text-gray-600 mb-6">
                L'IGB dispose des certifications et accréditations nécessaires 
                pour garantir la qualité de ses inspections.
              </p>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Procédures */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos Procédures</h2>
            <p className="text-lg text-gray-600">
              Processus standardisés pour garantir la qualité de nos services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {procedures.map((procedure, index) => (
              <Card key={index} className="border-0 shadow-lg p-6 fade-in">
                <h3 className="text-xl font-semibold mb-6 text-primary">{procedure.title}</h3>
                <div className="space-y-4">
                  {procedure.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                        {stepIndex + 1}
                      </div>
                      <p className="text-gray-700 flex-1">{step}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gradient-to-r from-orange-900 to-red-700 text-white section-padding">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto fade-in">
            <h2 className="text-3xl font-bold mb-6">Demander une Inspection</h2>
            <p className="text-xl text-orange-100 mb-8">
              Contactez l'IGB pour vos besoins d'inspection et de contrôle qualité
            </p>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Service Inspection</h3>
                <p className="text-orange-100">
                  Tél: +221 33 XXX XX XX<br/>
                  Email: inspection@igb.gouv.sn
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="font-semibold mb-3">Urgences</h3>
                <p className="text-orange-100">
                  Tél: +221 77 XXX XX XX<br/>
                  Email: urgence@igb.gouv.sn
                </p>
              </div>
            </div>
            <Button size="lg" className="mt-8 bg-white text-primary hover:bg-gray-100">
              Demander une inspection
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}