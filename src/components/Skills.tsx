import { Card } from "@/components/ui/card";
import { Code2, Palette, Database, Layout } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5/CSS3" , "Tailwind CSS" , 
      "Vue.js" , "Angular" , "Shadcn/ui" ,"Flutter"
      
    ],
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs" , "Laravel", "Flask", "Postman" , "Firebase" , "MySql", ],
  },
  {
    title: "Design & UI/UX",
    icon: Palette,
    skills: ["Figma", "Funnels" , "WordPress" , "Photopea"],
  },
  {
    title: "Tools & Others",
    icon: Code2,
    skills: ["Git/GitHub", "Bitbucket" , "Go High Level", "Clickup", "Leads", "Social Management", "VS Code", "Docker", "CI/CD", "Agile/Scrum"],
  },
];

export const Skills = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} id="skills" className="py-24 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className={`p-8 shadow-3d hover:shadow-3d-hover transition-all duration-700 border-border group hover:-translate-y-2 transform-gpu bg-gradient-card relative overflow-hidden ${isVisible ? 'fade-in-up' : 'opacity-0'}`}
                style={{ transitionDelay: `${200 + index * 150}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-accent rounded-lg group-hover:bg-primary transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:scale-110 transform-gpu">
                      <Icon className="h-6 w-6 text-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
