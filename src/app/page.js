import Hero from "@/components/Hero";
import All_Time_Favourites from "@/sections/All_Time_Favourites";
import Customer_Love from "@/sections/Customer_Love";
import Taste_Our_Snacks from "@/sections/Taste_Our_Snacks";
import Home_Intro from "@/sections/Home_Intro";
import Why_Choose_Us from "@/sections/Why_Choose_Us";
import Home_Faq from "@/sections/Home_Faq";
import React from "react";

export const metadata = {
  title: "Top Chips & Namkeen Brands in Bihar | GME Foods",
  description:
    "Looking for chips & namkeen brands in Bihar? GME Foods makes bhujia, chiwda, moong dal, kurkure & chips in Hajipur. Fresh, hygienic, crunchy snacks. Contact us now!",
  keywords: [
    "GME",
    "GME Foods",
    "Chips & Namkeen Brands in Bihar",
    "Best Chips & Namkeen Brands in Bihar",
    "Top Chips & Namkeen Brands of Bihar",
    "Best Chips brand of Bihar",
    "best namkeen Brand of Bihar",
  ],
  alternates: {
    canonical: "/",
  },
};

function page() {
  return (
    <>
      <Hero />
      <Home_Intro />
      <Taste_Our_Snacks />
      <All_Time_Favourites/>
      <Customer_Love/>
      <Why_Choose_Us />
      <Home_Faq />
    </>
  );
}

export default page;
