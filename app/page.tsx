'use client';

import About from "@/src/components/landing/About";
import Contact from "@/src/components/landing/Contact";
import Hero from "@/src/components/landing/Hero";
import Services from "@/src/components/landing/Services";
import Testimonials from "@/src/components/landing/Testimonials";
import Values from "@/src/components/landing/Values";
import WhyKlynn from "@/src/components/landing/WhyKlynn";

const Landing = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Values />
      <WhyKlynn />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Landing;
