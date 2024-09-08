
import About from "@/components/custom/About";
import Contact from "@/components/custom/Contact";
import Footer from "@/components/custom/Footer";
import Hero from "@/components/custom/Hero";
import Skill from "@/components/custom/Skill";
import Image from "next/image";

export default function Home() {
  return (
    <main>
   <div></div>
  <Hero/>
  <div className="relative z-[30]">
  <About/>
  </div>
  <Skill/>
  <Contact/>
  <Footer/>
  

    </main>
  );
}


