import React from 'react'
import EventsSection from '../../Components/Events'
import BreadCrum from '../../Components/BreadCrum'

const EventsPage = () => {
  return (
   <div>
     <div className="">
       <BreadCrum
        title="Events"
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={["Home", "Pages", "Events"]}
      />
    </div>
    <div>
      <EventsSection/>
    </div>
   </div>
  )
}

export default EventsPage