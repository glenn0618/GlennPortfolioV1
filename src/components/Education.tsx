import { Card } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const education = [
  {
    degree: "Bachelor OF SCIENCE IN INFORMATION TECHNOLOGY",
    institution: "UNIVERSITY OF MINDANAO",
    period: "2021 - 2025 (GRADUATED)",
    description:
      "Focused on software engineering, algorithms, and web development.",
  },
  {
    degree: "SCIENCE TECHNOLOGY ENGINEERING AND MATHEMATICS (STEM)",
    institution: "DAVAO DOCTOR'S COLLEGE INC",
    period: "2018 - 2020 (GRADUATED)",
    description:
      "LEARNED ADVANCED SCIENCE AND MATHEMATICS CONCEPTS WITH A FOCUS ON PRACTICAL APPLICATIONS.",
  },
];

const certifications = [
  {
    title: "INFORMATION TECHNOLOGY SPECIALIST IN HTML & CSS",
    issuer: "MICROSOFT CERTIPORT",
    year: "2023 - 2028",
    description:
      "Mastered fundamental algorithms, ES6, and problem-solving with JavaScript.",
  },
  {
    title: "RESPONSIVE WEB DESIGN",
    issuer: "freeCodeCamp",
    year: "2023 - 2028",
    description:
      "Developed modern, accessible layouts using HTML5, CSS3, and Flexbox/Grid.",
  },
  {
    title: "INFORMATION TECHNOLOGY SPECIALIST IN NETWORK SECURITY",
    issuer: "MICROSOFT CERTIPORT",
    year: "2024 - 2029",
    description:
      "COVER IN NETWORK SECURITY PRINCIPLES, THREATS, AND PROTECTION MECHANISMS.",
  },
    {
    title: "INFORMATION TECHNOLOGY SPECIALIST IN CYBERSECURITY",
    issuer: "MICROSOFT CERTIPORT",
    year: "2024 - 2029",
    description:
      "COVER IN CYBERSECURITY FUNDAMENTALS, THREATS, AND RISK MANAGEMENT. AS WELL AS BEST PRACTICES TO PROTECT SYSTEMS AND DATA.",
  }
];

export const Education = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} id="education" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        {/* --- Education Header --- */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        {/* --- Education Cards --- */}
        <div className="space-y-8 mb-20">
          {education.map((edu, index) => (
            <Card
              key={index}
              className={`p-8 shadow-3d hover:shadow-3d-hover transition-all duration-700 border-border group hover:-translate-y-1 transform-gpu bg-gradient-card relative overflow-hidden text-align justify ${
                isVisible ? "fade-in-up" : "opacity-0"
              }`}
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
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <span className="text-sm text-muted-foreground mt-1 sm:mt-0 bg-secondary px-3 py-1 rounded-full shadow-sm">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-primary font-medium mb-3">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* --- Certifications Header --- */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "fade-in-up" : "opacity-0"
          }`}
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            Certifications
          </h3>
          <div className="w-16 h-1 bg-primary mx-auto"></div>
        </div>

        {/* --- Certifications Cards --- */}
        <div className="grid gap-8 md:grid-cols-2">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className={`p-6 shadow-3d hover:shadow-3d-hover transition-all duration-700 border-border group hover:-translate-y-1 transform-gpu bg-gradient-card relative overflow-hidden text-align justify ${
                isVisible ? "fade-in-up" : "opacity-0"
              }`}
              style={{ transitionDelay: `${400 + index * 150}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-accent rounded-lg shadow-md group-hover:shadow-lg group-hover:scale-110 group-hover:bg-primary transition-all duration-300 transform-gpu">
                  <Award className="h-6 w-6 text-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-primary font-medium">{cert.issuer}</p>
                  <span className="text-sm text-muted-foreground">{cert.year}</span>
                  <p className="text-muted-foreground mt-2">
                    {cert.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
