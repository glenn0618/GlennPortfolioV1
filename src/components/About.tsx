import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <Card className="p-8 sm:p-12 shadow-3d hover:shadow-3d-hover border-border bg-gradient-card transition-all duration-500 hover:-translate-y-2 transform-gpu relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="space-y-6 text-center sm:text-left relative z-10">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a dedicated developer with a passion for creating elegant solutions to complex problems. 
              With expertise in modern web technologies, I focus on building responsive, user-friendly 
              applications that make a difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines clean code, thoughtful design, and a commitment to continuous learning. 
              I believe in the power of technology to transform ideas into reality and create meaningful 
              experiences for users.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
              or collaborating with fellow developers to push the boundaries of what's possible on the web.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
