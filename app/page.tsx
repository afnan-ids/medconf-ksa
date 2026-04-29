import Slider from "@/app/Layout/Slider"
import Services from "@/app/Components/Home/Services"
import Portals from "@/app/Components/Home/Portals"
import UpcomingEvents from "@/app/Components/Home/UpcomingEvents"
import Testimonials from "@/app/Components/Home/Testonomials"
import SpeakersSection from "@/app/Components/Home/Speakers"
import MediaPartnersSection from "@/app/Components/Home/Partners"
import WhyAttend from "@/app/Components/Home/WhytoAttend"
import HealthSectors from "@/app/Components/Home/HealthSectors"

export default function Home() {
  return (
    <>
    <Slider/>
    <SpeakersSection/>
     <Services/>
     <Portals/>
     <UpcomingEvents/>
     <WhyAttend/>
     <HealthSectors/>
     <Testimonials/>
     <MediaPartnersSection/>
    </>
  );
}
 