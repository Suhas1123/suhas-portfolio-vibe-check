import { ExternalLink, Github, Brain, TrendingUp, Shield, Satellite } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Medical Insurance Price Prediction",
      description: "Intern project using ML regression models to predict insurance prices with comprehensive feature engineering and performance evaluation.",
      tech: ["Python", "Scikit-learn", "Pandas", "Regression Models"],
      icon: <Shield className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      type: "Intern Project",
      status: "Completed"
    },
    {
      title: "Stock Price Prediction using ML",
      description: "Built predictive models using LSTM, Random Forest, and regression techniques with advanced data preprocessing and feature optimization.",
      tech: ["Python", "TensorFlow", "LSTM", "Random Forest", "Data Analysis"],
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      type: "Personal Project",
      status: "Completed"
    },
    {
      title: "Fire Fighting Robot using Arduino",
      description: "Designed an autonomous obstacle-avoiding robot capable of detecting and extinguishing fires using Arduino microcontroller and Python integration.",
      tech: ["Arduino", "Python", "IoT", "Sensors", "Robotics"],
      icon: <Brain className="w-6 h-6" />,
      color: "from-red-500 to-orange-500",
      type: "Hardware Project",
      status: "Completed"
    },
    {
      title: "Environmental Changes Monitoring via Satellite Imagery",
      description: "Ongoing project classifying land use with EuroSAT dataset using deep learning. Currently exploring 3D image integration for enhanced accuracy.",
      tech: ["TensorFlow", "Keras", "Deep Learning", "Satellite Imagery", "EuroSAT"],
      icon: <Satellite className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500",
      type: "Research Project",
      status: "Ongoing"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center">Featured Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="portfolio-card group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-md`}>
                  {project.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="project-tech">{project.type}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.status === 'Ongoing' 
                        ? 'bg-amber-100 text-amber-700' 
                        : 'bg-green-100 text-green-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="project-tech">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Actions */}
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="btn-secondary">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
                <Button variant="outline" size="sm" className="btn-secondary">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;