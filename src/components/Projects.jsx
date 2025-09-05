import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"
import { ImageWithFallback } from "./figma/ImageWithFallback"
import { ExternalLink, Github } from "lucide-react"
import { useState } from "react"

export function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: "Master Excel",
      description: "Développement de projets avancés impliquant la consolidation de plus de 25 fichiers Excel avec tableaux de bord dynamiques et analyses automatisées.",
      detailedDescription: "Ce projet consistait à consolider et analyser des données provenant de multiples sources Excel. J'ai créé des tableaux de bord interactifs avec des graphiques dynamiques, des tableaux croisés dynamiques avancés, et des systèmes d'analyse automatisée pour optimiser les processus de reporting.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxleGNlbCUyMGRhdGF8ZW58MXx8fHwxNzU2OTM2OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Excel", "Tableaux croisés dynamiques", "Dashboards", "VBA"],
      category: "Data Analysis",
      status: "Terminé"
    },
    {
      title: "Automation Visuelle",
      description: "Transforme les données CSV/Excel en graphiques visuels pour la chaîne de production d'usine avec génération automatique de diagrammes.",
      detailedDescription: "Application qui automatise la transformation de données de production en visualisations graphiques. Utilise Graphviz pour générer des diagrammes de flux de production en temps réel, permettant aux gestionnaires d'usine de visualiser instantanément l'état de leur chaîne de production.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NTY5MzY5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["HTML", "CSS", "Graphviz DOT", "JavaScript"],
      category: "Data Visualization",
      status: "Terminé"
    },
    {
      title: "Excel VBA",
      description: "Développement d'outils Excel automatisés avec interface utilisateur intégrée pour la sélection dynamique de fichiers et le traitement de données.",
      detailedDescription: "Suite d'outils VBA avancés avec interfaces utilisateur personnalisées. Inclut des systèmes de sélection de fichiers dynamiques, des macros d'automatisation de processus répétitifs, et l'intégration avec Python pour les analyses de données complexes.",
      image: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw3fHx2YmElMjBleGNlbHxlbnwxfHx8fDE3NTY5MzY5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["VBA", "Python", "Excel", "Automation"],
      category: "Automation",
      status: "Terminé"
    },
    {
      title: "PixelBot",
      description: "Automatise les tâches visuelles répétitives grâce à la reconnaissance d'images en temps réel avec système de raccourcis clavier personnalisés.",
      detailedDescription: "Bot d'automatisation avancé utilisant la reconnaissance d'images pour automatiser des tâches répétitives sur ordinateur. Système de configuration JSON flexible, détection d'images en temps réel, et intégration de raccourcis clavier personnalisés pour une utilisation optimale.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw2fHxhdXRvbWF0aW9uJTIwcm9ib3R8ZW58MXx8fHwxNzU2OTM2OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["Python", "OpenCV", "JSON", "Image Recognition"],
      category: "Automation",
      status: "Terminé"
    },
    {
      title: "Solveur de Sudoku",
      description: "Algorithme de résolution de Sudoku développé comme projet universitaire avec optimisations de performance avancées.",
      detailedDescription: "Implémentation d'un algorithme de résolution de Sudoku optimisé en C++. Utilise des techniques de backtracking avec optimisations heuristiques, capable de résoudre des grilles de difficulté variable en temps optimal. Projet développé dans le cadre de cours d'algorithmes avancés.",
      image: "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWRva3V8ZW58MXx8fHwxNzU2OTM2OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["C++", "Algorithmes", "Backtracking"],
      category: "Algorithm",
      status: "Terminé"
    },
    {
      title: "Base de Données Relationnelle",
      description: "Conception et implémentation d'une base de données relationnelle complète pour une chaîne de restaurants avec optimisations de performance.",
      detailedDescription: "Projet complet de conception de base de données pour une chaîne de restaurants. Inclut la modélisation UML complète, l'implémentation PostgreSQL avec contraintes d'intégrité, les procédures stockées, et l'optimisation des requêtes pour de gros volumes de données.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZXxlbnwxfHx8fDE3NTY5MzY5MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["PostgreSQL", "UML", "SQL", "Database Design"],
      category: "Database",
      status: "Terminé"
    },
    {
      title: "Structures de Données Avancées",
      description: "Implémentation complète de structures de données complexes from scratch incluant des optimisations de performance personnalisées.",
      detailedDescription: "Implémentation from scratch de structures de données avancées en C++: deques double-ended, skip lists avec probabilités optimisées, arbres binaires de recherche équilibrés. Chaque structure inclut des tests de performance et des optimisations mémoire spécifiques.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc3RydWN0dXJlfGVufDF8fHx8MTc1NjkzNjkzMXww&ixlib=rb-4.1.0&q=80&w=1080",
      technologies: ["C++", "Data Structures", "Algorithms", "Performance"],
      category: "Computer Science",
      status: "Terminé"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Mes Réalisations</Badge>
          <h2 className="mb-6">
            Projets dont je suis fier
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Voici quelques-uns de mes projets récents qui démontrent mes compétences en développement, 
            analyse de données et résolution de problèmes.
          </p>
        </div>

        {/* Horizontal Carousel with Vertical Cards */}
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:scale-[1.02] h-full">
                        <div className="relative overflow-hidden">
                          <ImageWithFallback
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge variant="default" className="bg-green-600/90 text-white">
                              {project.status}
                            </Badge>
                          </div>
                          <div className="absolute top-4 right-4">
                            <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">
                              {project.category}
                            </Badge>
                          </div>
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </div>
                        
                        <CardContent className="p-6">
                          <h3 className="mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                          <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                            {project.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                            {project.technologies.length > 3 && (
                              <Badge variant="secondary" className="text-xs">
                                +{project.technologies.length - 3}
                              </Badge>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl mb-2">{project.title}</DialogTitle>
                        <div className="flex gap-2 mb-4">
                          <Badge variant="default" className="bg-green-600">
                            {project.status}
                          </Badge>
                          <Badge variant="outline">
                            {project.category}
                          </Badge>
                        </div>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        <div className="relative overflow-hidden rounded-lg">
                          <ImageWithFallback
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover"
                          />
                        </div>
                        
                        <DialogDescription className="text-base leading-relaxed">
                          {project.detailedDescription}
                        </DialogDescription>
                        
                        <div>
                          <h4 className="font-semibold mb-3">Technologies utilisées</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex gap-3 pt-4">
                          <Button className="flex-1">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Voir le projet
                          </Button>
                          <Button variant="outline">
                            <Github className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            <Github className="h-4 w-4 mr-2" />
            Voir tous mes projets sur GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}