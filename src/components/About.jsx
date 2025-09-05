import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Timeline } from "./ui/timeline"
import { Code, Palette, Zap, Users } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Code",
      description: "Programmation propre et maintenable"
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
      date: "Hiver 2026",
      title: "À la recherche d'un stage",
      subtitle: "",
      description: "Dates suggérées : du 5 janvier au 17 avril",
      type: "travail"
    },
    {
      date: "2024 - 2027",
      title: "Université de Sherbrooke",
      subtitle: "Baccalauréat en sciences - Informatique de gestion",
      description: "Programme coopératif",
      type: "education"
    },
    {
      date: "Été 2025",
      title: "BRP",
      subtitle: "Stagiaire aux processus et technologies d'exécution",
      description: "Développement de solutions d'analyse de données pour l'optimisation manufacturière",
      type: "travail"
    },
    {
      date: "2022 - Aujourd'hui",
      title: "Ville de Sherbrooke",
      subtitle: "Répartiteur 911",
      description: "Répartition d'urgence 911, police et incendie",
      type: "travail"
    },
    {
      date: "2018 - 2022",
      title: "Gouvernement du Québec - Sûreté du Québec",
      subtitle: "Répartiteur d'appels d'urgence",
      description: "Répartition d'appels policiers d'urgence.",
      type: "travail"
    },
    {
      date: "2015 - 2018",
      title: "CÉGEP de Saint-Laurent",
      subtitle: "DEC en musique classique",
      description: "Interprétation classique",
      type: "education"
    },
    {
      date: "2012 - 2018",
      title: "Service en restauration",
      subtitle: "Emplois étudiants de service en restauration",
      description: "Service à la clientèle",
      type: "travail"
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

        {/* Timeline Section - Full Height */}
        <div className="mt-20 pt-8 border-t border-border">
          <div className="text-center mb-8">
            <h3 className="mb-4">Mon expérience</h3>
          </div>
          {/* Timeline takes full available space - much taller for scroll effect */}
          <div className="h-[200vh] min-h-[1200px]">
            <Timeline items={timelineItems} />
          </div>
        </div>
      </div>
    </section>
  )
}