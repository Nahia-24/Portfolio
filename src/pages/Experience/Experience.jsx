import React from "react";
import { Code2, Activity, Cpu, Layers, Network, Binary, Database, Globe } from "lucide-react";

const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon,
  technologies,
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    {/* Glass morphism effect */}
    <div className="absolute inset-0 backdrop-blur-lg bg-[#f5f5dc]/10 rounded-lg" />

    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-[#cab87a] via-[#b89c54] to-[#8a7038] rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-[#f5f5dc]/90 rounded-lg p-8 h-full border-2 border-[#add8e6]/30 shadow-xl backdrop-blur-xl">
      {/* Floating icon with pulse effect */}
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-gradient-to-r from-[#ffffff] to-[#ffffff] opacity-20 rounded-full blur-xl group-hover:opacity-100 animate-pulse" />
        <Icon className="w-12 h-12 text-cyan-300 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      {/* Content with improved typography */}
      <div className="space-y-3">
        <h3 className="text-2xl font-bold bg-gradient-to-r bg-clip-text gradient-text">
          {title}
        </h3>
        <div className="flex justify-between items-center text-gray-500">
          <span className="font-semibold text-blue-400">{company}</span>
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-gray-500 border-l-4 border-blue-500/20 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
        
        {/* Technologies badges */}
        {technologies && (
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-mono bg-gradient-to-r from-cyan-500/10 to-purple-500/10 text-gray-600 px-2 py-1 rounded-md border border-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-20 h-20">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
      </div>
      <div className="absolute bottom-4 left-4 w-20 h-20">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Code2,
      title: "Software Developer",
      company: "OPENCODE SAS",
      period: "Sep 2024 - Sep 2025",
      description:
        "Developed full-stack web applications using PHP, Laravel, and Vue.js for government and educational sector projects, serving 100+ users with role-based access control systems.",
      technologies: ["PHP", "Laravel", "Vue.js", "MySQL", "JavaScript", "REST APIs"]
    },
    {
      icon: Activity,
      title: "Social Media Manager",
      company: "Freelance",
      period: "Jan 2023 - Dec 2023",
      description:
        "Managed comprehensive social media strategy and digital marketing campaigns, increasing engagement by 45% through data-driven content optimization and CRM integrations.",
      technologies: ["CRM Systems", "Analytics", "Digital Marketing", "Content Strategy"]
    },
    {
      icon: Database,
      title: "Systems Engineering Student",
      company: "Universidad Santiago de Cali",
      period: "2023 - Present",
      description:
        "Pursuing Bachelor's degree in Systems Engineering with focus on full-stack development, database management, and modern web technologies. GPA: 4.1",
      technologies: ["Data Structures", "Algorithms", "Software Architecture", "Problem Solving"]
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[#fefcf5]" />

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(252,_252,_252,_0.75)_1px,transparent_1px),linear-gradient(rgba(252,_252,_252,_0.75)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animation: `float ${3 + Math.random() * 2}s ease-in-out infinite`
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          {/* Section header with enhanced effects */}
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent gradient-text">
                Professional Journey
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-500 font-medium tracking-wide text-center max-w-2xl">
              "Building scalable solutions and turning challenges into opportunities"
            </p>
          </div>

          {/* Experience grid with improved layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Enhanced background effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 3s ease infinite;
        }
      `}</style>
    </>
  );
};

export default ExperienceSection;
