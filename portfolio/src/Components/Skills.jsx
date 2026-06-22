const skills = [
  "Python",
  "Java",
  "React.js",
  "Node.js",
  "MS Excel",
  "MySQL",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Figma",
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-8 py-20 md:py-32">
      <div className="section-line"></div>

      <h1 className="editorial-title">SKILLS</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-10 md:mt-16">
        {skills.map((skill) => (
          <div
            key={skill}
            className="border-b border-black pb-3 md:pb-4 text-lg md:text-2xl"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
