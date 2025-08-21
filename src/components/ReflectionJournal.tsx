import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, ArrowRight } from "lucide-react";

const journalEntries = [
  {
    title: "The Journey into Full-Stack Development",
    date: "December 2024",
    excerpt: "Starting my journey with Django and React has opened up a new world of possibilities. The ability to create both backend APIs and interactive frontends feels like having superpowers...",
    readTime: "3 min read"
  },
  {
    title: "Learning AI Integration in Real Projects", 
    date: "November 2024",
    excerpt: "Working on the AI-based e-Clinic project taught me that AI isn't just about complex algorithms - it's about solving real problems for real people. The multilingual support was particularly challenging...",
    readTime: "5 min read"
  },
  {
    title: "Code Collaboration Lessons",
    date: "October 2024",
    excerpt: "The Code to Connect fellowship at Solvit Africa is teaching me that coding is just one part of software development. Communication, teamwork, and understanding business needs are equally important...",
    readTime: "4 min read"
  }
];

const ReflectionJournal = () => {
  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">
            Reflection Journal
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My thoughts on technology, learning experiences, and insights from my development journey.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {journalEntries.map((entry, index) => (
            <Card key={index} className="bg-card-gradient border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {entry.date}
                    <span className="mx-2">•</span>
                    {entry.readTime}
                  </div>
                  <BookOpen className="h-4 w-4 text-primary" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {entry.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {entry.excerpt}
                </p>
                <Button variant="ghost" className="p-0 h-auto hover:text-primary group/btn">
                  Read full article
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
          
          <Card className="bg-card-gradient border-border/50 border-dashed">
            <CardContent className="flex items-center justify-center py-12">
              <div className="text-center space-y-4">
                <BookOpen className="h-8 w-8 text-muted-foreground mx-auto" />
                <div>
                  <CardTitle className="text-lg mb-2">More Coming Soon</CardTitle>
                  <CardDescription>
                    I regularly share my thoughts and experiences. Check back for new entries!
                  </CardDescription>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ReflectionJournal;