import React from "react";
import AccordionWrapper from "../components/Accordion/AccordionWrapper";
import AccordionTitle from "../components/Accordion/AccordionTitle";
import AccordionItem from "../components/Accordion/AccordionItem";
import AccordionHeader from "../components/Accordion/AccordionHeader";
import AccordionBody from "../components/Accordion/AccordionBody";

function AccordionCompound() {
  return (
    <AccordionWrapper>
      <AccordionTitle>Frequently Asked Questions</AccordionTitle>
      <AccordionItem>
        <AccordionHeader>What is Netflix?</AccordionHeader>
        <AccordionBody>
        Netflix is a streaming service that offers a wide variety of award-winning TV programmes, 
        films, anime, documentaries and more – on thousands of internet-connected devices.\n\nYou 
        can watch as much as you want, whenever you want, without a single advert – all for one low 
        monthly price. There's always something new to discover, and new TV programmes and films are 
        added every week!
        </AccordionBody>
      </AccordionItem>
    </AccordionWrapper>
  )
}


export default AccordionCompound;