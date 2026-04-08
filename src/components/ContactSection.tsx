import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      
      {
        name: form.name,
        email: form.email,
        message: form.message,
        title: "Portfolio Message",
        time: new Date().toLocaleString(),
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      
    ).then(() => {
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });

    }).catch((err) => {
      console.error("EmailJS Error Response:", err.text);
      toast.error("Failed to send message. Please try again later.");
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="section-fade-in">
          <p className="text-primary font-medium text-sm tracking-wider uppercase mb-2 text-center">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Contact Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="section-fade-in space-y-5">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-card"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="bg-card"
            />
            <Textarea
              placeholder="Your Message"
              rows={6}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="bg-card"
            />
            <Button type="submit" size="lg" className="w-full sm:w-auto rounded-full px-8 gap-2">
              <Send size={16} /> Send Message
            </Button>
          </form>

          {/* Info */}
          <div className="section-fade-in space-y-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">Let's work together</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have a project in mind, need a developer for your team, or just want to say hello — feel free to reach out.
                I'm always open to new opportunities and collaborations.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:murtada.najm99@gmail.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} className="text-primary" />
                murtada.najm99@gmail.com
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={20} className="text-primary" />
                Baghdad, Iraq
              </div>
            </div>

            <div className="flex gap-3">
              <Button asChild variant="outline" size="icon" className="rounded-full">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full">
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
