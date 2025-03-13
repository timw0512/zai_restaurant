import React from "react";
import styled from "styled-components";
import ProgressBar from "@/conponents/common/ProgressBar";
import ViewAll from "@/conponents/common/buttons/ViewAll";

const TrendingNewsStyled = styled.div`
  .article-title {
    display: inline-block;
    margin-bottom: 17px;
  }
`;
function WeeklyBestNews() {
  return (
    <TrendingNewsStyled>
      <div className="article-header">
        <span className="article-title">Weekly Best News</span>
        <ViewAll />
      </div>
      <ProgressBar
        current={1}
        total={15}
      />
    </TrendingNewsStyled>
  );
}

export default WeeklyBestNews;
