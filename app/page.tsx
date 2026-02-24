import Image from "next/image";
import Navbar from "@/app/Layout/Navbar"
import Slider from "@/app/Layout/Slider"
import Services from "@/app/Components/Services"
import Portals from "@/app/Components/Portals"
import UpcomingEvents from "@/app/Components/UpcomingEvents"
// import Testimonials from "@/app/Components/Testonomials"
import SpeakersSection from "@/app/Components/Speakers"
import MediaPartnersSection from "@/app/Components/Partners"
// import EventsSection from "@/app/Components/raugh"

export default function Home() {
  return (
    <>
    <Slider/>
    <SpeakersSection/>
     <Services/>
     <Portals/>
     <UpcomingEvents/>
     <MediaPartnersSection/>
     {/* <EventsSection/> */}

   
    </>
  );
}
