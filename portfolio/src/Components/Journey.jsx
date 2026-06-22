export default function Journey() {
  return (
    <section id="journey" className="px-6 md:px-8 py-20 md:py-32">
      <div className="section-line"></div>

      <h1 className="editorial-title">JOURNEY</h1>

      <div className="mt-10 md:mt-20">
        {/* Education */}
        <div className="border-b border-black py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-gray-500">[2023 - PRESENT]</div>

          <div>
            <p className="text-xs md:text-sm uppercase tracking-[4px] text-gray-500 mb-3">
              Education
            </p>

            <h3 className="text-2xl md:text-4xl font-semibold leading-tight">
              Dr. N.G.P Institute of Technology
            </h3>

            <p className="mt-3 md:mt-4 text-gray-600 text-base md:text-lg">
              Bachelor of Technology – Computer Science and Business Systems
            </p>

            <p className="mt-3 md:mt-4 text-gray-500 text-sm md:text-base">
              CGPA (up to 5th Semester): 7.90
            </p>
          </div>
        </div>

        {/* Internship */}
        <div className="border-b border-black py-8 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="text-gray-500">[JUNE 2025]</div>

          <div>
            <p className="text-xs md:text-sm uppercase tracking-[4px] text-gray-500 mb-3">
              Internship
            </p>

            <h3 className="text-2xl md:text-4xl font-semibold leading-tight">
              UI/UX Intern
            </h3>

            <p className="mt-3 md:mt-4 text-gray-600 text-base md:text-lg">
              Litz Tech, Coimbatore
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
