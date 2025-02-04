import touchHomePage from "@/assets/images/touch.png";
import CaffiendHomePage from "@/assets/images/caffiend.png";
import MelodiaHomePage from "@/assets/images/melodia.png";
import GoogleFlightsHomePage from "@/assets/images/google-flights-clone.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Melodia",
    year: "2025",
    title: "Web Music Player",
    results: [
      { title: "Custom Music Player and Queue System" },
      { title: "Realtime Messaging and User Activities" },
      { title: "Admin Dashboard for Library Management" },
    ],
    link: "https://melodia-aaln.onrender.com/",
    image: MelodiaHomePage,
  },
  {
    company: "Touch",
    year: "2025",
    title: "Realtime Chat Application",
    results: [
      { title: "Realtime Functionalities" },
      { title: "User Authentication and Customization" },
      { title: "User Friendly Interface" },
    ],
    link: "https://touch-chkm.onrender.com/",
    image: touchHomePage,
  },
  {
    company: "Google Flights",
    year: "2025",
    title: "Google Flights Clone",
    results: [
      { title: "Find The Best Plane Ticket Deals" },
      { title: "Responsive On All Devices" },
      { title: "Save URL For Future Searches" },
    ],
    link: "https://flights-replica.netlify.app/",
    image: GoogleFlightsHomePage,
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
        <SectionHeader
          eyebrow="Personal Projects"
          title="Featured Projects"
          description="Check out the digital experiences I brought to life."
        />
        <div className="flex flex-col mt-10 gap-20 md:mt-20" id="projects">
          {portfolioProjects.map((project, index) => {
            return (
              <Card
                key={project.title}
                className="md:pt-12 md:px-10 lg:pt-16 lg:px-20 px-8 pt-8 pb-0 sticky"
                style={{
                  top: `calc(64px + ${index * 40}px)`,
                }}
              >
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
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-lg"
                    />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
