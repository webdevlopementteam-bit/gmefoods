import Hero from "@/components/Hero";
import All_Time_Favourites from "@/sections/All_Time_Favourites";
import Customer_Love from "@/sections/Customer_Love";
import Taste_Our_Snacks from "@/sections/Taste_Our_Snacks";
import React from "react";

function page() {
  return (
    <>
      <Hero />
      <Taste_Our_Snacks />
      <All_Time_Favourites/>
      <Customer_Love/>
    </>
  );
}

export default page;
