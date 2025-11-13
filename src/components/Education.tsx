import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

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
  return (
    <section id="education" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-8 shadow-elegant hover:shadow-hover transition-all duration-300 border-border"
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="p-4 bg-accent rounded-lg">
                    <GraduationCap className="h-8 w-8 text-foreground" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground mt-1 sm:mt-0">{edu.period}</span>
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
