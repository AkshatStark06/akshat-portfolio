function Hero() {
  return (
    <section className="relative h-[75vh] flex items-end pb-24 bg-gray-950 text-white overflow-hidden">
      <div className="relative z-10 px-16 max-w-4xl">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
          Hi, I’m <span className="text-blue-500">Akshat</span>
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-3xl leading-relaxed">
          Data Analyst with an Electrical Engineering background, 
          building data-driven insights using Python, SQL, Power BI, and ML.
        </p>

        <div className="mt-10 flex gap-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-gray-600 hover:border-white rounded-lg font-medium"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

    </section>
  );
}

export default Hero;
