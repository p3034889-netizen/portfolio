import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiReact,
  SiMysql,
} from "react-icons/si";

export default function Projects() {
  const githubUrl1 = import.meta.env.VITE_PROJECTS_URL1;
  const githubUrl2 = import.meta.env.VITE_PROJECTS_URL2;
  const projects = [
    {
      title: "ShopEase",
      description:
        "Full stack e-commerce application using Spring Boot microservices, React and MySQL.",
      icon: SiSpringboot,
      technologies: "React • Spring Boot • MySQL",
      github: githubUrl1,
    },

    {
      title: "InterviewIQ",
      description:
        "AI-powered interview preparation platform with resume analysis and interview questions.",
      icon: SiReact,
      technologies: "React • Spring Boot • Gemini AI",
      github: githubUrl2,
    },


  ];

  return (
    <section
      id="projects"
      className="border-b border-gray-200 bg-white"
    >
      <div className="mx-auto max-w-[1024px] px-[30px] py-[22px] md:px-[67px]">

        <div className="mb-[18px]">
          <h2 className="text-[23px] font-semibold text-[#e85b9b]">
            Projects
          </h2>

          <div className="mt-[8px] h-[2px] w-[34px] bg-[#e85b9b]" />
        </div>

        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2">

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <div
                key={index}
                className="rounded-[7px] border border-gray-200 p-[17px] transition hover:-translate-y-1 hover:border-[#e85b9b]"
              >

                <div className="flex gap-[13px]">

                  <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full bg-[#fde8f1]">
                    <Icon
                      size={23}
                      className="text-[#e85b9b]"
                    />
                  </div>

                  <div>
                    <h3 className="mb-[5px] text-[14px] font-semibold text-[#222]">
                      {project.title}
                    </h3>

                    <p className="text-[11px] leading-[18px] text-[#555]">
                      {project.description}
                    </p>
                  </div>

                </div>

                <p className="mt-[12px] text-[10px] text-[#e85b9b]">
                  {project.technologies}
                </p>

                <div className="mt-[12px] flex gap-[15px]">



                  <a
                  href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-[5px] text-[11px] text-[#333] hover:text-[#e85b9b]"
                  >
                    <FaGithub size={14} />
                    GitHub
                  </a>

                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}