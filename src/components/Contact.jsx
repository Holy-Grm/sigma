import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Mail, MapPin, Send, Linkedin } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log('Form envoyé:', formData)
    alert('Merci pour votre message! Je vous répondrai sous peu.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Courriel",
      content: "oligermain15@gmail.com",
      description: "Écrivez-moi",
      link: "mailto:oligermain15@gmail.com?subject=Information&body=Bonjour%20Olivier,%0D%0AJe%20souhaite%20te%20contacter%20concernant%20...",
      isClickable: true
    },

    {
      icon: Linkedin,
      title: "Linkedin",
      content: "www.linkedin.com/in/oligermain",
      description: "Connectons-nous",
      link: "https://www.linkedin.com/in/oligermain",
      isClickable: true
    },

    {
      icon: MapPin,
      title: "Ville",
      content: "Sherbrooke, Qc",
      description: "Disponible en personne et à distance",
      isClickable: false
    }
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Contactez moi</Badge>
          <h2 className="mb-6">
            Travaillons ensemble
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête ou simplement envie de discuter? N'hésitez pas à me contacter!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="mb-6">Envoyez moi un message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2">Nom</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Nom complet"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="Courriel" className="block mb-2">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="votre.courriel@exemple.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2">Sujet</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="À propos de..."
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="J'aimerais en connaitre davantage..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Envoyer
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6">Contact</h3>
              <p className="text-muted-foreground mb-8">
                Je suis toujours intéressé a discuter d'oppotunité de collaboration. Peu importe le sujet en tête écrivez moi.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                
                if (info.isClickable) {
                  return (
                    <a 
                      key={index} 
                      href={info.link}
                      target={info.title === "Linkedin" ? "_blank" : "_self"}
                      rel={info.title === "Linkedin" ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-200 group cursor-pointer"
                    >
                      <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="mb-1 group-hover:text-primary transition-colors">{info.title}</h4>
                        <p className="font-medium mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </a>
                  )
                } else {
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="mb-1">{info.title}</h4>
                        <p className="font-medium mb-1">{info.content}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  )
                }
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}