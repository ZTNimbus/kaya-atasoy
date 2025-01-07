import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import HeroOrbit from "@/components/HeroOrbit";
function Hero() {
  return (
    <div
      className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip"
      id="home"
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-10">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        />

        <div className=" size-[620px] hero-ring" />
        <div className=" size-[820px] hero-ring" />
        <div className=" size-[1020px] hero-ring" />
        <div className=" size-[1220px] hero-ring" />

        {/*Stars */}
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="5s"
        >
          <SparkleIcon className="size-12 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="5s"
        >
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
          <div className="size-2 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>

        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="5s"
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="8s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="8s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="42s">
          <div className="size-2 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>

        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="5s"
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={720}
          rotation={85}
          shouldOrbit
          orbitDuration="46s"
          shouldSpin
          spinDuration="8s"
        >
          <div className="size-3 bg-emerald-300/20 rounded-full" />
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotation={-85}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="8s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
        {/*Stars */}
      </div>

      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            alt="person sitting in front of a laptop"
            className="size-[100px]"
          />

          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 size-2.5 rounded-full absolute inset-0 animate-ping-large" />
            </div>
            <div className="text-sm font-medium">
              Open to Remote Job Opportunities
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
            Kaya ATASOY
          </h1>
          <p className="text-center mt-3 mb-6 text-lg tracking-wide font-serif">
            Software Developer
          </p>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I specialize in Full Stack Development, utilizing cutting edge
            technologies to bring great user experiences and applications to
            life.
          </p>
        </div>

        <div className="flex flex-col items-center mt-8 gap-4 md:flex-row justify-center">
          <a href="#projects">
            <button className="inline-flex items-center gap-2 border px-6 py-3 h-1/2 rounded-xl border-white/15">
              <span className="font-semibold">Explore my work</span>
              <ArrowDown className="size-4" />
            </button>
          </a>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 py-3 rounded-xl">
            <a
              href="https://www.linkedin.com/in/kaya-atasoy-906786257/"
              target="_blank"
            >
              <span>🖐</span>
              <span className="font-semibold">Let&apos;s Connect</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
