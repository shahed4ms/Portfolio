export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-28 md:pt-32">
      <div className="w-full px-6 md:px-8">
        <div className="section-line"></div>

        <h1 className="editorial-title">
          MOHAMMAD
          <br />
          SHAHED
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 md:mt-20 gap-10 md:gap-20">
          {/* Left Side */}
          <div>
            <p className="text-xs uppercase tracking-[6px] text-gray-500">
              Professional Portfolio
            </p>
          </div>

          {/* Right Side */}
          <div>
            <p className="text-xl md:text-4xl font-medium leading-relaxed">
              Passionate about Artificial Intelligence, Machine Learning, Full
              Stack Development, UI/UX Design, and building impactful
              technology-driven solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10 md:mt-12">
              <a
                href="https://github.com/shahed4ms"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black px-6 py-3 rounded-full text-center hover:bg-black hover:text-white transition duration-300"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/mohammad-shahed-25834a319/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-black px-6 py-3 rounded-full text-center hover:bg-black hover:text-white transition duration-300"
              >
                LinkedIn ↗
              </a>
            </div>

            <p className="mt-8 text-base md:text-xl text-gray-600 break-all">
              shahedsharfi@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
