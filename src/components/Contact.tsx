import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

export const Contact = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // For now, just show a success message
    // In production, you would integrate with a backend service
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section ref={ref} id="contact" className="py-24 px-4 bg-gradient-subtle">
      <div className="container mx-auto max-w-5xl">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className={`lg:col-span-2 transition-all duration-700 ${isVisible ? 'fade-in-left' : 'opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <Card className="p-8 shadow-3d hover:shadow-3d-hover transition-all duration-500 border-border bg-gradient-card group hover:-translate-y-1 transform-gpu relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="border-border shadow-sm hover:shadow-md transition-shadow"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="border-border shadow-sm hover:shadow-md transition-shadow"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    className="min-h-[150px] border-border shadow-sm hover:shadow-md transition-shadow"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div className={`space-y-6 transition-all duration-700 ${isVisible ? 'fade-in-right' : 'opacity-0'}`} style={{ transitionDelay: '400ms' }}>
            <Card className="p-6 shadow-3d hover:shadow-3d-hover transition-all duration-500 border-border group hover:-translate-y-1 transform-gpu bg-gradient-card relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-accent rounded-lg shadow-md group-hover:shadow-lg group-hover:scale-110 group-hover:bg-primary transition-all duration-300 transform-gpu">
                  <Mail className="h-5 w-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Email</h3>
                  <p className="text-sm text-muted-foreground">your.email@example.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-3d hover:shadow-3d-hover transition-all duration-500 border-border group hover:-translate-y-1 transform-gpu bg-gradient-card relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-accent rounded-lg shadow-md group-hover:shadow-lg group-hover:scale-110 group-hover:bg-primary transition-all duration-300 transform-gpu">
                  <Phone className="h-5 w-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Phone</h3>
                  <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-3d hover:shadow-3d-hover transition-all duration-500 border-border group hover:-translate-y-1 transform-gpu bg-gradient-card relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="p-3 bg-accent rounded-lg shadow-md group-hover:shadow-lg group-hover:scale-110 group-hover:bg-primary transition-all duration-300 transform-gpu">
                  <MapPin className="h-5 w-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">Location</h3>
                  <p className="text-sm text-muted-foreground">Your City, Country</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
