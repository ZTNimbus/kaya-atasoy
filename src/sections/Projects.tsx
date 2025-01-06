import touchHomePage from "@/assets/images/touch.png";
import CaffiendHomePage from "@/assets/images/caffiend.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "Touch",
    year: "2025",
    title: "Realtime Chat Application",
    results: [
      { title: "Realtime functionalities" },
      { title: "User Authentication and Customization" },
      { title: "User Friendly Interface" },
    ],
    link: "https://touch-chkm.onrender.com/",
    image: touchHomePage,
  },
  {
    company: "Caffiend",
    year: "2024",
    title: "Caffeine Tracker",
    results: [
      { title: "Track Your Caffeine Consumption" },
      { title: "Become Aware Of Caffeine Half Life" },
      { title: "User Authentication & Firebase" },
    ],
    link: "https://trackwithcaffiend.netlify.app/",
    image: CaffiendHomePage,
  },
];

function Projects() {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
            Personal Projects
          </p>
        </div>

        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg max-w-md mx-auto lg:text-xl">
          Check out the digital experiences I brought to life.
        </p>
        <div className="flex flex-col mt-10 gap-20 md:mt-20">
          {portfolioProjects.map((project) => {
            return (
              <div
                key={project.title}
                className="bg-gray-800 md:pt-12 md:px-10 lg:pt-16 lg:px-20 rounded-3xl px-8 pt-8 overflow-hidden relative z-0 after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none"
              >
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{ backgroundImage: `url(${grainImage.src})` }}
                />
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="gap-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result) => {
                        return (
                          <li
                            key={result.title}
                            className="flex gap-2 text-sm text-white/50 md:text-base"
                          >
                            <CheckIcon className="size-5 md:size-6" />
                            <span>{result.title}</span>
                          </li>
                        );
                      })}
                    </ul>
                    <a href={project.link} target="_blank">
                      <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center mt-8 md:w-auto px-6">
                        Visit Live Site
                      </button>
                    </a>
                  </div>
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
