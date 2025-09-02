import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Badge } from '../ui/badge';
import { Alert, AlertDescription } from '../ui/alert';
import { 
  Shield,
  User,
  LogIn,
  FileText,
  Calendar,
  BarChart3,
  Settings,
  Bell,
  Download,
  Upload,
  CheckCircle,
  Clock,
  AlertCircle,
  Users,
  Building2,
  MapPin,
  TrendingUp,
  Eye,
  Lock,
  Mail,
  Phone
} from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface EspaceAgentProps {
  onNavigate: (page: string) => void;
}

export function EspaceAgent({ onNavigate }: EspaceAgentProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  // Données simulées pour le tableau de bord
  const dashboardStats = [
    { icon: Building2, label: 'Projets Assignés', value: '12', color: 'text-blue-600', change: '+2' },
    { icon: FileText, label: 'Rapports à Valider', value: '8', color: 'text-orange-600', change: '+3' },
    { icon: Users, label: 'Équipe', value: '24', color: 'text-green-600', change: '+1' },
    { icon: TrendingUp, label: 'Performance', value: '94%', color: 'text-purple-600', change: '+5%' },
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'validation',
      title: 'Validation du rapport Cité Djiddah',
      time: 'Il y a 2 heures',
      status: 'completed',
      priority: 'high'
    },
    {
      id: 2,
      type: 'assignment',
      title: 'Nouveau projet assigné: Zone Diass',
      time: 'Il y a 4 heures',
      status: 'pending',
      priority: 'medium'
    },
    {
      id: 3,
      type: 'meeting',
      title: 'Réunion équipe technique',
      time: 'Aujourd\'hui 14:00',
      status: 'upcoming',
      priority: 'high'
    },
    {
      id: 4,
      type: 'document',
      title: 'Nouveau document réglementaire',
      time: 'Hier',
      status: 'info',
      priority: 'low'
    }
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: 'Inspection chantier Rufisque',
      dueDate: '2024-11-20',
      priority: 'high',
      project: 'Logements Sociaux Rufisque'
    },
    {
      id: 2,
      title: 'Rapport mensuel Novembre',
      dueDate: '2024-11-22',
      priority: 'medium',
      project: 'Administration Générale'
    },
    {
      id: 3,
      title: 'Formation nouvelle réglementation',
      dueDate: '2024-11-25',
      priority: 'medium',
      project: 'Formation Continue'
    }
  ];

  const quickActions = [
    { icon: Upload, label: 'Téléverser Rapport', action: 'upload-report' },
    { icon: Calendar, label: 'Planning', action: 'schedule' },
    { icon: Users, label: 'Mon Équipe', action: 'team' },
    { icon: BarChart3, label: 'Statistiques', action: 'stats' },
    { icon: Settings, label: 'Paramètres', action: 'settings' },
    { icon: Bell, label: 'Notifications', action: 'notifications' }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation de l'authentification
    if (loginForm.email && loginForm.password) {
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoginForm({ email: '', password: '' });
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'validation': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'assignment': return <FileText className="w-4 h-4 text-blue-500" />;
      case 'meeting': return <Calendar className="w-4 h-4 text-purple-500" />;
      case 'document': return <FileText className="w-4 h-4 text-gray-500" />;
      default: return <AlertCircle className="w-4 h-4 text-gray-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-full max-w-md">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <div className="w-16 h-16 dgch-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl">Espace Agent DGCH</CardTitle>
              <p className="text-gray-600">Accès sécurisé pour les agents de la DGCH</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="email">Adresse e-mail</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre.email@dgch.sn"
                      value={loginForm.email}
                      onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="password">Mot de passe</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={loginForm.password}
                      onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                      className="pl-10 pr-10"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Eye className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                    </Button>
                  </div>
                </div>
                
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Démo:</strong> Utilisez n'importe quelle adresse e-mail et mot de passe pour vous connecter.
                  </AlertDescription>
                </Alert>

                <Button type="submit" className="w-full dgch-gradient">
                  <LogIn className="w-4 h-4 mr-2" />
                  Se connecter
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t">
                <div className="text-center text-sm text-gray-600 space-y-2">
                  <p>Besoin d'aide ?</p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="ghost" size="sm">
                      <Mail className="w-4 h-4 mr-1" />
                      Support IT
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Phone className="w-4 h-4 mr-1" />
                      +221 33 XXX XX XX
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Agent */}
      <section className="dgch-gradient text-white py-8">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">Tableau de Bord Agent</h1>
              <p className="text-blue-100">Bienvenue, Agent DGCH</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <Bell className="w-4 h-4 mr-2" />
                3 Notifications
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10" onClick={handleLogout}>
                <LogIn className="w-4 h-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="section-padding">
        <div className="container-custom">
          <Tabs defaultValue="dashboard" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="dashboard">Tableau de Bord</TabsTrigger>
              <TabsTrigger value="projects">Mes Projets</TabsTrigger>
              <TabsTrigger value="reports">Rapports</TabsTrigger>
              <TabsTrigger value="team">Équipe</TabsTrigger>
              <TabsTrigger value="profile">Profil</TabsTrigger>
            </TabsList>

            <TabsContent value="dashboard" className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardStats.map((stat, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-gray-600 text-sm">{stat.label}</p>
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                          <p className="text-sm text-green-600">{stat.change} ce mois</p>
                        </div>
                        <stat.icon className={`w-8 h-8 ${stat.color}`} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Quick Actions */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="w-5 h-5 mr-2" />
                      Actions Rapides
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-3">
                      {quickActions.map((action, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          className="h-auto p-4 flex flex-col items-center text-center"
                        >
                          <action.icon className="w-6 h-6 mb-2" />
                          <span className="text-xs">{action.label}</span>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activities */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Activités Récentes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivities.map((activity) => (
                        <div key={activity.id} className="flex items-start space-x-3">
                          {getActivityIcon(activity.type)}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                            <p className="text-xs text-gray-500">{activity.time}</p>
                          </div>
                          <Badge variant="outline" className={getPriorityColor(activity.priority)}>
                            {activity.priority}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Tasks */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Tâches à Venir
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingTasks.map((task) => (
                        <div key={task.id} className="border-l-4 border-primary pl-4">
                          <h4 className="text-sm font-medium text-gray-900">{task.title}</h4>
                          <p className="text-xs text-gray-600">{task.project}</p>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-gray-500">{task.dueDate}</span>
                            <Badge variant="outline" className={getPriorityColor(task.priority)}>
                              {task.priority}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="projects">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Mes Projets Assignés</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Building2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">Gestion des Projets</h3>
                    <p className="text-gray-500">Interface de gestion des projets assignés en cours de développement.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reports">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Rapports et Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">Centre de Rapports</h3>
                    <p className="text-gray-500">Module de gestion des rapports et documents en cours de développement.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="team">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Mon Équipe</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">Gestion d'Équipe</h3>
                    <p className="text-gray-500">Interface de collaboration d'équipe en cours de développement.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Mon Profil</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <User className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-600 mb-2">Profil Agent</h3>
                    <p className="text-gray-500">Gestion du profil utilisateur en cours de développement.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}