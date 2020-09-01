import React from "react";
import JumboWrapper from "../components/Jumbotron/JumboWrapper";
import JumboItem from "../components/Jumbotron/JumboItem";
import JumboTextWrapper from "../components/Jumbotron/JumpoTextWrapper";
import JumboTitle from "../components/Jumbotron/JumboTitle";

function JumboCompound() {
  return (
    <JumboWrapper>
      <JumboItem>
        <JumboTextWrapper>
          <JumboTitle></JumboTitle>

        </JumboTextWrapper>
      </JumboItem>
    </JumboWrapper>
  )
}

export default JumboCompound 
