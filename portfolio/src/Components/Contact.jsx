export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-8 py-20 md:py-32">
      <div className="section-line"></div>

      <h1 className="editorial-title">CONTACT</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-10 md:mt-16">
        <div>
          <p className="section-label">Let's Connect</p>
        </div>

        <div>
          <p className="text-xl md:text-4xl font-medium break-all">
            shahedsharfi@gmail.com
          </p>

          <p className="mt-6 text-gray-600 text-base md:text-lg">
            Coimbatore, Tamil Nadu, India
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="https://github.com/shahed4ms"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black px-6 py-3 rounded-full text-center hover:bg-black hover:text-white transition"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black px-6 py-3 rounded-full text-center hover:bg-black hover:text-white transition"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
