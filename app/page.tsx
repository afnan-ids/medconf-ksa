import Image from "next/image";
import Navbar from "@/app/Layout/Navbar"
import Slider from "@/app/Layout/Slider"
import Services from "@/app/Components/Services"
import Portals from "@/app/Components/Portals"
import UpcomingEvents from "@/app/Components/UpcomingEvents"
import Footer from "@/app/Layout/Footer"

export default function Home() {
  return (
    <>

    <Navbar/>
    <Slider/>
     <Services/>
     <Portals/>
     <UpcomingEvents/>
     <Footer/>
    
    </>
  );
}
