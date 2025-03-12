import React from "react";
import { HomeContainer } from "./styled";
import { ADS_LIST } from "../../constants/fakeAds";
import HotNews from "./components/HotNews";
import SmallAds from "./components/SmallAds";
import EditorChoice from "./components/EditorChoices";
import RecentsPost from "./components/RecentPost";
import SubscribeAndFollow from "./components/SubscribeAndFollower";
import ReciveEmailDaily from "./components/ReciveEmailDaily";
import HotCategories from "./components/HotCategories";
import TrendingNews from "./components/TrendingNews";

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
        <article className="mt-30 d-flex flex-column gap-50">
          <RecentsPost />
          <SmallAds
            size="100%"
            ads={ADS_LIST?.[1]}
          />
          <TrendingNews />
        </article>
        <aside className="mt-30 d-flex gap-50 flex-column">
          <SubscribeAndFollow />
          <ReciveEmailDaily />
          <HotCategories />
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
