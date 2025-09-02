export const projectsData = [
  {
    id: 1,
    title: 'Cité Djiddah Thiaroye Kao',
    description: 'Construction de 1,500 logements sociaux avec infrastructures modernes et équipements communautaires.',
    type: 'Logement Social',
    region: 'Dakar',
    status: 'En cours',
    budget: '75 milliards FCFA',
    startDate: 'Jan 2023',
    endDate: 'Déc 2025',
    progress: 65,
    beneficiaries: 7500,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop'
  },
  {
    id: 2,
    title: 'Zone Économique Spéciale de Diass',
    description: 'Développement urbain intégré avec zone industrielle, logements et services.',
    type: 'Développement Urbain',
    region: 'Thiès',
    status: 'Planification',
    budget: '200 milliards FCFA',
    startDate: 'Mars 2024',
    endDate: 'Déc 2027',
    progress: 15,
    beneficiaries: 25000,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop'
  },
  {
    id: 3,
    title: 'Rénovation Urbaine Médina',
    description: 'Modernisation des infrastructures et amélioration de l\'habitat dans le quartier historique.',
    type: 'Rénovation',
    region: 'Dakar',
    status: 'En cours',
    budget: '45 milliards FCFA',
    startDate: 'Juin 2022',
    endDate: 'Juin 2024',
    progress: 80,
    beneficiaries: 15000,
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop'
  },
  {
    id: 4,
    title: 'Cité Universitaire de Saint-Louis',
    description: 'Construction de résidences universitaires modernes avec 2,000 chambres.',
    type: 'Éducation',
    region: 'Saint-Louis',
    status: 'En cours',
    budget: '30 milliards FCFA',
    startDate: 'Sep 2023',
    endDate: 'Sep 2025',
    progress: 45,
    beneficiaries: 4000,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop'
  },
  {
    id: 5,
    title: 'Centre des Conférences de Dakar',
    description: 'Infrastructure moderne pour conférences internationales et événements.',
    type: 'Infrastructure',
    region: 'Dakar',
    status: 'Terminé',
    budget: '40 milliards FCFA',
    startDate: 'Jan 2020',
    endDate: 'Mars 2024',
    progress: 100,
    beneficiaries: 50000,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop'
  },
  {
    id: 6,
    title: 'Village de Vacances Saly',
    description: 'Complexe touristique avec logements de vacances et équipements récréatifs.',
    type: 'Tourisme',
    region: 'Thiès',
    status: 'Terminé',
    budget: '25 milliards FCFA',
    startDate: 'Mars 2021',
    endDate: 'Déc 2023',
    progress: 100,
    beneficiaries: 3000,
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop'
  }
];

export type Project = typeof projectsData[0];