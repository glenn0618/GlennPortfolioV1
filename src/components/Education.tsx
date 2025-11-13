import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    period: "2019 - 2023",
    description: "Focused on software engineering, algorithms, and web development.",
  },
  {
    degree: "Full Stack Development Certification",
    institution: "Online Learning Platform",
    period: "2023",
    description: "Comprehensive training in modern web technologies and best practices.",
  },
];

export const Education = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} id="education" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className={`p-8 shadow-3d hover:shadow-3d-hover transition-all duration-700 border-border group hover:-translate-y-1 transform-gpu bg-gradient-card relative overflow-hidden ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-accent rounded-lg shadow-md group-hover:shadow-lg group-hover:scale-110 group-hover:bg-primary transition-all duration-300 transform-gpu">
                    <GraduationCap className="h-8 w-8 text-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground mt-1 sm:mt-0 bg-secondary px-3 py-1 rounded-full shadow-sm">{edu.period}</span>
                  </div>
                  <p className="text-primary font-medium mb-3">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
