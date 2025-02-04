"use client";

import FloatingBar from "@/components/ui/FloatingBar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NavBar from "@/components/ui/NavBar";
import Approach from "@/components/Approach";

const Home = () => {
  return (
    <main className="h-screen bg-[#120012] flex">
      <NavBar />
      <div className="w-full overflow-y-auto mx-auto overflow-hidden">
        <div className="px-5 sm:px-40">
          <FloatingBar />
          <Hero />
          <About />
          <Projects />
          {/* <Experience /> */}
          <Approach />
          <Contact />
        </div>
        <Footer />
      </div>
    </main>

  );
};

export default Home;
