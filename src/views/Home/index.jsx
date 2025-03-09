import React from "react";
import { HomeContainer } from "./styled";
import HotNews from "./components/HotNews";
import SmallAds from "./components/SmallAds";
import { ADS_LIST } from "../../constants/fakeAds";
import EditorChoice from "./components/EditorChoices";

const Home = () => {
  return (
    <HomeContainer>
      <HotNews />
      <SmallAds
        size="75%"
        ads={ADS_LIST?.[0]}
        className="home-content"
      />
      <EditorChoice className="home-content mt-30" />
    </HomeContainer>
  );
};

export default Home;
