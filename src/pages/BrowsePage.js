import React, { useState } from "react";
import useContent from "../custom-hooks/useContent";
import HeaderWrapper from "../components/Header/HeaderWrapper";
import NavBar from "../components/Header/NavBar";
import Logo from "../components/Header/Logo";
import FeatureWrapper from "../components/Header/FeatureWrapper";
import FeatureTitle from "../components/Header/FeatureTitle";
import FeatureSubTitle from "../components/Header/FeatureSubTitle";
import PlayButton from "../components/Header/PlayButton";
import HeaderLink from "../components/Header/HeaderLink";


function BrowsePage() {

  let {series} = useContent('series');
  series = [
     { title: 'Documentaries', data: series.filter((item) => item.genre === 'documentaries') },
     { title: 'Comedies', data: series.filter((item) => item.genre === 'comedies') },
     { title: 'Children', data: series.filter((item) => item.genre === 'children') },
     { title: 'Crime', data: series.filter((item) => item.genre === 'crime') },
     { title: 'Feel Good', data: series.filter((item) => item.genre === 'feel-good') },
  ]

  let {films} = useContent('films');
  films = [
      { title: 'Drama', data: films.filter((item) => item.genre === 'drama') },      
      { title: 'Thriller', data: films.filter((item) => item.genre === 'thriller') },
      { title: 'Children', data: films.filter((item) => item.genre === 'children') },      
      { title: 'Suspense', data: films.filter((item) => item.genre === 'suspense') },      
      { title: 'Romance', data: films.filter((item) => item.genre === 'romance') },      
  ]

  const [category, setCategory] = useState("films")

  return (
    <>
    <HeaderWrapper className="header-wrapper-browse">
      <NavBar className="navbar-browse">
        <Logo />
        <HeaderLink 
          className={category === "films" ? "header-link-bold" : "header-link"}
          onClick={() => setCategory("films") } >
          Films
        </HeaderLink>
        <HeaderLink 
          className={category === "series" ? "header-link-bold" : "header-link"}
          onClick={() => setCategory("series") } >
          Series
        </HeaderLink>
      </NavBar>
      <FeatureWrapper>
        <FeatureTitle className="feature-title-browse">Watch Joker Now</FeatureTitle>
        <FeatureSubTitle className="feature-subtitle-browse">
          Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the 
          streets of Gotham City. Arthur wears two masks, the one he paints for his day job as 
          a clown, and the guise he projects in a futile attempt to feel like he is part of 
          the world around him.
        </FeatureSubTitle>
        <PlayButton>Play</PlayButton>
      </FeatureWrapper>
    </HeaderWrapper>
    </>
  )
}

export default BrowsePage;
