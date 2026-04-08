import { Code2, Server, Database, Braces, Container, LayoutDashboard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Code2,
    title: "Front-End Development",
    description: "Building responsive, interactive user interfaces with React.js, Next.js, Redux, and Tailwind CSS.",
  },
  {
    icon: Server,
    title: "Back-End Development",
    description: "Developing robust server-side applications with Node.js, Express.js, Django, and Flask.",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Designing and managing relational databases with PostgreSQL, data modeling, and query optimization.",
  },
  {
    icon: Braces,
    title: "API Development",
    description: "Creating RESTful APIs, microservices architecture, and seamless third-party API integrations.",
  },
  {
    icon: Container,
    title: "DevOps & Containers",
    description: "Containerization with Docker & Kubernetes, CI/CD pipelines, and cloud deployment strategies.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard & Data Viz",
    description: "Interactive dashboards, admin panels, and data visualization with charts and real-time analytics.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="section-fade-in">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-2 text-center">What I Do</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">My Services</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Card
              key={service.title}
              className="section-fade-in group hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
