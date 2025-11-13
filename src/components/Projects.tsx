import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import psems from '../images/psems.png'
import resume from '../images/resume_builder.png'
import valentines from '../images/valentines.png'
import financial from '../images/financial.png'
import community from '../images/community.png'
import petworld from '../images/PETWORLD.png'
import cafe from '../images/islanilola.png'
import uic from '../images/uic.jpg'
const projects = [
  {
    title: "POULTRY MANAGEMENT ENVIRONMENTAL MONITORING SYSTEM",
    description:
      "An IoT-based monitoring system that tracks poultry house conditions such as temperature, humidity, and gas levels in real time, featuring data visualization dashboards and automated alerts.",
    tags: ["React", "TypeScript", "Tailwind", "Firebase", "Chart.js", "IoT", "MySQL", "Node.js", "Express.js", "REST API"],
    image: psems,
    github: "https://github.com/GlennOliva/PSEMS-V1",
    demo: "https://psems.vercel.app/",
  },
  {
    title: "PWA RESUME BUILDER",
    description:
      "A Progressive Web App that allows users to create, customize, and download professional resumes directly from their browser, even offline, with dynamic templates and live previews.",
    tags: ["React", "TypeScript", "Tailwind", "Chart.js", "MySQL", "Node.js", "Express.js", "REST API"],
    image: resume,
    github: "https://github.com/GlennOliva/PWA--Resume-Builder",
    demo: "https://pwa-resume-builder.vercel.app/",
  },
  {
    title: "VALENTINES PHOTOBOOTH APP",
    description:
      "A fun and interactive web app that uses the Camera API to let users capture, decorate, and download Valentine-themed photos instantly.",
    tags: ["React", "TypeScript", "Tailwind", "Camera API"],
    image: valentines,
    github: "https://github.com/GlennOliva/Valentine-s-Booth",
    demo: "https://valentine-s-booth.vercel.app/",
  },
  {
    title: "FINANCIAL MANAGEMENT SYSTEM",
    description:
      "A financial tracking platform that helps users manage income, expenses, and budgets with interactive charts, analytics, and report generation.",
    tags: ["React", "TypeScript", "Tailwind", "Chart.js", "MySQL", "Node.js", "Express.js", "REST API"],
    image: financial,
    github: "https://github.com/GlennOliva/Capstone-Financial-Literature",
    demo: "https://capstonefinancialapp.vercel.app/",
  },
  {
    title: "COMMUNITY MANAGEMENT SYSTEM",
    description:
      "A web-based solution for managing local community reports, waste collection schedules, and communication between residents and administrators.",
    tags: ["React", "TypeScript", "Tailwind", "Chart.js", "MySQL", "Node.js", "Express.js", "REST API"],
    image: community,
    github: "https://github.com/GlennOliva/CommunityWasteApp",
    demo: "https://community-waste-app.vercel.app/",
  },
  {
    title: "DAVAO PETWORLD E-COMMERCE WEBSITE WITH FISH IDENTIFICATION",
    description:
      "An e-commerce platform for pet supplies integrated with a CNN-based fish identification system, allowing users to upload images for species recognition using Flask and TensorFlow.",
    tags: ["React", "TypeScript", "Tailwind", "Chart.js", "MySQL", "Node.js", "Express.js", "REST API", "Flask", "CNN", "TensorFlow.js"],
    image: petworld,
    github: "https://github.com/GlennOliva/Capstone_DavaoPetworld",
    demo: "https://davaopetworld.netlify.app/",
  },
  {
    title: "ISLA NI LOLA FOOD & ORDERING SYSTEM",
    description:
      "An online food ordering system that enables customers to browse menus, place orders, and track order statuses in real time for a local café.",
    tags: ["React", "TypeScript", "Tailwind", "Chart.js", "MySQL", "Node.js", "Express.js", "REST API"],
    image: cafe,
    github: "https://github.com/GlennOliva/CafeOrderingSystem",
    demo: "https://isla-ni-lola-cafe-ordering.vercel.app/",
  },
  {
    title: "UIC MONITORING ATTENDANCE SYSTEM",
    description:
      "A barcode-powered attendance monitoring system for UIC students and staff, providing real-time logs, analytics, and secure record management.",
    tags: ["React", "TypeScript", "Tailwind", "Chart.js", "MySQL", "Node.js", "Express.js", "REST API", "Barcode API"],
    image: uic,
    github: "https://github.com/GlennOliva/UIC-Attendance-Monitoring-System",
    demo: "https://uic-attendance-monitoring-system.vercel.app/",
  },
];


export const Projects = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} id="projects" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "fade-in-up" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden shadow-3d hover:shadow-3d-hover transition-all duration-700 border-border group hover:-translate-y-2 transform-gpu bg-gradient-card ${
                isVisible ? "fade-in-up" : "opacity-0"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* --- Project Image --- */}
              <div className="h-50 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* --- Project Info --- */}
              <div className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-justify">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium shadow-sm hover:shadow-md transition-shadow"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="hover:-translate-y-0.5 transition-transform"
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      asChild
                      className="shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
