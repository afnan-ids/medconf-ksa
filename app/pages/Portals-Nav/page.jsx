import React from "react";
import Portals from "@/app/Components/Portals";
import BreadCrum from "../../Components/BreadCrum";

const page = () => {
  return (
    <>
      <div className="">
        <BreadCrum
          title="Portals"
          backgroundImage="/Images/Home/Bread-crum-1.avif"
          path={["Home", "Pages", "Portals"]}
        />
      </div>

      <div className="">
        <Portals />
      </div>
    </>
  );
};

export default page;
