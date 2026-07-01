import Slider from "@/app/Layout/Slider";
import Services from "@/app/Components/Home/Services";
import Portals from "@/app/Components/Home/Portals";
import UpcomingEvents from "@/app/Components/Home/UpcomingEvents";
import Testimonials from "@/app/Components/Home/Testonomials";
import SpeakersSection from "@/app/Components/Home/Speakers";
import MediaPartnersSection from "@/app/Components/Home/Partners";
import WhyAttend from "@/app/Components/Home/WhytoAttend";
import HealthSectors from "@/app/Components/Home/HealthSectors";
import StrategicObjectives from "@/app/Components/Home/StrategicObjectives";
import EventIndicators from "@/app/Components/Home/EventIndicators";
import ConferenceActivities from "@/app/Components/Home/ConferenceActivities";
import WomenAndHealth from "@/app/Components/Home/WomenHealth";
import EnablingPartners from "@/app/Components/Home/EnablingPartners";
import { languageFetch } from "./api/langaugeFetcher";
export default async function Home() {
  const data = await languageFetch(null, "Home", null, null, null, null, {
    method: "POST",
    next: { revalidate: 60 }, 
  });
  console.log("Fetched data:", data);
  return (
    <>
      <Slider data={data} />
      {/* <SpeakersSection /> */}
      <Services />
      <Portals />
      <StrategicObjectives />
      <EventIndicators />
      <HealthSectors />
      <ConferenceActivities />

      <WomenAndHealth />
      {/* <UpcomingEvents /> */}
      {/* <WhyAttend /> */}

      {/* <Testimonials /> */}
      <EnablingPartners />
      <MediaPartnersSection />
    </>
  );
}
