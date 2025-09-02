import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      details: [
        'Building Administratif',
        'Ministère de l\'Urbanisme, du Logement et de l\'Hygiène Publique',
        'Dakar, Sénégal'
      ]
    },
    {
      icon: Phone,
      title: 'Téléphone',
      details: [
        'Standard: +221 33 XXX XX XX',
        'Urgences: +221 77 XXX XX XX'
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        'contact@dgch.gouv.sn',
        'info@dgch.gouv.sn'
      ]
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: [
        'Lundi - Vendredi: 8h00 - 17h00',
        'Samedi: 8h00 - 12h00',
        'Dimanche: Fermé'
      ]
    }
  ];

  const services = [
    { value: 'general', label: 'Demande générale' },
    { value: 'autorisation', label: 'Autorisation de construire' },
    { value: 'inspection', label: 'Demande d\'inspection' },
    { value: 'logement-social', label: 'Logement social' },
    { value: 'mediation', label: 'Médiation de conflit' },
    { value: 'autre', label: 'Autre' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 dgch-gradient flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop"
            alt="Contact DGCH"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container-custom text-white">
          <div className="max-w-2xl fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
            <p className="text-xl text-blue-100">
              Nous sommes à votre disposition pour répondre à vos questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
              <p className="text-gray-600 mb-8">
                Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
              </p>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="nom">Nom complet *</Label>
                        <Input id="nom" placeholder="Votre nom" required />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="votre@email.com" required />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="telephone">Téléphone</Label>
                        <Input id="telephone" placeholder="+221 XX XXX XX XX" />
                      </div>
                      <div>
                        <Label htmlFor="service">Service concerné</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez un service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map(service => (
                              <SelectItem key={service.value} value={service.value}>
                                {service.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="sujet">Sujet *</Label>
                      <Input id="sujet" placeholder="Objet de votre message" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Décrivez votre demande en détail..." 
                        rows={6}
                        required 
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Envoyer le message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Informations de contact */}
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Informations de contact</h2>
              <p className="text-gray-600 mb-8">
                Retrouvez toutes nos coordonnées et horaires d'ouverture.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                          <info.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-2">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-gray-600">{detail}</p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Carte */}
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-600">Carte interactive Google Maps</p>
            <p className="text-sm text-gray-500">Building Administratif - Ministère de l'Urbanisme</p>
          </div>
        </div>
      </section>

      {/* Services d'urgence */}
      <section className="section-padding bg-red-50">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto fade-in">
            <h2 className="text-3xl font-bold text-red-800 mb-6">Services d'Urgence</h2>
            <p className="text-lg text-red-700 mb-8">
              En cas d'urgence liée à la sécurité des bâtiments ou de sinistre
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-red-200 bg-white">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Hotline Urgence</h3>
                  <p className="text-2xl font-bold text-red-600">+221 77 XXX XX XX</p>
                  <p className="text-sm text-gray-600 mt-2">24h/24 - 7j/7</p>
                </CardContent>
              </Card>
              <Card className="border-red-200 bg-white">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-red-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Email Urgence</h3>
                  <p className="text-lg font-bold text-red-600">urgence@dgch.gouv.sn</p>
                  <p className="text-sm text-gray-600 mt-2">Réponse sous 2h</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}