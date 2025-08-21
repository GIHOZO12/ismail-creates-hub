import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Palette } from "lucide-react";

const skillsData = {
  frontend: {
    icon: <Globe className="h-5 w-5" />,
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Bootstrap", "Tailwind CSS"]
  },
  backend: {
    icon: <Code className="h-5 w-5" />,
    title: "Backend",
    skills: ["Python", "Django", "Django REST Framework", "API Development"]
  },
  database: {
    icon: <Database className="h-5 w-5" />,
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "SQLite"]
  },
  tools: {
    icon: <Palette className="h-5 w-5" />,
    title: "Tools & Others",
    skills: ["Git", "React Native", "AI Integration", "Team Collaboration"]
  }
};

const SkillsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications and solving complex problems.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skillsData).map(([key, category]) => (
            <Card key={key} className="bg-card-gradient border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg group-hover:text-primary transition-colors">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;