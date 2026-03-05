'use client';

import Contact from "@/src/components/landing/Contact";
import Hero from "@/src/components/landing/Hero";
import PainPoints from "@/src/components/landing/PainPoints";
import Solution from "@/src/components/landing/Solution";
import Testimonials from "@/src/components/landing/Testimonials";

const Landing = () => {
  return (
    <>
      <Hero />
      <PainPoints />
      <Solution />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Landing;
