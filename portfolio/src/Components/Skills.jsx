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
    <section id="skills" className="px-8 py-32">
      <div className="section-line"></div>

      <h1 className="editorial-title">SKILLS</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
        {skills.map((skill) => (
          <div key={skill} className="border-b border-black pb-4 text-2xl">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
