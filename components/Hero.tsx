import Button from "./Button";
import Reveal from "./ui/Reveal";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[100vh] w-[50vw] top-10 left-full"
          fill="red"
        />
        <Spotlight className="left-80 top-28 h-[100vh] w-[50vw]" fill="red" />
      </div>
      <div className="text-center my-20 mx-auto max-w-[900px] justify-center flex flex-col ">
        <Reveal>
          <h1 className="text-center text-4xl md:text-6xl lg:text-8xl font-extrabold">
            Hey, I&apos;m {''}
            <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
            Govind Raj Gupta!
            </span>
          </h1>
        </Reveal>
        <h2 className="title my-6 text-xl md:text-3xl lg:text-5xl">
        🚀 Full-Stack Developer | Web3 & AI Enthusiast
        </h2>
        <p className="max-w-[700px] mx-auto">
        I craft high-performance apps with Next.js, MERN, Blockchain, and LLMs, deploying seamlessly with Docker, AWS & Kubernetes. Passionate about AI & decentralized tech, I thrive on innovation. Let&apos;s build something game-changing! ⚡
        </p>
        <a className="mt-10 mx-auto" href="#contact">
          <Button
            title="Contact me"
            icon={<img src="assets/send.svg" />}
            position="right"
          />
        </a>
       
      </div>
    </div>
  );
};

export default Hero;
