import { Badge } from "./ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Progress } from "./ui/progress"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "HTML & CSS", level: 95 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 80 }
      ]
    },
    {
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: 90 },
        { name: "UI/UX Design", level: 85 },
        { name: "Git", level: 92 },
        { name: "Docker", level: 78 }
      ]
    }
  ]

  const technologies = [
    "React", "Next.js", "JavaScript", "Node.js", "Python", "PostgreSQL", 
    "MongoDB", "Tailwind CSS", "Figma", "Git", "Docker", "AWS", 
    "Vercel", "Supabase", "Prisma", "GraphQL"
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Skills & Expertise</Badge>
          <h2 className="mb-6">
            Technologies I Work With
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always learning new technologies and improving my skills. Here are some of 
            the tools and technologies I'm proficient in.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="mb-8">Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}