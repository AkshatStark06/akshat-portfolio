import Navbar from "../../components/Navbar";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export default function Experience() {
  const timeline = [
    {
    title: "Data Analyst – Bosch",
    subtitle: "Technical / data analyst Exposure",
    date: "2023",
    type: "work",
    points: [
      "Worked on engineering-focused problem solving and technical analysis tasks.",
      "Gained exposure to industry-level quality standards and structured workflows.",
      "Collaborated with team members on debugging and validation processes.",
      "Improved understanding of reliability and system-level thinking.",
    ],
  },
    {
      title: "Engineering Research & Publications",
      subtitle: "Undergraduate Academic Work",
      date: "2022 - 2023",
      type: "education",
      points: [
        "Published 2 engineering research papers.",
        "Conducted simulation-based technical validation.",
        "Collaborated in research documentation and evaluation.",
      ],
    },
    {
      title: "Bachelor of Electrical Engineering",
      subtitle: "Engineering Foundation",
      date: "2019 - 2023",
      type: "education",
      points: [
        "Strong foundation in circuit analysis and control systems.",
        "Applied system-level analytical problem solving.",
        "Completed final year project with optimization focus.",
      ],
    },
    {
    title: "Senior Secondary (12th Grade)",
    subtitle: "Science Stream – PCM",
    date: "2018 - 2019",
    type: "education",
    points: [
      "Focused on Physics, Chemistry and Mathematics.",
      "Built strong analytical and quantitative foundation.",
    ],
    },
    {
        title: "Secondary School (10th Grade)",
        subtitle: "Foundational Education",
        date: "2016 - 2017",
        type: "education",
        points: [
      "Developed core academic fundamentals.",
      "Consistent academic performance.",
        ],
    },
  ];

  return (
  <>
    <Navbar />

    <div className="bg-[#111111] text-white min-h-screen py-24 px-6">
      <h1 className="text-5xl font-bold text-center mb-28">
        📅 Work Experience & Education Timeline
      </h1>

      <div className="relative max-w-7xl mx-auto">

        {/* White Timeline Line */}
        <div className="absolute left-1/2 top-0 h-full w-[3px] bg-white transform -translate-x-1/2"></div>

        {timeline.map((item, index) => (
          <div key={index} className="relative mb-32">

            {/* Big Timeline Circle */}
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 
              w-20 h-20 flex items-center justify-center rounded-full z-20 
              border-4 border-white shadow-2xl
              ${item.type === "work" ? "bg-blue-500" : "bg-pink-500"}`}
            >
              {item.type === "work" ? (
                <FaBriefcase className="text-white text-2xl" />
              ) : (
                <FaGraduationCap className="text-white text-2xl" />
              )}
            </div>

            {/* Date beside circle */}
            <div
              className={`absolute top-8 text-base font-medium text-gray-300
              ${index % 2 === 0
                ? "left-[55%] text-left"
                : "right-[55%] text-right"
              }`}
            >
              {item.date}
            </div>

            {/* Card */}
            <div
              className={`flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="w-full md:w-[45%] px-6">
                <div
                  className="relative bg-gray-800 p-8 rounded-2xl 
                  shadow-2xl border border-gray-700
                  transition-all duration-300 ease-out
                  hover:scale-105 hover:shadow-blue-500/20 hover:border-blue-400"
                >

                  {/* Arrow pointer */}
                  <div
                    className={`absolute top-8 w-0 h-0 
                    ${index % 2 === 0
                      ? "right-[-12px] border-t-[12px] border-b-[12px] border-l-[12px] border-t-transparent border-b-transparent border-l-gray-800"
                      : "left-[-12px] border-t-[12px] border-b-[12px] border-r-[12px] border-t-transparent border-b-transparent border-r-gray-800"
                    }`}
                  ></div>

                  <h2 className="text-2xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="text-base text-gray-400 mt-2">
                    {item.subtitle}
                  </p>

                  <ul className="list-disc pl-6 space-y-3 text-gray-300 text-base mt-6">
                    {item.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>

                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  </>
);
}
