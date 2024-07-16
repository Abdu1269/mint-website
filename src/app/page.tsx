import Image from "next/image";
import Hero from "@/components/hero";
import Sectors from "@/components/sectors/page";
import ServicesPage from "@/components/services/page";
import FrightsPage from "@/components/fright-types/page";
import Feature from "@/components/features/feature";
import Card1 from "@/components/card1/card1";
import Stats from "@/components/stats/pages";
import Steps from "@/components/steps/steps";
import Card2 from "@/components/card2";
import ContactUs from "@/components/contactus";
import Faq from "@/components/faq";
import CloudLogo from "@/components/cloudlogo/page";
import Testimonials from "@/components/testimonials/page";
export default function Home() {
  return (
    <div>
      <Hero />
      <Feature />
      <Card1 />
      <Stats />
      <Card2 />
      <CloudLogo />
      <Steps />
      <Testimonials />
      <Faq />
      <ContactUs />
      {/* <Hero/>
    <ServicesPage />
    <Sectors/>
    <FrightsPage/>
    <Stats/> */}
    </div>
  );
}
