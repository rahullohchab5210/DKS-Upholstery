import AboutUs from "@/components/AboutUs";
import BeforeAfter from "@/components/BeforeAfter";
import FAQ from "@/components/FAQ";
import FreeQuote from "@/components/FreeQuote";
import Hero from "@/components/Hero";
import LovedBySingapore from "@/components/LovedBySingapore";
import OurServices from "@/components/OurServices";
import ServiceWorks from "@/components/ServiceWorks";
import Transformations from "@/components/Transformations";
import Trusted from "@/components/Trusted";
import Upholstery_experts from "@/components/Upholstery_experts";
import Upholstery_tips from "@/components/Upholstery_tips";

export default function Home() {
  return (
    <>

      <Hero />
      <FreeQuote />
      <Trusted />
      <LovedBySingapore />
      <div className="bg-[#FAF9F5]">
        <BeforeAfter />
        <OurServices />
      </div>
      <Transformations />
      <AboutUs />
      <div className="bg-[#FAF9F5]">
        <ServiceWorks />
        <FAQ />
      </div>
      <Upholstery_tips />
      <Upholstery_experts />

    </>
  );
}
