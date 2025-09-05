import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { Github, Linkedin, Mail, Twitter, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Description */}
          <div className="md:col-span-2">
            <h3 className="mb-4">John Doe</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Full-stack developer and designer passionate about creating 
              beautiful, functional digital experiences that make a difference.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Services</h4>
            <div className="space-y-3 text-muted-foreground">
              <div>Web Development</div>
              <div>Mobile Apps</div>
              <div>UI/UX Design</div>
              <div>Consulting</div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm">
            © {currentYear} John Doe. All rights reserved.
          </div>
          
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using React & Tailwind CSS
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"
            onClick={scrollToTop}
            className="hover:text-primary"
          >
            Back to top ↑
          </Button>
        </div>
      </div>
    </footer>
  )
}