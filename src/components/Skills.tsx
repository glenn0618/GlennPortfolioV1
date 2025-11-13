import { Card } from "@/components/ui/card";
import { Code2, Palette, Database, Layout } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5/CSS3"],
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    title: "Design & UI/UX",
    icon: Palette,
    skills: ["Figma", "Responsive Design", "Wireframing", "Prototyping", "User Research"],
  },
  {
    title: "Tools & Others",
    icon: Code2,
    skills: ["Git/GitHub", "VS Code", "Docker", "CI/CD", "Agile/Scrum"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-8 shadow-elegant hover:shadow-hover transition-all duration-300 border-border group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-accent rounded-lg group-hover:bg-primary transition-colors">
                    <Icon className="h-6 w-6 text-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
