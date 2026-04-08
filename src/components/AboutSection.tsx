import { Award, GraduationCap, Briefcase, Languages } from "lucide-react";

const skills = {
  "Front-End": ["React.js", "Next.js", "Redux", "Tailwind CSS", "HTML/CSS", "JavaScript", "TypeScript"],
  "Back-End": ["Node.js", "Express.js", "Django", "Flask", "REST APIs"],
  "Tools & Platforms": ["Docker", "Kubernetes", "Git", "GitHub", "PostgreSQL", "CI/CD"],
};

const highlights = [
  { icon: Award, label: "IBM Certified", desc: "Full-Stack Developer Certificate" },
  { icon: GraduationCap, label: "Al-Esraa University", desc: "Computer Engineering (Expected 2027)" },
  { icon: Briefcase, label: "Waqitly Internship", desc: "Front-end development experience" },
  { icon: Languages, label: "Languages", desc: "English & Arabic (Fluent)" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="section-fade-in">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-2 text-center">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Who I Am
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Text */}
          <div className="section-fade-in space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              I'm a detail-oriented full-stack web developer and Computer Engineering student at Al-Esraa University College, Baghdad. 
              With hands-on experience from my IBM Full-Stack Developer certification and internship at Makers on Waqitly, 
              I specialize in building responsive, modern web applications using the latest technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My passion lies in creating clean, efficient code and seamless user experiences. 
              From crafting pixel-perfect front-end interfaces to architecting robust back-end systems, 
              I enjoy solving complex problems and delivering high-quality solutions.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {highlights.map((item) => (
                <div key={item.label} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 border border-border">
                  <item.icon size={20} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-sm">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Skills */}
          <div className="section-fade-in space-y-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-primary">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-md text-xs font-medium bg-card border border-border text-foreground hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
