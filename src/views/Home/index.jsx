import React from "react";
import { HomeContainer } from "./styled";
import HotNews from "./components/HotNews";
import SmallAds from "./components/SmallAds";
import { ADS_LIST } from "../../constants/fakeAds";
import EditorChoice from "./components/EditorChoices";
import RecentsPost from "./components/RecentPost";
import SubscribeAndFollow from "./components/SubscribeAndFollower";

const Home = () => {
  return (
    <HomeContainer>
      <HotNews />
      <SmallAds
        size="75%"
        ads={ADS_LIST?.[0]}
        className="home-content"
      />
      <EditorChoice className="home-content mt-30 w-100" />
      <div className="d-flex gap-55 home-content w-100">
        <article>
          <RecentsPost className="mt-30" />
          <SmallAds
            size="100%"
            ads={ADS_LIST?.[1]}
            className="mt-30"
          />
        </article>
        <aside>
          <SubscribeAndFollow />
        </aside>
      </div>
      <SmallAds
        size="100%"
        ads={ADS_LIST?.[2]}
        className="home-content mt-30"
      />
    </HomeContainer>
  );
};

export default Home;
