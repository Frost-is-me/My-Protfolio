import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-PlantShopping",
    description:
      "A fully functional e-commerce platform for plant shopping with cart management, product filtering, and a responsive design built with React and Redux.",
    tags: ["React.js", "Redux", "Tailwind CSS", "REST API"],
    github: "https://github.com/Frost-is-me/e-plantShopping",
    live: "https://frost-is-me.github.io/e-plantShopping/",
  },
  {
    title: "Waqitly Dashboard",
    description:
      "An interactive admin dashboard for the Waqitly platform featuring real-time data visualization, user management, and performance analytics.",
    tags: ["React.js", "Node.js", "PostgreSQL", "Chart.js"],
    github: "https://github.com/Frost-is-me/waqitly-dashboard",
    live: "https://frost-is-me.github.io/waqitly-dashboard/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="section-fade-in">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-2 text-center">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <Card
              key={project.title}
              className="section-fade-in overflow-hidden group hover:border-primary/50 transition-all duration-300"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Gradient header */}
              <div className="h-40 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center">
                <span className="text-2xl font-bold text-primary/60 group-hover:text-primary transition-colors">
                  {project.title}
                </span>
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} /> Code
                    </a>
                  </Button>
                  <Button asChild size="sm" className="gap-2">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
