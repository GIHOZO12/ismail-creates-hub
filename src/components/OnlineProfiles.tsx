import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code, Layers, Brain, Trophy } from "lucide-react";

const profilesData = [
  {
    platform: "GitHub",
    username: "GIHOZO12",
    url: "https://github.com/GIHOZO12",
    description: "Source code for all my projects and contributions",
    icon: <Github className="h-5 w-5" />,
    verified: true
  },
  {
    platform: "DataCamp",
    username: "Ismail GIHOZO",
    url: "#",
    description: "Python API development certification",
    icon: <Brain className="h-5 w-5" />,
    verified: true
  },
  {
    platform: "freeCodeCamp",
    username: "Ismail GIHOZO",
    url: "#",
    description: "Frontend development certification",
    icon: <Code className="h-5 w-5" />,
    verified: true
  },
  {
    platform: "HuggingFace",
    username: "Available Soon",
    url: "#",
    description: "AI/ML models and experiments",
    icon: <Layers className="h-5 w-5" />,
    verified: false
  },
  {
    platform: "Kaggle",
    username: "Available Soon",
    url: "#",
    description: "Data science competitions and datasets",
    icon: <Trophy className="h-5 w-5" />,
    verified: false
  }
];

const OnlineProfiles = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            Online Presence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with me across various platforms and explore my work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {profilesData.map((profile, index) => (
            <Card key={index} className="bg-card-gradient border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {profile.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{profile.platform}</CardTitle>
                      <CardDescription className="text-sm">
                        @{profile.username}
                      </CardDescription>
                    </div>
                  </div>
                  {profile.verified && (
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{profile.description}</p>
                <Button 
                  variant={profile.verified ? "default" : "outline"}
                  className={profile.verified ? "w-full bg-accent-gradient hover:shadow-glow" : "w-full"}
                  onClick={() => profile.url !== "#" && window.open(profile.url, "_blank")}
                  disabled={profile.url === "#"}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {profile.verified ? "Visit Profile" : "Coming Soon"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineProfiles;