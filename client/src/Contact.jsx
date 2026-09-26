import {
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Contact() {
  const githubURL = import.meta.env.VITE_GITHUB_URL;
  
  return (
    <section
      id="contact"
      className="bg-white"
    >
      <div className="mx-auto max-w-[1024px] px-[30px] py-[25px] md:px-[67px]">

        {/* Heading */}
        <div className="mb-[18px]">
          <h2 className="text-[23px] font-semibold text-[#e85b9b]">
            Contact Me
          </h2>

          <div className="mt-[8px] h-[2px] w-[34px] bg-[#e85b9b]" />
        </div>

        <div className="grid items-center gap-[35px] md:grid-cols-[0.8fr_1.5fr]">

          {/* Left */}
          <div>

            <p className="mb-[14px] text-[11px] leading-[19px] text-[#555]">
              I'm always open to discussing new projects,
              creative ideas or opportunities to be part of
              your team.
            </p>

            <a
              href="mailto:kushi@email.com"
              className="inline-block rounded-[4px] bg-[#ec65a3] px-[15px] py-[8px] text-[11px] font-medium text-white transition hover:bg-[#df4f91]"
            >
              Let's Connect
            </a>

          </div>

          {/* Right */}
          <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-3">

            {/* Email */}
            <a
              href="mailto:kushi@email.com"
              className="flex min-h-[65px] items-center gap-[10px] rounded-[6px] border border-gray-200 px-[10px] transition hover:border-[#e85b9b]"
            >
              <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#fde8f1]">
                <FaEnvelope
                  size={16}
                  className="text-[#e85b9b]"
                />
              </div>

              <div>
                <h3 className="text-[11px] font-semibold text-[#222]">
                  Email
                </h3>

                <p className="mt-[3px] break-all text-[9px] text-[#555]">
                 poojavidya234@email.com
                </p>
              </div>
            </a>

           
              
                
            {/* GitHub */}
            <a
              href={githubURL}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-[65px] items-center gap-[10px] rounded-[6px] border border-gray-200 px-[10px] transition hover:border-[#e85b9b]"
            >
              <div className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full bg-[#fde8f1]">
                <FaGithub
                  size={17}
                  className="text-[#e85b9b]"
                />
              </div>

              <div>
                <h3 className="text-[11px] font-semibold text-[#222]">
                  GitHub
                </h3>

                <p className="mt-[3px] text-[9px] text-[#555]">
                  GitHub Profile
                </p>
              </div>
            </a>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#f3b1cf] bg-[#ed65a3] py-[9px] text-center text-[11px] text-white">
        © 2026 Kushi | All rights reserved. ♥
      </footer>
    </section>
  );
}