import { ArrowUp, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Murtada Najm. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" size="icon" className="rounded-full h-8 w-8">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <Github size={16} />
            </a>
          </Button>
          <Button asChild variant="ghost" size="icon" className="rounded-full h-8 w-8">
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} />
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-8 w-8"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp size={16} />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
