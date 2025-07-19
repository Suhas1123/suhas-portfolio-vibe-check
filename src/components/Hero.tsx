import { Mail, Phone, MapPin, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo-new.jpg";

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume-morla-suhas.pdf';
    link.download = 'Morla_Suhas_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero-gradient py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <img 
                  src={profilePhoto} 
                  alt="Morla Suhas" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-glow">
                <span className="text-white font-bold text-lg">AI</span>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-6 animate-slide-in-right">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
                Morla <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Suhas</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6 max-w-lg">
                Final-year Computer Science (AI & ML) undergraduate passionate about building intelligent solutions
              </p>
              <p className="text-lg text-foreground font-medium leading-relaxed max-w-xl">
                Responsible, self-motivated, and eager to gain real-world work experience in AI/ML and software development.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              <div className="contact-link">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">msuhas2003@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-link">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+91 6302362929</p>
                </div>
              </div>
              
              <div className="contact-link">
                <MapPin className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">Repalle, Guntur</p>
                </div>
              </div>
              
              <div className="contact-link">
                <Github className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">GitHub</p>
                  <p className="text-sm text-muted-foreground">Suhas1123</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary" onClick={handleDownloadResume}>
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              
              <Button 
                variant="outline" 
                className="btn-secondary"
                onClick={() => window.open('https://linkedin.com/in/suhas2003', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;