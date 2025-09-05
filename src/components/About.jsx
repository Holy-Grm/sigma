import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Timeline } from "./ui/timeline"
import { Code, Palette, Zap, Users } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Code",
      description: "Programation propre et maintenable"
    },
    {
      icon: Palette,
      title: "Design Créatif",
      description: "Conception d'interfaces soignées et intuitives"
    },
    {
      icon: Zap,
      title: "Efficacité",
      description: "Optimisation et rapidité du travail"
    },
    {
      icon: Users,
      title: "Travail d'équipe",
      description: "Collaboration efficace avec des équipes multidisciplinaires"
    }
  ]

  const timelineItems = [
    {
      date: "2024 - Présent",
      title: "Université de Sherbrooke",
      subtitle: "Programme coopératif en informatique",
      description: "Approfondissement des connaissances en informatique avec une approche pratique grâce au programme coopératif réputé.",
      type: "education"
    },
    {
      date: "2023 - 2024",
      title: "Stage en développement",
      subtitle: "Entreprise technologique",
      description: "Acquisition d'expérience pratique en développement d'applications et automatisation de processus complexes.",
      type: "work"
    },
    {
      date: "2022 - 2023",
      title: "Projets personnels",
      subtitle: "Développement autonome",
      description: "Exploration de la domotique et automatisation, développement de solutions créatives pour divers défis techniques.",
      type: "work"
    },
    {
      date: "Début",
      title: "Passion pour la technologie",
      subtitle: "Autodidacte",
      description: "Premiers pas dans la programmation avec les jeux vidéos, puis évolution vers l'automatisation et les projets complexes.",
      type: "education"
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">À propos</Badge>
          <h2 className="mb-6">
            Passionné par le futur
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            « Le meilleur moyen de prédire l'avenir, c'est de l'inventer. » — Alan Kay
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="mb-6">Mon parcours</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Ma passion pour la technologie a débuté dès mon jeune âge, par plaisir 
                d'automatiser tout ce qui m'entoure. À commencer par les jeux vidéos, puis la 
                domotique et finalement des tâches complexes au travail.
              </p>
              <p>
                J'approfondis actuellement mes connaissances à l'Université de Sherbrooke 
                réputée pour son programme coopératif. Ceci me permet d'acquérir une 
                expérience précieuse en travaillant sur des projets réels dans divers secteurs.
              </p>
            </div>
          </div>

          {/* Right Content - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="mb-2">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-20 pt-16 border-t border-border">
          <div className="text-center mb-12">
            <h3 className="mb-4">Mon Parcours</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              De la passion autodidacte aux études spécialisées, découvrez les étapes clés de mon évolution dans le domaine technologique.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Timeline items={timelineItems} />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-semibold text-primary mb-2">10+</div>
            <div className="text-sm text-muted-foreground">Projets completés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Utilisateurs heureux</div>
          </div>
        </div>
      </div>
    </section>
  )
}