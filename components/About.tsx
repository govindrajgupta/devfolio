import React from "react";
import { Sparkle } from "./ui/Sparkle";
import { myTechStack } from "@/data";
import Reveal from "./ui/Reveal";

const About = () => (
  <section id="about" className="py-20 w-full space-y-10">
    <Reveal>
      <h3 className="mb-10">
        About{' '}
        <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
          me.
        </span>
      </h3>
    </Reveal>
    <div className="sm:flex grid-cols-[2fr_1fr] gap-6 space-y-5 sm:space-y-0">
      <Sparkle
        duration={Math.floor(Math.random() * 10000) + 10000}
        className="flex-col text-left p-3 md:p-5 lg:p-10 gap-5 min-h-full"
      >
        <p>
        Hey! I&apos;m Govind — Full-Stack Developer, Web3 Enthusiast & AI Innovator..
        </p>
        <p>
        I specialize in Next.js, MERN, Blockchain, LLMs, and Web3, building high-performance applications that push the boundaries of tech. Beyond coding, I&apos;m passionate about problem-solving, innovation, and shaping the future of AI and decentralized systems.
        </p>
        <p>
        I believe great ideas deserve flawless execution, and I&apos;m always up for a challenge. Whether it&apos;s crafting the next big thing or exploring cutting-edge tech, let&apos;s build something extraordinary! 🚀
        </p>
      </Sparkle>

      <div
        className="relative overflow-hidden rounded-3xl border border-white/[0.1] transition duration-200 shadow-input dark:shadow-none flex flex-col space-y-4 p-10"
      >
        <p className="text-lg lg:text-3xl font-extrabold">
          <span className="bg-gradient-to-r from-purple to-red-700 bg-clip-text text-transparent">
            My tech Stack!
          </span>
        </p>

        <div className="flex flex-wrap gap-3 py-4">
          {myTechStack.map((skill) => (
            <div
              key={skill}
              className="bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-white/20 transition duration-200 ease-in-out"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
