import Card from "@/components/Card";
import SectionHeader from "@/components/SectionHeader";
import BookImage from "@/assets/images/book-cover.png";
import memojiSmile from "@/assets/images/memoji-smile.png";
import mapImage from "@/assets/images/map.png";
import Image from "next/image";

import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import NodeIcon from "@/assets/icons/node.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
import CardHeader from "@/components/CardHeader";
import TechItems from "@/components/TechItems";

const tech = [
  { title: "Javascript", iconType: JavascriptIcon },
  { title: "React", iconType: ReactIcon },
  { title: "HTML", iconType: HTMLIcon },
  { title: "CSS", iconType: CSSIcon },
  { title: "Node", iconType: NodeIcon },
  { title: "Next", iconType: NextIcon },
  { title: "Chrome", iconType: ChromeIcon },
  { title: "Github", iconType: GithubIcon },
];

const hobbies = [
  { title: "Drawing", emoji: "🖊", left: "5%", top: "5%" },
  { title: "Legos", emoji: "🌻", left: "50%", top: "5%" },
  { title: "Video Games", emoji: "🎮", left: "10%", top: "35%" },
  { title: "Music", emoji: "🎼", left: "35%", top: "40%" },
];

function About() {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Who Am I Anyway?"
          description="Learn all you need to know about me and my work."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="See the works that inspire me."
              />

              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={BookImage} alt="book cover" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Tech"
                description="Observe the technologies I use to shape the digital world."
              />

              <TechItems tech={tech} />
              <TechItems
                tech={tech}
                className="mt-6"
                techWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond Code"
                description="See what else I like!"
                className="p-6"
              />

              <div className="relative flex-1">
                {hobbies.map((item) => {
                  return (
                    <div
                      key={item.title}
                      className="inline-flex gap-2 px-6 items-center bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                      style={{ left: item.left, top: item.top }}
                    >
                      <span className="font-medium text-gray-950">
                        {item.title}
                      </span>
                      <span>{item.emoji}</span>
                    </div>
                  );
                })}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute bottom-3 right-0 -translate-x-0 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-green-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image
                  src={memojiSmile}
                  alt="memoji smile"
                  className="size-20"
                />
              </div>
              <p className="absolute text-gray-950 top-0 left-[39%] font-semibold text-xl">
                Istanbul
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
