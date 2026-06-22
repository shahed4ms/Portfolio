export default function About() {
  return (
    <section id="about" className="px-6 md:px-8 py-20 md:py-32">
      <div className="section-line"></div>

      <h1 className="editorial-title">ABOUT</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-16">
        <div>
          <p className="section-label">
            Computer Science and Business Systems Student
          </p>
        </div>

        <div>
          <p className="text-xl md:text-3xl leading-relaxed">
            I am a Computer Science and Business Systems student with interests
            in Artificial Intelligence, Machine Learning, Frontend Development,
            UI/UX Design, Full Stack Development, and building impactful
            technology-driven solutions.
          </p>

          <div className="mt-8 md:mt-10 border-t border-black pt-6">
            <p className="text-sm uppercase tracking-[4px] text-gray-500">
              Current Focus
            </p>

            <p className="mt-3 text-base md:text-lg text-gray-700">
              AI, Machine Learning, Frontend Development, Full Stack
              Development, and User Experience Design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
