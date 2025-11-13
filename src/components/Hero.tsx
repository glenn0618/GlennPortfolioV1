import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-5xl text-center space-y-8">
        <div className="space-y-4 animate-in fade-in duration-700">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
            Hello, I'm{" "}
            <span className="bg-gradient-dark bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
            A passionate developer crafting beautiful digital experiences
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in duration-700 delay-150">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-primary hover:bg-primary/90 text-primary-foreground group"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const element = document.querySelector("#projects");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="border-primary/20 hover:border-primary/40"
          >
            View Projects
          </Button>
        </div>

        <div className="pt-8 animate-in fade-in duration-700 delay-300">
          <p className="text-sm text-muted-foreground">Scroll to explore</p>
          <div className="mx-auto w-6 h-10 border-2 border-muted rounded-full mt-4 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-muted-foreground rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
