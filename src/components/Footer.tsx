import { Facebook, Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Portfolio</h3>
            <p className="text-sm text-primary-foreground/80">
              Building digital experiences with passion
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/GlennOliva"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/glenn-oliva-a479a0253/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://www.facebook.com/glennoliva12"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Glenn Angelo Oliva. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
