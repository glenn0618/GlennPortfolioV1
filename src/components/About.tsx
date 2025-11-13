import { Card } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import glennImage from '../images/glenn.jpg';

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
                <div className="relative w-full aspect-square max-w-[500px] mx-auto rounded-2xl overflow-hidden shadow-3d border-4 border-primary/10 group-hover/img:border-primary/30 transition-all">
                  <img 
                    src={glennImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover grayscale group-hover/img:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay opacity-20 group-hover/img:opacity-0 transition-opacity"></div>
                </div>
              </div>
            </div>

   {/* Content Section */}
<div className="md:col-span-3 space-y-6 flex flex-col justify-center">
  <p className="text-lg text-black leading-relaxed text-justify">
    Hi, I’m Glenn, a passionate Full Stack Web Developer based in the Philippines. I graduated with a Bachelor of Science in Information Technology from the University of Mindanao and have over three years of freelance experience developing web solutions for both students and local businesses across the Philippines.
  </p>
  <p className="text-lg text-black leading-relaxed text-justify">
    I specialize in building responsive and user-friendly systems using MERN Stack, Laravel, and Vue.js, and I’m also proficient in tools like GitHub, Docker, Postman, and PostgreSQL. I typically deploy my projects using Netlify, ensuring fast and optimized performance for clients.
  </p>
  <p className="text-lg text-black leading-relaxed text-justify">
    During my internship at Infosoft Inc., I worked as a backend developer and was recognized with the Excellence Intern Award for my performance. There, I deepened my skills in Laravel, applying clean architecture, organizing project structure, and following best coding practices. I also built and customized WordPress eCommerce sites, learning how design, content, and usability directly affect customer engagement — which first sparked my interest in digital marketing.
  </p>
  <p className="text-lg text-black leading-relaxed text-justify">
    I also had a year of experience as a Virtual Assistant, where I focused on funnel building, automation, and basic marketing workflows for U.S.-based clients. That experience introduced me to the marketing side of business operations — understanding how websites can drive conversions, not just traffic.
  </p>
  <p className="text-lg text-black leading-relaxed text-justify">
    Right now, I’m focusing on growing my knowledge in digital marketing, especially SEO, paid ads, and analytics tools, because I believe that combining technical web development skills with data-driven marketing creates a stronger impact. I may not be an expert yet in paid advertising, but I’m highly motivated and willing to learn, and my technical foundation helps me adapt quickly to new tools and strategies.
  </p>
  <p className="text-lg text-black leading-relaxed text-justify">
    Overall, I see this role as the perfect opportunity to bring both my technical expertise and creative curiosity together — helping your company strengthen its online presence, improve lead generation, and build systems that support real business growth.
  </p>
</div>


          </div>
        </Card>
      </div>
    </section>
  );
};
