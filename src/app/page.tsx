import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import BrandsSection from "@/components/BrandsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactForm from "@/components/ContactForm";
import ResultsSection from "@/components/Results";

export default function Home() {
  return (
      <>
          <Hero/>
          <AboutSection/>
          <BrandsSection/>
          <ResultsSection/>
          <ServicesSection/>
          <ContactForm/>
      </>
  );
}
