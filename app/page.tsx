'use client';

import FinalCTA from "@/src/components/landing/FinalCTA";
import Hero from "@/src/components/landing/Hero";
import Benefits from "@/src/components/landing/Benefits";
import PainPoints from "@/src/components/landing/PainPoints";
import Solution from "@/src/components/landing/Solution";
import TargetAudience from "@/src/components/landing/TargetAudience";
import Pricing from "@/src/components/landing/Pricing";

const Landing = () => {
  return (
    <>
      <Hero />
      <PainPoints />
      <Solution />
      <Benefits />
      <TargetAudience />
      <Pricing />
      <FinalCTA />
    </>
  );
};

export default Landing;
