import {
  FaUser,
  FaGraduationCap,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-gray-200 bg-white"
    >
      <div className="mx-auto max-w-[1024px] px-[30px] py-[28px] md:px-[67px]">

        {/* Heading */}
        <div className="mb-[18px]">
          <h2 className="text-[23px] font-semibold text-[#e85b9b]">
            About Me
          </h2>

          <div className="mt-[8px] h-[2px] w-[34px] bg-[#e85b9b]" />
        </div>

        <div className="grid items-center gap-[40px] md:grid-cols-[1.15fr_1fr]">

          {/* Left */}
          <div className="flex items-center gap-[20px]">

            <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#fde8f1]">
              <FaUser
                size={30}
                className="text-[#ed65a3]"
              />
            </div>

            <p className="text-[12.5px] leading-[24px] text-[#444]">
              I am a BCA graduate and a passionate Java Full Stack
              Developer. I enjoy learning new technologies and building
              projects that solve real-world problems. My goal is to
              become a skilled developer and contribute to innovative
              and impactful solutions.
            </p>

          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-x-[30px] gap-y-[20px]">

            <Info
              icon={<FaUser />}
              title="Name"
              value="Pooja"
            />

            <Info
              icon={<FaGraduationCap />}
              title="Degree"
              value="BCA"
            />

            <Info
              icon={<FaEnvelope />}
              title="Email"
              value="poojavidya234@gmail.com"
            />

            <Info
              icon={<FaMapMarkerAlt />}
              title="Location"
              value="Bengaluru, India"
            />

          </div>

        </div>
      </div>
    </section>
  );
}

function Info({ icon, title, value }) {
  return (
    <div className="flex items-center gap-[12px]">

      <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full bg-[#fff0f6] text-[18px] text-[#ed65a3]">
        {icon}
      </div>

      <div>
        <p className="text-[12px] font-semibold text-[#222]">
          {title}
        </p>

        <p className="mt-[3px] text-[11px] text-[#555]">
          {value}
        </p>
      </div>

    </div>
  );
}