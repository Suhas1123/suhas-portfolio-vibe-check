import { Code, Database, Cpu, Award } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: ["Python", "Java"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: ["MySQL"]
    },
    {
      title: "Frameworks & Tools",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-purple-500 to-violet-500",
      skills: ["TensorFlow", "Keras", "Pandas", "Arduino"]
    },
    {
      title: "Certifications",
      icon: <Award className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      skills: ["ITT AI/ML Internship – Powered by Google Developers (INTRAIN TECH)"]
    }
  ];

  const additionalInfo = [
    {
      title: "Interests",
      items: ["Investing in Stock Market", "Gaming", "Learning New Skills"]
    },
    {
      title: "Languages",
      items: ["English", "Telugu", "Hindi"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center">Skills & Expertise</h2>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="portfolio-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-md`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {additionalInfo.map((info, index) => (
            <div 
              key={index} 
              className="portfolio-card animate-fade-in-delay"
            >
              <h3 className="text-xl font-bold text-foreground mb-4">{info.title}</h3>
              <div className="flex flex-wrap gap-2">
                {info.items.map((item, itemIndex) => (
                  <span key={itemIndex} className="skill-badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;