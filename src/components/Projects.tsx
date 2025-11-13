import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with product management, cart functionality, and secure checkout.",
    tags: ["React", "TypeScript", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features.",
    tags: ["Next.js", "PostgreSQL", "Prisma"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio template with smooth animations and responsive design.",
    tags: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application with location-based forecasts and interactive maps.",
    tags: ["React", "API Integration", "Charts"],
    github: "#",
    demo: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden shadow-elegant hover:shadow-hover transition-all duration-300 border-border group"
            >
              <div className="h-48 bg-gradient-dark"></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
