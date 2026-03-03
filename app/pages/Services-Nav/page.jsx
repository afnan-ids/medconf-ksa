
import React from 'react'
import Services from "@/app/Components/Services"
import BreadCrum from '../../Components/BreadCrum'

const page = () => {
  return (
    <div>
     <BreadCrum
        title="Services"
        backgroundImage="/Images/Home/Bread-crum-1.avif"
        path={["Home", "Pages", "Services"]}
      />

    <div><Services/></div>
    </div>
  )
}

export default page