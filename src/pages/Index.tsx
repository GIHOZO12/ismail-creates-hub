import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Mail, MapPin, Phone, ArrowDown, PlayCircle } from "lucide-react";
import CVButton from "@/components/CVButton";
import ProjectCard from "@/components/ProjectCard";
import ContactForm from "@/components/ContactForm";
import SkillsSection from "@/components/SkillsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import OnlineProfiles from "@/components/OnlineProfiles";
import ReflectionJournal from "@/components/ReflectionJournal";
import AIAssistant from "@/components/AIAssistant";

const projectsData = [
  {
    title: "Citizen Engagement System",
    description: "A comprehensive platform for citizens to report public service issues with real-time tracking and location-based routing.",
    technologies: ["Django", "React", "Ant Design", "PostgreSQL"],
    period: "May 2025",
    highlights: [
      "Built complaint submission platform for public service issues",
      "Implemented location-based complaint routing system",
      "Designed interactive frontend dashboards",
      "Real-time status updates for submitted complaints"
    ]
  },
  {
    title: "School Management System",
    description: "Complete school administration system with student management, scheduling, and discipline tracking capabilities.",
    technologies: ["Django", "React", "MySQL", "REST API"],
    period: "March 2025",
    highlights: [
      "Student management with comprehensive profiles",
      "Automated timetable scheduling system",
      "Discipline tracking and reporting",
      "Integrated backend APIs for CRUD operations"
    ]
  },
  {
    title: "AI-based e-Clinic Mobile App",
    description: "Innovative healthcare application with AI-driven symptom checking and multilingual support.",
    technologies: ["React Native", "Django", "AI/ML", "REST API"],
    period: "January 2025",
    highlights: [
      "AI-driven symptom checker with diagnostic suggestions",
      "Multilingual support (English, French, Kinyarwanda)",
      "Mobile-first responsive design",
      "Django backend with comprehensive API"
    ]
  }
];

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };


  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-subtle-gradient" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="space-y-2">
                <Badge variant="outline" className="mb-4">
                  Full-Stack Developer
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Hello, I'm{" "}
                  <span className="bg-hero-gradient bg-clip-text text-transparent">
                    Ismail GIHOZO
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Enthusiastic IT student passionate about building impactful web applications 
                  with Django, React, and modern technologies.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Kigali, Rwanda
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +250 783227185
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  gihozoismail@gmail.com
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <CVButton />
                <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-primary"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/lovable-uploads/e23002d5-603d-43d1-b490-64132b7d955e.png"
                  alt="Ismail GIHOZO - Full-Stack Developer"
                  className="w-full max-w-md mx-auto rounded-2xl shadow-elegant animate-glow-pulse"
                />
              </div>
              <div className="absolute inset-0 bg-hero-gradient rounded-2xl blur-3xl opacity-20 animate-glow-pulse" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => scrollToSection('about')}
            className="hover:text-primary"
          >
            <ArrowDown className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold bg-hero-gradient bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card-gradient border-border/50 text-left">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Professional Summary</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a results-driven IT student with hands-on experience in web application 
                    development. I'm passionate about solving real-world problems through technology 
                    and eager to contribute to impactful systems that make a difference.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card-gradient border-border/50 text-left">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Current Focus</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently participating in the Code to Connect fellowship at Solvit Africa, 
                    where I'm learning team collaboration, building Django APIs, and understanding 
                    AI integration in the workplace.
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card-gradient border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <PlayCircle className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold">Intro Video</h3>
                </div>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/HZOzItLiUk0"
                    title="Ismail GIHOZO - Introduction Video"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work in full-stack development, from healthcare to civic engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <ExperienceTimeline />

      {/* Online Profiles */}
      <OnlineProfiles />

      {/* Reflection Journal */}
      <ReflectionJournal />

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              © 2025 Ismail GIHOZO. Built with React, TypeScript, and Tailwind CSS.
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:text-primary">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default Index;