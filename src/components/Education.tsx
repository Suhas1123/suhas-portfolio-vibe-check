import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science (AI Specialization)",
      institution: "VIT Amaravathi",
      duration: "2021 – 2025",
      grade: "GPA: 8.39",
      description: "Specialized in Artificial Intelligence and Machine Learning with focus on deep learning, computer vision, and data science.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-primary to-accent"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Narayana Junior College, Vijayawada",
      duration: "2019 – 2021",
      grade: "94.7%",
      description: "Mathematics, Physics, and Chemistry with strong foundation in analytical and problem-solving skills.",
      icon: <Award className="w-6 h-6" />,
      color: "from-accent to-primary"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title text-center">Education</h2>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className="portfolio-card animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center text-white shadow-lg`}>
                  {edu.icon}
                </div>
                
                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{edu.duration}</span>
                    </div>
                  </div>
                  
                  <p className="text-lg font-semibold text-primary mb-2">{edu.institution}</p>
                  
                  <div className="flex items-center gap-4 mb-3">
                    <span className="skill-badge">{edu.grade}</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;