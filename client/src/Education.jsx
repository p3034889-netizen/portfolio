import {
  FaGraduationCap,
  FaBookOpen,
  FaSchool,
} from "react-icons/fa";

export default function Education() {
  const education = [
    {
      icon: FaGraduationCap,
      degree: "BCA",
      institution: "Bengaluru City University",
      year: "2023 - 2026",
    },

    {
      icon: FaBookOpen,
      degree: "PUC",
      institution: "State Board",
      year: "2021 - 2023",
    },

    {
      icon: FaSchool,
      degree: "SSLC",
      institution: "State Board",
      year: "2020 - 2021",
    },
  ];

  return (
    <section
      id="education"
      className="border-b border-gray-200 bg-white"
    >
      <div className="mx-auto max-w-[1024px] px-[30px] py-[22px] md:px-[67px]">

        <div className="mb-[18px]">
          <h2 className="text-[23px] font-semibold text-[#e85b9b]">
            Education
          </h2>

          <div className="mt-[8px] h-[2px] w-[34px] bg-[#e85b9b]" />
        </div>

        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-3">

          {education.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="relative flex items-center gap-[15px]"
              >

                <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full bg-[#fde8f1]">
                  <Icon
                    size={25}
                    className="text-[#e85b9b]"
                  />
                </div>

                <div>
                  <h3 className="text-[13px] font-semibold text-[#222]">
                    {item.degree}
                  </h3>

                  <p className="mt-[4px] text-[11px] text-[#555]">
                    {item.institution}
                  </p>

                  <p className="mt-[3px] text-[11px] text-[#e85b9b]">
                    {item.year}
                  </p>
                </div>

                {index < education.length - 1 && (
                  <div className="absolute right-[-10px] top-1/2 hidden h-[1px] w-[20px] bg-[#e8a9c7] md:block" />
                )}

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}