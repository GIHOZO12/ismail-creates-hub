import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  period: string;
  highlights: string[];
}

const ProjectCard = ({ title, description, technologies, period, highlights }: ProjectCardProps) => {
  return (
    <Card className="bg-card-gradient border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-1 group">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <CardDescription className="text-muted-foreground text-sm">
              {period}
            </CardDescription>
          </div>
        </div>
        <p className="text-sm text-foreground/80 mt-2">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
        <ul className="space-y-1 text-sm text-muted-foreground">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              {highlight}
            </li>
          ))}
        </ul>
        <div className="flex gap-2 pt-2">
          <Button size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
            <Github className="mr-1 h-3 w-3" />
            Code
          </Button>
          <Button size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
            <ExternalLink className="mr-1 h-3 w-3" />
            Demo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;