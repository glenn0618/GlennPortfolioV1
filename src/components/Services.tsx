import { Card } from "@/components/ui/card";
import { Code, Smartphone, Globe, Paintbrush } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Building responsive and performant web applications using modern technologies and best practices.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Creating beautiful, mobile-first designs that work seamlessly across all devices and screen sizes.",
  },
  {
    icon: Globe,
    title: "API Integration",
    description: "Integrating third-party services and building custom APIs for seamless data exchange.",
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces with focus on user experience and accessibility.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I offer a range of services to help bring your digital projects to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 shadow-elegant hover:shadow-hover transition-all duration-300 border-border group cursor-pointer"
              >
                <div className="mb-6">
                  <div className="inline-block p-4 bg-accent rounded-lg group-hover:bg-primary transition-colors">
                    <Icon className="h-8 w-8 text-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
