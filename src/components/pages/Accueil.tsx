import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Building2, Users, MapPin, TrendingUp, Calendar, ExternalLink, ArrowRight, Play, Pause, Star, User, Award, Target, Globe } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface AccueilProps {
  onNavigate: (page: string) => void;
}

export function Accueil({ onNavigate }: AccueilProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isVideoMode, setIsVideoMode] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);

  // Images de fond pour la galerie rotative
  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop&crop=center",
      alt: "Architecture moderne Dakar"
    },
    {
      url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop&crop=center",
      alt: "Développement urbain"
    },
    {
      url: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920&h=1080&fit=crop&crop=center",
      alt: "Construction résidentielle"
    },
    {
      url: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&h=1080&fit=crop&crop=center",
      alt: "Infrastructure urbaine"
    }
  ];

  // Effet parallax au scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rotation automatique des images
  useEffect(() => {
    if (!isVideoMode) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % heroImages.length
        );
      }, 5000); // Change d'image toutes les 5 secondes

      return () => clearInterval(interval);
    }
  }, [isVideoMode, heroImages.length]);

  const stats = [
    { icon: Building2, label: 'Projets en cours', value: '45', color: 'text-blue-600' },
    { icon: Users, label: 'Logements sociaux livrés', value: '12,500', color: 'text-green-600' },
    { icon: MapPin, label: 'Régions couvertes', value: '14', color: 'text-purple-600' },
    { icon: TrendingUp, label: 'Croissance annuelle', value: '18%', color: 'text-orange-600' },
  ];

  const recentNews = [
    {
      id: 1,
      title: 'Lancement du Programme 100,000 Logements',
      excerpt: 'Le gouvernement lance un ambitieux programme de construction...',
      date: '15 Nov 2024',
      category: 'Logement Social'
    },
    {
      id: 2,
      title: 'Nouvelle Réglementation Construction',
      excerpt: 'Adoption de nouvelles normes environnementales...',
      date: '12 Nov 2024',
      category: 'Réglementation'
    },
    {
      id: 3,
      title: 'Partenariat International Signé',
      excerpt: 'Accord de coopération avec l\'Union Européenne...',
      date: '08 Nov 2024',
      category: 'Partenariat'
    }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'Cité Djiddah Thiaroye Kao',
      description: 'Construction de 1,500 logements sociaux avec infrastructures modernes',
      status: 'En cours',
      region: 'Dakar',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Zone Économique Spéciale de Diass',
      description: 'Développement urbain intégré avec zone industrielle',
      status: 'Planification',
      region: 'Thiès',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Rénovation Urbaine Médina',
      description: 'Modernisation des infrastructures et amélioration de l\'habitat',
      status: 'En cours',
      region: 'Dakar',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop'
    }
  ];

  const services = [
    {
      icon: Building2,
      title: 'Construction',
      description: 'Supervision et contrôle des projets de construction publique et privée'
    },
    {
      icon: Users,
      title: 'Logement Social',
      description: 'Développement de programmes de logement accessible pour tous'
    },
    {
      icon: MapPin,
      title: 'Aménagement Urbain',
      description: 'Planification et développement des espaces urbains durables'
    },
    {
      icon: Award,
      title: 'Qualité & Normes',
      description: 'Application des standards de qualité et normes de construction'
    }
  ];

  const testimonials = [
    {
      name: 'Aminata Diallo',
      role: 'Bénéficiaire Logement Social',
      organization: 'Cité Djiddah Thiaroye Kao',
      content: 'Grâce à la DGCH, ma famille et moi avons pu accéder à un logement décent dans un environnement moderne et sécurisé.'
    },
    {
      name: 'Moussa Seck',
      role: 'Maire',
      organization: 'Commune de Rufisque',
      content: 'Le professionnalisme et l\'expertise de la DGCH ont été déterminants dans la réussite de nos projets d\'aménagement urbain.'
    },
    {
      name: 'Dr. Fatou Ndiaye',
      role: 'Directrice',
      organization: 'ONG Habitat Durable',
      content: 'La vision de développement durable portée by the DGCH constitue un modèle pour l\'ensemble du continent africain.'
    }
  ];

  const partners = [
    {
      name: 'Union Européenne',
      logo: 'https://images.unsplash.com/photo-1574854020454-89b01a2b7bd9?w=200&h=100&fit=crop'
    },
    {
      name: 'Banque Mondiale',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop'
    },
    {
      name: 'UEMOA',
      logo: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=200&h=100&fit=crop'
    },
    {
      name: 'AFD',
      logo: 'https://images.unsplash.com/photo-1566836077843-57d7e72a4f12?w=200&h=100&fit=crop'
    },
    {
      name: 'UN-Habitat',
      logo: 'https://images.unsplash.com/photo-1582576163736-89a3b2ac8d57?w=200&h=100&fit=crop'
    },
    {
      name: 'Coopération Française',
      logo: 'https://images.unsplash.com/photo-1563219893-fd0a1d7b2bb5?w=200&h=100&fit=crop'
    }
  ];

  const toggleVideoMode = () => {
    setIsVideoMode(!isVideoMode);
    setIsVideoPlaying(true);
  };

  const toggleVideoPlayback = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center text-white overflow-hidden">
        {/* Background Media Container */}
        <div className="absolute inset-0">
          {isVideoMode ? (
            // Vidéo de présentation
            <div className="relative w-full h-full">
              <video
                className="w-full h-full object-cover"
                autoPlay={isVideoPlaying}
                muted
                loop
                playsInline
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-huge-city-on-a-sunny-day-49811-large.mp4" type="video/mp4" />
                {/* Fallback vers image si vidéo ne charge pas */}
                <ImageWithFallback 
                  src={heroImages[currentImageIndex].url}
                  alt={heroImages[currentImageIndex].alt}
                  className="w-full h-full object-cover"
                />
              </video>
              
              {/* Contrôles vidéo */}
              <div className="absolute bottom-4 right-4 flex gap-2 z-20">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm"
                  onClick={toggleVideoPlayback}
                >
                  {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm"
                  onClick={toggleVideoMode}
                >
                  Images
                </Button>
              </div>
            </div>
          ) : (
            // Galerie d'images avec effet parallax
            <div className="relative w-full h-full">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transform: `translateY(${scrollY * 0.5}px)`,
                  }}
                >
                  <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat scale-110"
                    style={{
                      backgroundImage: `url("${image.url}")`
                    }}
                  ></div>
                </div>
              ))}
              
              {/* Indicateurs de galerie */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
              
              {/* Bouton pour basculer vers vidéo */}
              <div className="absolute bottom-4 right-4 z-20">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/10 backdrop-blur-sm"
                  onClick={toggleVideoMode}
                >
                  <Play className="w-4 h-4 mr-1" />
                  Vidéo
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="relative container-custom w-full z-10">
          <div className="max-w-4xl mb-16">
            <div className="slide-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Direction Générale de la Construction et de l'Habitat
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Au service du développement urbain durable et de l'habitat pour tous au Sénégal
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100"
                  onClick={() => onNavigate('projets')}
                >
                  Découvrir nos projets
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/10"
                  onClick={() => onNavigate('a-propos')}
                >
                  En savoir plus
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Section Intégrée */}
          <div className="w-full fade-in">
            <div className="hero-stats-container rounded-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="hero-stats-card rounded-xl p-6">
                      <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                      <p className="text-gray-600 text-sm">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>



      {/* Mission Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                La DGCH pilote et coordonne la politique nationale en matière de construction, 
                d'urbanisme et d'habitat. Nous œuvrons pour un développement urbain durable 
                et un accès équitable au logement pour tous les Sénégalais.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Planification et régulation urbaine</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Promotion du logement social</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-gray-600">Contrôle qualité des constructions</p>
                </div>
              </div>
              <Button 
                className="mt-8" 
                onClick={() => onNavigate('a-propos')}
              >
                En savoir plus
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="fade-in">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
                alt="Mission DGCH"
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Projets Phares
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez nos initiatives majeures qui transforment le paysage urbain sénégalais
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 fade-in">
                <div className="relative">
                  <ImageWithFallback 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge 
                    className={`absolute top-4 right-4 ${
                      project.status === 'En cours' ? 'bg-green-500' : 'bg-blue-500'
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.region}
                    </span>
                    <Button variant="ghost" size="sm" className="text-primary">
                      Voir plus
                      <ExternalLink className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              onClick={() => onNavigate('projets')}
            >
              Voir tous les projets
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Domaines d'Intervention
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              La DGCH intervient dans tous les aspects de la construction et de l'habitat 
              pour un développement urbain harmonieux et durable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => onNavigate('projets')}
                  >
                    En savoir plus
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Actualités Récentes
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                Suivez les dernières nouvelles et développements de la DGCH
              </p>
            </div>
            <Button 
              onClick={() => onNavigate('actualites')}
              className="mt-4 lg:mt-0"
            >
              Voir toutes les actualités
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentNews.map((article, index) => (
              <Card 
                key={index} 
                className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => onNavigate('actualites')}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={`https://images.unsplash.com/photo-${1486406146926 + index}?w=600&h=400&fit=crop`}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </span>
                    <Badge variant="secondary">{article.category}</Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{article.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Témoignages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ce que disent nos partenaires et bénéficiaires de nos interventions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow fade-in bg-white"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <User className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-gray-500">{testimonial.organization}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Partenaires
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous collaborons avec des organisations nationales et internationales 
              pour le développement de l'habitat au Sénégal
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ImageWithFallback
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="dgch-gradient text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Rejoignez Notre Mission
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Participez à la construction d'un Sénégal urbain moderne et durable
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100"
              onClick={() => onNavigate('contact')}
            >
              Nous contacter
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => onNavigate('espace-agent')}
            >
              Espace Agent
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}