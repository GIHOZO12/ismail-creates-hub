import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";

const experienceData = [
  {
    type: "work",
    title: "Code to Connect Fellowship",
    organization: "Solvit Africa",
    period: "June 2025 – Present",
    description: "Django Internship Program",
    highlights: [
      "Learning to collaborate within a team",
      "Building backend API using Django",
      "Understanding AI integration in workplace",
      "Developing presentation skills for employers"
    ],
    icon: <Briefcase className="h-4 w-4" />
  },
  {
    type: "education",
    title: "Bachelor of Science in Information Technology",
    organization: "University of Rwanda – College of Science and Technology",
    period: "In Progress",
    description: "Comprehensive IT education with focus on software development",
    highlights: [
      "Strong foundation in computer science principles",
      "Hands-on experience with modern technologies",
      "Active participation in tech communities"
    ],
    icon: <GraduationCap className="h-4 w-4" />
  }
];

const achievements = [
  "Participation in codeExtrem hackathon",
  "DataCamp Certificate for Building Python API",
  "Frontend Certificate from freeCodeCamp"
];

const ExperienceTimeline = () => {
  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey in technology and continuous learning path.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((item, index) => (
            <Card key={index} className="bg-card-gradient border-border/50 hover:shadow-card transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-foreground/80">
                        {item.organization}
                      </CardDescription>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {item.period}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{item.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {item.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span className="text-muted-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}

          <Card className="bg-card-gradient border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-primary" />
                Achievements & Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-muted/50">
                    <Trophy className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;