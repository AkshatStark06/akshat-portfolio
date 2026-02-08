function Hero() {
  return (
    <section className="h-[75vh] flex items-center justify-center bg-gray-950 text-white">
      <div className="text-center px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold">
          Hi, I’m <span className="text-blue-500">Akshat</span>
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
          Data Analyst with an Electrical Engineering background, 
          building data-driven insights using Python, SQL, Power BI, and ML.
        </p>

        <div className="mt-10 flex justify-center gap-6">
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
    </section>
  );
}

export default Hero;
