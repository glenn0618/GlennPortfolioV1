import { Card } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export const About = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} id="about" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <Card className={`p-8 sm:p-12 shadow-3d hover:shadow-3d-hover border-border bg-gradient-card transition-all duration-700 hover:-translate-y-2 transform-gpu relative overflow-hidden group ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {/* Image Section */}
            <div className="md:col-span-2 flex items-center justify-center">
              <div className="relative group/img">
                <div className="absolute inset-0 bg-gradient-dark rounded-2xl blur-xl opacity-50 group-hover/img:opacity-75 transition-opacity"></div>
                <div className="relative w-full aspect-square max-w-[300px] mx-auto rounded-2xl overflow-hidden shadow-3d border-4 border-primary/10 group-hover/img:border-primary/30 transition-all">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                    alt="Profile" 
                    className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-20 group-hover/img:opacity-0 transition-opacity"></div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:col-span-3 space-y-6 flex flex-col justify-center">
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
          </div>
        </Card>
      </div>
    </section>
  );
};
