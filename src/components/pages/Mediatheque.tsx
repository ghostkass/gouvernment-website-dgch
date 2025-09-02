import React, { useState, useMemo } from 'react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Progress } from '../ui/progress';
import { Alert, AlertDescription } from '../ui/alert';
import { 
  Camera, 
  Search, 
  Grid3X3, 
  List, 
  Download, 
  Calendar, 
  MapPin, 
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Filter,
  Upload,
  Plus,
  FolderPlus,
  Shield,
  UserCheck,
  Lock,
  Unlock,
  Settings,
  Edit,
  Trash2,
  BookOpen,
  Image as ImageIcon,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface Photo {
  id: number;
  title: string;
  description: string;
  category: string;
  album?: string;
  date: string;
  location: string;
  photographer: string;
  image: string;
  tags: string[];
  downloadPermission: 'public' | 'restricted' | 'admin';
  fileSize?: string;
  resolution?: string;
}

interface Album {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  photoCount: number;
  createdDate: string;
}

interface UploadProgress {
  file: File;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
  id: string;
}

export function Mediatheque() {
  const [selectedCategory, setSelectedCategory] = useState('Toutes');
  const [selectedAlbum, setSelectedAlbum] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'albums'>('grid');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdminMode, setIsAdminMode] = useState(false); // Simuler le mode admin
  const [uploadProgress, setUploadProgress] = useState<UploadProgress[]>([]);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isAlbumModalOpen, setIsAlbumModalOpen] = useState(false);
  const [userPermission, setUserPermission] = useState<'public' | 'agent' | 'admin'>('public');

  const albums: Album[] = [
    {
      id: 'projets-2024',
      name: 'Projets 2024',
      description: 'Tous les projets majeurs lancés en 2024',
      coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      photoCount: 25,
      createdDate: '01 Jan 2024'
    },
    {
      id: 'evenements-officiels',
      name: 'Événements Officiels',
      description: 'Inaugurations, cérémonies et événements institutionnels',
      coverImage: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=400&h=300&fit=crop',
      photoCount: 18,
      createdDate: '15 Mar 2024'
    },
    {
      id: 'formation-personnel',
      name: 'Formation du Personnel',
      description: 'Sessions de formation et développement des compétences',
      coverImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      photoCount: 12,
      createdDate: '10 Sep 2024'
    },
    {
      id: 'partenariats',
      name: 'Partenariats Internationaux',
      description: 'Rencontres avec nos partenaires techniques et financiers',
      coverImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop',
      photoCount: 8,
      createdDate: '05 Oct 2024'
    }
  ];

  const photos: Photo[] = [
    {
      id: 1,
      title: 'Inauguration Cité Djiddah Thiaroye Kao',
      description: 'Cérémonie d\'inauguration du complexe de logements sociaux en présence des autorités locales',
      category: 'Événements',
      album: 'evenements-officiels',
      date: '15 Nov 2024',
      location: 'Dakar',
      photographer: 'Service Communication DGCH',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      tags: ['inauguration', 'logement social', 'dakar'],
      downloadPermission: 'public',
      fileSize: '2.4 MB',
      resolution: '1920x1080'
    },
    {
      id: 2,
      title: 'Construction Zone Économique Diass',
      description: 'Vue aérienne des travaux de construction de la zone économique spéciale',
      category: 'Projets',
      album: 'projets-2024',
      date: '12 Nov 2024',
      location: 'Thiès',
      photographer: 'Direction Technique',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop',
      tags: ['construction', 'zone économique', 'thiès'],
      downloadPermission: 'restricted',
      fileSize: '3.1 MB',
      resolution: '2048x1536'
    },
    {
      id: 3,
      title: 'Équipe Direction Générale',
      description: 'Photo officielle de l\'équipe dirigeante de la DGCH lors de la réunion trimestrielle',
      category: 'Équipes',
      date: '10 Nov 2024',
      location: 'Siège DGCH',
      photographer: 'Studio Officiel',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop',
      tags: ['équipe', 'direction', 'réunion'],
      downloadPermission: 'admin',
      fileSize: '1.8 MB',
      resolution: '1600x1200'
    },
    {
      id: 4,
      title: 'Infrastructure Routière Urbaine',
      description: 'Nouvelles voies de circulation dans le cadre du projet d\'aménagement urbain',
      category: 'Infrastructure',
      album: 'projets-2024',
      date: '08 Nov 2024',
      location: 'Dakar',
      photographer: 'Service Technique',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop',
      tags: ['infrastructure', 'route', 'urbain'],
      downloadPermission: 'public',
      fileSize: '2.7 MB',
      resolution: '1920x1440'
    },
    {
      id: 5,
      title: 'Conférence Internationale Habitat',
      description: 'Participation à la conférence internationale sur l\'habitat durable',
      category: 'Événements',
      album: 'evenements-officiels',
      date: '05 Nov 2024',
      location: 'Centre International Dakar',
      photographer: 'Service Communication',
      image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop',
      tags: ['conférence', 'international', 'habitat'],
      downloadPermission: 'restricted',
      fileSize: '2.9 MB',
      resolution: '2048x1365'
    },
    {
      id: 6,
      title: 'Complexe Résidentiel Moderne',
      description: 'Vue d\'ensemble du nouveau complexe résidentiel avec espaces verts intégrés',
      category: 'Projets',
      album: 'projets-2024',
      date: '03 Nov 2024',
      location: 'Rufisque',
      photographer: 'Architecture DGCH',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      tags: ['résidentiel', 'moderne', 'espaces verts'],
      downloadPermission: 'public',
      fileSize: '3.2 MB',
      resolution: '2304x1728'
    },
    {
      id: 7,
      title: 'Formation Technique Personnel',
      description: 'Session de formation du personnel technique sur les nouvelles normes de construction',
      category: 'Formation',
      album: 'formation-personnel',
      date: '01 Nov 2024',
      location: 'Centre de Formation DGCH',
      photographer: 'Service RH',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      tags: ['formation', 'technique', 'personnel'],
      downloadPermission: 'restricted',
      fileSize: '1.9 MB',
      resolution: '1800x1200'
    },
    {
      id: 8,
      title: 'Pont Infrastructure Majeure',
      description: 'Construction d\'un pont stratégique pour améliorer la connectivité urbaine',
      category: 'Infrastructure',
      album: 'projets-2024',
      date: '28 Oct 2024',
      location: 'Saint-Louis',
      photographer: 'Génie Civil DGCH',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=600&fit=crop',
      tags: ['pont', 'infrastructure', 'connectivité'],
      downloadPermission: 'public',
      fileSize: '2.1 MB',
      resolution: '1920x1280'
    },
    {
      id: 9,
      title: 'Réunion Partenaires Internationaux',
      description: 'Réunion de coordination avec les partenaires techniques et financiers',
      category: 'Partenariats',
      album: 'partenariats',
      date: '25 Oct 2024',
      location: 'Siège DGCH',
      photographer: 'Service Protocol',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop',
      tags: ['partenaires', 'international', 'coordination'],
      downloadPermission: 'admin',
      fileSize: '2.5 MB',
      resolution: '2000x1333'
    }
  ];

  const categories = ['Toutes', 'Projets', 'Événements', 'Infrastructure', 'Équipes', 'Formation', 'Partenariats'];
  const albumOptions = ['Tous', ...albums.map(album => album.name)];

  const filteredPhotos = useMemo(() => {
    return photos.filter(photo => {
      const matchesCategory = selectedCategory === 'Toutes' || photo.category === selectedCategory;
      const matchesAlbum = selectedAlbum === 'Tous' || 
        albums.find(album => album.name === selectedAlbum)?.id === photo.album;
      const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           photo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           photo.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesAlbum && matchesSearch;
    });
  }, [selectedCategory, selectedAlbum, searchTerm, photos, albums]);

  // Fonctions utilitaires
  const canDownload = (photo: Photo) => {
    if (photo.downloadPermission === 'public') return true;
    if (photo.downloadPermission === 'restricted' && (userPermission === 'agent' || userPermission === 'admin')) return true;
    if (photo.downloadPermission === 'admin' && userPermission === 'admin') return true;
    return false;
  };

  const getPermissionIcon = (permission: string) => {
    switch (permission) {
      case 'public': return <Unlock className="w-4 h-4 text-green-500" />;
      case 'restricted': return <Shield className="w-4 h-4 text-yellow-500" />;
      case 'admin': return <Lock className="w-4 h-4 text-red-500" />;
      default: return <Unlock className="w-4 h-4" />;
    }
  };

  const handleDownload = (photo: Photo) => {
    if (!canDownload(photo)) {
      alert('Vous n\'avez pas les permissions nécessaires pour télécharger cette image.');
      return;
    }
    // Simuler le téléchargement
    const link = document.createElement('a');
    link.href = photo.image;
    link.download = `${photo.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.jpg`;
    link.click();
  };

  const handleFileUpload = (files: FileList | null) => {
    if (!files || !isAdminMode) return;

    Array.from(files).forEach((file, index) => {
      const uploadId = `upload_${Date.now()}_${index}`;
      const newUpload: UploadProgress = {
        file,
        progress: 0,
        status: 'uploading',
        id: uploadId
      };

      setUploadProgress(prev => [...prev, newUpload]);

      // Simuler le processus d'upload
      const interval = setInterval(() => {
        setUploadProgress(prev => 
          prev.map(upload => {
            if (upload.id === uploadId) {
              const newProgress = Math.min(upload.progress + Math.random() * 30, 100);
              return {
                ...upload,
                progress: newProgress,
                status: newProgress === 100 ? 'completed' : 'uploading'
              };
            }
            return upload;
          })
        );
      }, 500);

      setTimeout(() => {
        clearInterval(interval);
        setUploadProgress(prev => 
          prev.map(upload => 
            upload.id === uploadId 
              ? { ...upload, progress: 100, status: 'completed' }
              : upload
          )
        );
      }, 3000);
    });
  };

  const openModal = (photo: Photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: 'prev' | 'next') => {
    if (!selectedPhoto) return;
    
    const currentIndex = filteredPhotos.findIndex(p => p.id === selectedPhoto.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredPhotos.length - 1;
    } else {
      newIndex = currentIndex < filteredPhotos.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedPhoto(filteredPhotos[newIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="dgch-gradient text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Camera className="w-12 h-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Médiathèque DGCH
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Découvrez notre collection de photos illustrant les projets, événements et activités 
              de la Direction Générale de la Construction et de l'Habitat
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="container-custom">
          {/* Admin Controls */}
          {isAdminMode && (
            <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex flex-wrap gap-3 items-center">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  <Settings className="w-3 h-3 mr-1" />
                  Mode Administration
                </Badge>
                <Dialog open={isUploadModalOpen} onOpenChange={setIsUploadModalOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                      <Upload className="w-4 h-4 mr-2" />
                      Ajouter Photos
                    </Button>
                  </DialogTrigger>
                </Dialog>
                <Dialog open={isAlbumModalOpen} onOpenChange={setIsAlbumModalOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm" variant="outline">
                      <FolderPlus className="w-4 h-4 mr-2" />
                      Nouvel Album
                    </Button>
                  </DialogTrigger>
                </Dialog>
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Rechercher des photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center">
              {/* Album Filter */}
              <Select value={selectedAlbum} onValueChange={setSelectedAlbum}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sélectionner un album" />
                </SelectTrigger>
                <SelectContent>
                  {albumOptions.map((album) => (
                    <SelectItem key={album} value={album}>
                      {album}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'albums' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('albums')}
                title="Vue Albums"
              >
                <BookOpen className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'grid' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('grid')}
                title="Vue Grille"
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('list')}
                title="Vue Liste"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Results Count and User Permissions */}
          <div className="mt-4 flex justify-between items-center text-sm">
            <div className="text-gray-600">
              {filteredPhotos.length} photo{filteredPhotos.length !== 1 ? 's' : ''} trouvée{filteredPhotos.length !== 1 ? 's' : ''}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-gray-500" />
                <Select value={userPermission} onValueChange={(value: 'public' | 'agent' | 'admin') => setUserPermission(value)}>
                  <SelectTrigger className="w-32 h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public</SelectItem>
                    <SelectItem value="agent">Agent</SelectItem>
                    <SelectItem value="admin">Admin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {userPermission === 'admin' && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setIsAdminMode(!isAdminMode)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  <Settings className="w-4 h-4 mr-1" />
                  {isAdminMode ? 'Quitter Admin' : 'Mode Admin'}
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="section-padding">
        <div className="container-custom">
          {viewMode === 'albums' ? (
            /* Albums View */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {albums.map((album, index) => (
                <Card 
                  key={album.id} 
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group fade-in"
                  onClick={() => setSelectedAlbum(album.name)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={album.coverImage}
                      alt={album.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <BookOpen className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <Badge className="absolute top-3 right-3 bg-black/50 text-white border-0">
                      {album.photoCount} photos
                    </Badge>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{album.name}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{album.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {album.createdDate}
                      </span>
                      {isAdminMode && (
                        <div className="flex gap-1">
                          <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                            <Edit className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-red-500">
                            <Trash2 className="w-3 h-3" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredPhotos.map((photo, index) => (
                <Card 
                  key={photo.id} 
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group fade-in"
                  onClick={() => openModal(photo)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ImageWithFallback
                      src={photo.image}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="absolute top-3 left-3 flex gap-2">
                      {getPermissionIcon(photo.downloadPermission)}
                    </div>
                    <Badge className="absolute top-3 right-3 bg-black/50 text-white border-0">
                      {photo.category}
                    </Badge>
                    {isAdminMode && (
                      <div className="absolute bottom-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button 
                          size="sm" 
                          variant="secondary" 
                          className="h-7 w-7 p-0"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Handle edit
                          }}
                        >
                          <Edit className="w-3 h-3" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive" 
                          className="h-7 w-7 p-0"
                          onClick={(e) => {
                            e.stopPropagation();
                            // Handle delete
                          }}
                        >
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">{photo.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{photo.description}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {photo.date}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {photo.location}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500">{photo.fileSize}</span>
                      {canDownload(photo) ? (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-6 px-2 text-xs"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDownload(photo);
                          }}
                        >
                          <Download className="w-3 h-3 mr-1" />
                          Télécharger
                        </Button>
                      ) : (
                        <span className="text-xs text-gray-400 flex items-center">
                          <Lock className="w-3 h-3 mr-1" />
                          Restreint
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPhotos.map((photo, index) => (
                <Card 
                  key={photo.id} 
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer fade-in"
                  onClick={() => openModal(photo)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-80 h-48 md:h-auto">
                      <ImageWithFallback
                        src={photo.image}
                        alt={photo.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="secondary">{photo.category}</Badge>
                        <div className="text-sm text-gray-500 flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {photo.date}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{photo.title}</h3>
                      <p className="text-gray-600 mb-4">{photo.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {photo.location}
                        </span>
                        <span>
                          Photographe: {photo.photographer}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {photo.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {filteredPhotos.length === 0 && (
            <div className="text-center py-16">
              <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Aucune photo trouvée</h3>
              <p className="text-gray-500">
                Essayez de modifier vos critères de recherche ou de filtrage.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Photo Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          {selectedPhoto && (
            <div className="relative">
              <DialogHeader className="p-6 pb-0">
                <DialogTitle className="text-xl font-semibold pr-8">
                  {selectedPhoto.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="relative group">
                <ImageWithFallback
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full max-h-[60vh] object-contain"
                />
                
                {/* Navigation Arrows */}
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePhoto('prev');
                  }}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 hover:bg-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePhoto('next');
                  }}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{selectedPhoto.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {selectedPhoto.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {selectedPhoto.location}
                  </div>
                  <div className="flex items-center">
                    <Camera className="w-4 h-4 mr-2" />
                    {selectedPhoto.photographer}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">{selectedPhoto.category}</Badge>
                  {selectedPhoto.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  {canDownload(selectedPhoto) ? (
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => handleDownload(selectedPhoto)}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger ({selectedPhoto.fileSize})
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" disabled>
                      <Lock className="w-4 h-4 mr-2" />
                      Accès Restreint
                    </Button>
                  )}
                  {isAdminMode && (
                    <>
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4 mr-2" />
                        Modifier
                      </Button>
                      <Button size="sm" variant="destructive">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Supprimer
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Upload Modal */}
      <Dialog open={isUploadModalOpen} onOpenChange={setIsUploadModalOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <Upload className="w-5 h-5 mr-2" />
              Ajouter de Nouvelles Photos
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* File Upload Area */}
            <div 
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer"
              onClick={() => document.getElementById('file-upload')?.click()}
            >
              <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-700 mb-2">Glissez vos images ici ou cliquez pour sélectionner</h3>
              <p className="text-gray-500 text-sm">Formats supportés: JPG, PNG, WebP (max 10MB)</p>
              <input
                id="file-upload"
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileUpload(e.target.files)}
              />
            </div>

            {/* Upload Progress */}
            {uploadProgress.length > 0 && (
              <div className="space-y-3">
                <h4 className="font-semibold">Uploads en cours</h4>
                {uploadProgress.map((upload) => (
                  <div key={upload.id} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">{upload.file.name}</span>
                        <span className="text-xs text-gray-500">{Math.round(upload.progress)}%</span>
                      </div>
                      <Progress value={upload.progress} className="h-2" />
                    </div>
                    {upload.status === 'completed' && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                    {upload.status === 'error' && (
                      <AlertTriangle className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Upload Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="upload-category">Catégorie</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.slice(1).map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="upload-album">Album</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner un album" />
                  </SelectTrigger>
                  <SelectContent>
                    {albums.map((album) => (
                      <SelectItem key={album.id} value={album.id}>
                        {album.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="upload-location">Lieu</Label>
                <Input placeholder="ex: Dakar, Thiès..." />
              </div>
              <div>
                <Label htmlFor="upload-permission">Permissions de téléchargement</Label>
                <Select defaultValue="public">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">
                      <div className="flex items-center">
                        <Unlock className="w-4 h-4 mr-2 text-green-500" />
                        Public
                      </div>
                    </SelectItem>
                    <SelectItem value="restricted">
                      <div className="flex items-center">
                        <Shield className="w-4 h-4 mr-2 text-yellow-500" />
                        Agents uniquement
                      </div>
                    </SelectItem>
                    <SelectItem value="admin">
                      <div className="flex items-center">
                        <Lock className="w-4 h-4 mr-2 text-red-500" />
                        Administrateurs uniquement
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="upload-description">Description</Label>
              <Textarea 
                placeholder="Description détaillée de la photo..."
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="upload-tags">Tags (séparés par des virgules)</Label>
              <Input placeholder="ex: inauguration, logement, dakar..." />
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={() => setIsUploadModalOpen(false)}>
              Annuler
            </Button>
            <Button>
              <Upload className="w-4 h-4 mr-2" />
              Publier les Photos
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Create Album Modal */}
      <Dialog open={isAlbumModalOpen} onOpenChange={setIsAlbumModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <FolderPlus className="w-5 h-5 mr-2" />
              Créer un Nouvel Album
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="album-name">Nom de l'album</Label>
              <Input placeholder="ex: Projets 2025" />
            </div>
            
            <div>
              <Label htmlFor="album-description">Description</Label>
              <Textarea 
                placeholder="Description de l'album..."
                rows={3}
              />
            </div>

            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                Vous pourrez ajouter des photos à cet album après sa création.
              </AlertDescription>
            </Alert>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={() => setIsAlbumModalOpen(false)}>
              Annuler
            </Button>
            <Button>
              <FolderPlus className="w-4 h-4 mr-2" />
              Créer l'Album
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}