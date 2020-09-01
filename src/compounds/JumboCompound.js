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
          <JumboTitle>Enjoy on your TV</JumboTitle>
          <JumboSubTitle>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</JumboSubTitle>
        </JumboTextWrapper>
        <JumboImageWrapper>
          <JumboImage src="/images/misc/home-tv.jpg" alt="Tiger King on Netflix"></JumboImage>
        </JumboImageWrapper>
      </JumboItem>
    </JumboWrapper>
  )
}

export default JumboCompound 
