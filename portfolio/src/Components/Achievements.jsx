const achievements = [
  {
    year: "2025",
    title: "AI workshop",
    org: "Kongu Engineering College",
  },
  {
    year: "2025",
    title: "Introduction to IoT (73% + Elite)",
    org: "NPTEL",
  },
  {
    year: "2024",
    title: "Canteen rush management system - Project presentation",
    org: "NGP Institute of Technology",
  },
  {
    year: "2023",
    title: "Adobe tools workshop",
    org: "Bannari Amman Institute of Technology",
  },
  {
    year: "2023",
    title: "Smart clock of farming - Idea presentation",
    org: "Bannari Amman Institute of Technology",
  },
  {
    year: "2023",
    title: "Diploma in Computer Application",
    org: "National Institute of Rural Development Sociality",
  },
];

export default function Achievements() {
  return (
    <section id="achievements"className="px-8 py-32">
      <div className="section-line"></div>

      <h1 className="editorial-title">ACHIEVEMENTS</h1>

      <p className="text-xl mt-6 mb-16">& PARTICIPATIONS</p>

      <div>
        {achievements.map((item, index) => (
          <div
            key={index}
            className="border-b border-black py-10 grid md:grid-cols-2"
          >
            <div>[{item.year}]</div>

            <div>
              <h3 className="text-3xl font-semibold">{item.title}</h3>

              <p className="mt-3 text-gray-600">{item.org}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
