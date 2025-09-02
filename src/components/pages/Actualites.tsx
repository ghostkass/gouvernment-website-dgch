import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Actualites() {
  const articles = [
    {
      id: 1,
      title: 'Lancement du Programme 100,000 Logements',
      excerpt: 'Le gouvernement sénégalais lance officiellement son ambitieux programme de construction de 100,000 logements sociaux sur 5 ans.',
      content: 'Ce programme révolutionnaire vise à réduire le déficit de logements au Sénégal...',
      category: 'Logement Social',
      date: '15 Nov 2024',
      author: 'Direction Communication',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Nouvelle Réglementation pour la Construction Durable',
      excerpt: 'Adoption de nouvelles normes environnementales pour promouvoir la construction écologique au Sénégal.',
      category: 'Réglementation',
      date: '12 Nov 2024',
      author: 'DRSPL',
      readTime: '3 min',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'Partenariat Stratégique avec l\'Union Européenne',
      excerpt: 'Signature d\'un accord de coopération pour le financement de projets d\'habitat social.',
      category: 'Partenariat',
      date: '08 Nov 2024',
      author: 'Cabinet du Directeur',
      readTime: '4 min',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'Innovation dans le Secteur du BTP',
      excerpt: 'Introduction de nouvelles technologies pour améliorer la qualité et réduire les coûts de construction.',
      category: 'Innovation',
      date: '05 Nov 2024',
      author: 'DCONS',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Forum National de l\'Habitat 2024',
      excerpt: 'Retour sur les discussions et recommandations du forum annuel sur les politiques d\'habitat.',
      category: 'Événement',
      date: '01 Nov 2024',
      author: 'DPHS',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      featured: false
    }
  ];

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 dgch-gradient flex items-center">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=400&fit=crop"
            alt="Actualités DGCH"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container-custom text-white">
          <div className="max-w-2xl fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Actualités</h1>
            <p className="text-xl text-blue-100">
              Restez informés des dernières nouvelles du secteur de la construction et de l'habitat
            </p>
          </div>
        </div>
      </section>

      {/* Article en vedette */}
      {featuredArticle && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="mb-8 fade-in">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">À la Une</h2>
            </div>
            
            <Card className="overflow-hidden border-0 shadow-xl fade-in">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <ImageWithFallback 
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-500">
                    À la Une
                  </Badge>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <Badge variant="secondary">{featuredArticle.category}</Badge>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredArticle.date}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {featuredArticle.readTime}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{featuredArticle.title}</h3>
                  <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredArticle.author}
                    </span>
                    <Button>
                      Lire l'article
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Articles récents */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-8 fade-in">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Articles Récents</h2>
            <p className="text-gray-600">
              Toutes les actualités du secteur de la construction et de l'habitat
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, index) => (
              <Card key={article.id} className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow fade-in">
                <div className="relative h-48">
                  <ImageWithFallback 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4" variant="secondary">
                    {article.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {article.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {article.author}
                    </span>
                    <Button variant="ghost" size="sm" className="text-primary">
                      Lire plus
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="dgch-gradient text-white section-padding">
        <div className="container-custom text-center">
          <div className="max-w-2xl mx-auto fade-in">
            <h2 className="text-3xl font-bold mb-6">Restez Informés</h2>
            <p className="text-xl text-blue-100 mb-8">
              Abonnez-vous à notre newsletter pour recevoir les dernières actualités
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button className="bg-white text-primary hover:bg-gray-100">
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}