import { useState } from "react";

const projects = [
  {
    title: "Cricket Strategy Support App",
    description:
      "Built a machine learning-powered cricket analytics platform using historical match data from CSV datasets.",

    technologies: ["React", "Python", "MySQL"],

    features: [
      "Shot recommendations for batsmen",
      "Bowling strategy suggestions",
      "Field placement analysis and reports",
    ],
  },

  {
    title: "Onion Supply Chain AI Platform",
    description:
      "Developing an AI-powered supply chain platform connecting farmers, logistics providers, wholesalers, and retailers for real-time onion tracking.",

    technologies: ["React", "Python"],

    features: [
      "Demand forecasting",
      "Price prediction using market data",
      "Interactive analytics dashboards",
    ],
  },

  {
    title: "Carbon Footprint Tracking",
    description:
      "Developed a web-based sustainability platform that helps users track, analyze, and reduce their carbon footprint through daily activity monitoring.",

    technologies: ["React", "Node.js", "MongoDB"],

    features: [
      "Carbon emission calculations",
      "Environmental impact reports",
      "AI-driven sustainability recommendations",
    ],
  },

  {
    title: "URL Shortener",
    description:
      "Developed a full-stack URL shortening application with authentication, custom aliases, analytics, and QR code generation.",

    technologies: ["React", "Node.js", "MongoDB"],

    features: [
      "Custom short URLs",
      "QR code generation",
      "Click analytics dashboard",
    ],
  },
  
  {
    title: "JARVIS Voice Agent",
    description:
      "Built a Python-based voice assistant that automates system tasks through natural voice commands.",

    technologies: ["Python"],

    features: [
      "Speech recognition",
      "Text-to-speech interaction",
      "Voice-based system control",
    ],
  },

  {
    title: "Car Crash Detection System",
    description:
      "Developed an IoT-based vehicle safety system that detects accidents using sensors and GPS technology and sends emergency alerts automatically.",

    technologies: ["C++", "Arduino IDE", "Twilio API"],

    features: [
      "Accident detection",
      "Real-time GPS tracking",
      "Automatic emergency alerts",
    ],
  },

  {
    title: "Stock Inventory Management System",
    description:
      "Developed a full-stack inventory management system for real-time stock tracking and product management.",

    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],

    features: [
      "Real-time inventory tracking",
      "Low-stock alerts",
      "Role-based access control",
    ],
  },
];

export default function Projects() {
  const [openProject, setOpenProject] = useState(null);

  const toggleProject = (index) => {
    setOpenProject(openProject === index ? null : index);
  };

  return (
    <section id="projects" className="px-8 py-32">
      <div className="section-line"></div>

      <h1 className="editorial-title">PROJECTS</h1>

      <div className="mt-20">
        {projects.map((project, index) => (
          <div key={index} className="border-b border-black">
            <button
              onClick={() => toggleProject(index)}
              className="w-full py-10 text-left grid md:grid-cols-2"
            >
              <div>[{String(index + 1).padStart(2, "0")}]</div>

              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-semibold">{project.title}</h3>

                <span className="text-3xl">
                  {openProject === index ? "−" : "+"}
                </span>
              </div>
            </button>

            {openProject === index && (
              <div className="grid md:grid-cols-2 pb-10">
                <div></div>

                <div>
                  <p className="text-gray-700 text-lg">{project.description}</p>

                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">Technologies</h4>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 border rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold mb-3">Key Features</h4>

                    <ul className="space-y-2">
                      {project.features.map((feature) => (
                        <li key={feature}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
