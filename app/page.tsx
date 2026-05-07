import Slider from "@/app/Layout/Slider"
import Services from "@/app/Components/Home/Services"
import Portals from "@/app/Components/Home/Portals"
import UpcomingEvents from "@/app/Components/Home/UpcomingEvents"
import Testimonials from "@/app/Components/Home/Testonomials"
import SpeakersSection from "@/app/Components/Home/Speakers"
import MediaPartnersSection from "@/app/Components/Home/Partners"
import WhyAttend from "@/app/Components/Home/WhytoAttend"
import HealthSectors from "@/app/Components/Home/HealthSectors"
import StrategicObjectives from "@/app/Components/Home/StrategicObjectives"
import EventIndicators from "@/app/Components/Home/EventIndicators"
import ConferenceActivities from "@/app/Components/Home/ConferenceActivities"

export default function Home() {
  return (
    <>
    <Slider/>
    <SpeakersSection/>
     <Services/>
     <Portals/>
     <StrategicObjectives/>
     <EventIndicators/>
     <ConferenceActivities/>
     <HealthSectors/>
     <UpcomingEvents/>
     <WhyAttend/>
     
     <Testimonials/>
     <MediaPartnersSection/>
    </>
  );
}
 