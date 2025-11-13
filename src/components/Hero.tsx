import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-5xl text-center space-y-8 relative z-10">
        <div className="space-y-4 animate-in fade-in duration-700 transform-gpu">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground tracking-tight drop-shadow-2xl" style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
            Hello, I'm{" "}
            <span className="relative inline-block">
              <span className="relative bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Your Name
              </span>
              <span className="absolute inset-0 blur-lg bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent opacity-50"></span>
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-primary-foreground/90 max-w-2xl mx-auto drop-shadow-lg">
            A passionate developer crafting beautiful digital experiences
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in duration-700 delay-150">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-background text-foreground hover:bg-background/90 shadow-3d hover:shadow-3d-hover hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
          >
            <span className="relative z-10">Get in Touch</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const element = document.querySelector("#projects");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border-2 border-primary-foreground/30 hover:border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 shadow-3d hover:shadow-3d-hover hover:-translate-y-1 transition-all duration-300"
          >
            View Projects
          </Button>
        </div>

        <div className="pt-8 animate-in fade-in duration-700 delay-300">
          <p className="text-sm text-primary-foreground/70">Scroll to explore</p>
          <div className="mx-auto w-6 h-10 border-2 border-primary-foreground/30 rounded-full mt-4 flex items-start justify-center p-2 shadow-3d">
            <div className="w-1 h-3 bg-primary-foreground/70 rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
