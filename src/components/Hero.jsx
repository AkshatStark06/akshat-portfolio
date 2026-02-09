function Hero() {
  return (
    <section className="relative h-[75vh] pt-24 flex items-end pb-24 bg-black text-white overflow-hidden">
      
      {/* BACKGROUND IMAGE / VIDEO */}
      <div className="absolute inset-0 z-0">
        {/* Use image for now */}
        <img
          src="/hero-bg.jpg"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 px-16 max-w-5xl">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
          Akshat Srivastava –{" "}
          <span className="text-[#e50914]">Data Analyst</span>
        </h1>

        <p className="mt-6 text-lg text-gray-300 max-w-3xl leading-relaxed">
          Data Analyst with an Electrical Engineering background and hands-on
          experience in transforming raw data into meaningful insights. Skilled
          in Python, SQL, Power BI, and machine learning, with experience building
          dashboards, analyzing large datasets, and delivering data-driven
          solutions that support business decision-making and operational
          efficiency.
        </p>

        <div className="mt-10 flex gap-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-white text-black hover:bg-gray-200 rounded-md font-semibold"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-md font-semibold"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
    </section>
  );
}

export default Hero;
