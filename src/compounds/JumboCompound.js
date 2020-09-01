import React from "react";
import JumboWrapper from "../components/Jumbotron/JumboWrapper";
import JumboItem from "../components/Jumbotron/JumboItem";
import JumboTextWrapper from "../components/Jumbotron/JumpoTextWrapper";
import JumboTitle from "../components/Jumbotron/JumboTitle";
import JumboSubTitle from "../components/Jumbotron/JumboSubTitle";
import JumboImageWrapper from "../components/Jumbotron/JumboImageWrapper";
import JumboImage from "../components/Jumbotron/JumboImage";

function JumboCompound() {
  return (
    <JumboWrapper>
      <JumboItem>
        <JumboTextWrapper>
          <JumboTitle></JumboTitle>
          <JumboSubTitle></JumboSubTitle>
        </JumboTextWrapper>
        <JumboImageWrapper>
          <JumboImage></JumboImage>
        </JumboImageWrapper>
      </JumboItem>
    </JumboWrapper>
  )
}

export default JumboCompound 
