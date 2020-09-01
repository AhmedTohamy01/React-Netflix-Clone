import React from "react";
import HeaderCompound from "../compounds/HeaderCompound";
import OptFormCompound from "../compounds/OptFormCompound";
import JumboCompound from "../compounds/JumboCompound";
import Seperator from "../components/Seperator/Seperator";
import AccordionCompound from "../compounds/AccordionCompound";

function HomePage() {
  return (
    <>
    <HeaderCompound>
      <OptFormCompound />
    </HeaderCompound>
    <Seperator />
    <JumboCompound />
    <AccordionCompound />
    </>
  )
}

export default HomePage;