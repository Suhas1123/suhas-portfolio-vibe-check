import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "msuhas2003@gmail.com",
      link: "mailto:msuhas2003@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 6302362929",
      link: "tel:+916302362929",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Repalle, Guntur",
      link: null,
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "github.com/Suhas1123",
      link: "https://github.com/Suhas1123",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/suhas2003",
      link: "https://linkedin.com/in/suhas2003",
      color: "from-blue-600 to-blue-800"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="section-title">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and AI/ML.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="portfolio-card animate-fade-in group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => contact.link && window.open(contact.link, '_blank')}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${contact.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
                  {contact.icon}
                </div>
                <div className="flex-grow">
                  <p className="font-medium text-foreground">{contact.label}</p>
                  <p className="text-sm text-muted-foreground break-all">{contact.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="portfolio-card max-w-2xl mx-auto animate-scale-in">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Work Together?</h3>
            <p className="text-muted-foreground mb-6">
              Whether you have a project in mind, want to discuss opportunities, or just want to connect, I'd love to hear from you.
            </p>
            <Button 
              className="btn-primary"
              onClick={() => window.open('mailto:msuhas2003@gmail.com', '_blank')}
            >
              <Send className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;