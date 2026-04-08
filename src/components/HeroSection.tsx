import { ArrowDown, Code2, Server, Container, Database, Braces, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";

const techStack = [
  "React", "Node.js", "TypeScript", "Python", "Docker", "PostgreSQL", "Next.js", "Django"
];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Gradient background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <p className="text-primary font-medium mb-4 tracking-wider uppercase text-sm">Full-Stack Web Developer</p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="text-gradient">Murtada Najm</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          A detail-oriented full-stack developer with hands-on experience in modern web technologies,
          passionate about building scalable, efficient, and user-friendly applications.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button asChild size="lg" className="rounded-full px-8">
            <a href="#services">View My Work</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>

        {/* Tech stack pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Scroll indicator */}
        <a href="#about" className="inline-block mt-16 animate-bounce text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
