
import React from "react";

import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaTools,
  FaServer,
  FaCode,
  FaAws,
} from "react-icons/fa";

export default function Skills() {
  const skillGroups = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "JavaScript", icon: <FaJs /> },
      ],
    },

    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "React.js", icon: <FaReact /> },
      ],
    },

    {
      title: "Backend",
      skills: [
        { name: "Spring Boot", icon: <FaServer /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "REST API", icon: <FaCode /> },
      ],
    },

    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: <FaDatabase /> },
        { name: "MongoDB", icon: <FaDatabase /> },
      ],
    },

    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "AWS", icon: <FaAws /> },
      ],
    },

    {
      title: "Other",
      skills: [
        { name: "Backend Development", icon: <FaServer /> },
        { name: "Development Tools", icon: <FaTools /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="bg-pink-50/40 px-6 py-20"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mb-12 text-center">

          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-pink-400">
            What I Work With
          </p>

          <h2 className="text-3xl font-semibold text-pink-900 md:text-4xl">
            Skills
          </h2>

          <div className="mx-auto mt-3 h-[3px] w-10 rounded-full bg-pink-400"></div>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-500">
            Technologies and tools I use to build modern,
            scalable and reliable applications.
          </p>

        </div>

        {/* Skill Categories */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="
                rounded-xl
                border border-pink-100
                bg-white
                p-5
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-pink-200
                hover:shadow-md
              "
            >

              {/* Category Title */}
              <h3 className="mb-5 text-center text-base font-semibold text-pink-800">
                {group.title}
              </h3>

              {/* Skills */}
              <div className="grid grid-cols-2 gap-3">

                {group.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="
                      group
                      flex
                      flex-col
                      items-center
                      justify-center
                      rounded-lg
                      border border-pink-100
                      bg-pink-50
                      px-3
                      py-4
                      transition-all
                      duration-300
                      hover:bg-pink-100
                      hover:shadow-sm
                    "
                  >

                    {/* Icon */}
                    <div
                      className="
                        mb-2
                        text-2xl
                        text-pink-400
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    >
                      {skill.icon}
                    </div>

                    {/* Skill Name */}
                    <span className="text-center text-xs font-medium text-pink-800">
                      {skill.name}
                    </span>

                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
