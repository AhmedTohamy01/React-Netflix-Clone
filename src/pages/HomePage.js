import React from "react";
import HeaderCompound from "../compounds/HeaderCompound";
import OptFormCompound from "../compounds/OptFormCompound";
import JumboCompound from "../compounds/JumboCompound";

function HomePage() {
  return (
    <>
    <HeaderCompound>
      <OptFormCompound />
    </HeaderCompound>
    <JumboCompound />
    </>
  )
}

export default HomePage;