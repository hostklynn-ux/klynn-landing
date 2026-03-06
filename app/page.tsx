'use client';

import Contact from "@/src/components/landing/Contact";
import Hero from "@/src/components/landing/Hero";
import HowKlynnWorks from "@/src/components/landing/HowKlynnWorks";
import PainPoints from "@/src/components/landing/PainPoints";
import PremiumVideo from "@/src/components/landing/PremiumVideo";
import Solution from "@/src/components/landing/Solution";
import TargetAudience from "@/src/components/landing/TargetAudience";
import Testimonials from "@/src/components/landing/Testimonials";

const Landing = () => {
  return (
    <>
      <Hero />
      <PainPoints />
      <Solution />
      <PremiumVideo />
      <HowKlynnWorks />
      <Testimonials />
      <TargetAudience />
      <Contact />
    </>
  );
};

export default Landing;
