'use client';

import Contact from "@/src/components/landing/Contact";
import Hero from "@/src/components/landing/Hero";
import Benefits from "@/src/components/landing/Benefits";
import PainPoints from "@/src/components/landing/PainPoints";
import PremiumVideo from "@/src/components/landing/PremiumVideo";
import Solution from "@/src/components/landing/Solution";
import TargetAudience from "@/src/components/landing/TargetAudience";
import Testimonials from "@/src/components/landing/Testimonials";
import Pricing from "@/src/components/landing/Pricing";

const Landing = () => {
  return (
    <>
      <Hero />
      <PainPoints />
      <Solution />
      <PremiumVideo />
      <Benefits />
      <Testimonials />
      <TargetAudience />
      <Pricing />
      <Contact />
    </>
  );
};

export default Landing;
