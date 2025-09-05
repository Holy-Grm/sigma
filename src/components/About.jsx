import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Code, Palette, Zap, Users } from "lucide-react"

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code...jsx",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful and intuitive user interfaces"
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimizing for speed and user experience"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively with cross-functional teams"
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Me</Badge>
          <h2 className="mb-6">
            Passionate Developer with a Vision
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a full-stack developer and designer based in San Francisco. I specialize in 
            creating digital experiences that are not only visually appealing but also highly 
            functional and user-friendly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="mb-6">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                My passion for technology started early when I built my first website at age 16. 
                Since then, I've been constantly learning and evolving with the ever-changing 
                landscape of web development.
              </p>
              <p>
                I hold a Computer Science degree from Stanford University and have worked with 
                startups and Fortune 500 companies, helping them achieve their digital goals 
                through innovative solutions.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or hiking in the beautiful California mountains.
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

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-semibold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-primary mb-2">25+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-semibold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}