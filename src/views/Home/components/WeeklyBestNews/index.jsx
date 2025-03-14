import React from "react";
import styled from "styled-components";
import ProgressBar from "@/conponents/common/ProgressBar";
import ViewAll from "@/conponents/common/buttons/ViewAll";
import BigNewItem from "@/conponents/common/BigNewItem";
import { WEEKLY_NEWS } from "@/constants/fakeWeeklyBestNews";

const WeeklyBestNewsStyled = styled.div`
  .article-title {
    display: inline-block;
    margin-bottom: 17px;
  }
  .weekly-news-wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
    .weekly-news-item {
      display: flex;
      flex-direction: row-reverse;
      .info {
        padding: 5px 0;
      }
      .category {
        height: 26px;
        display: inline-flex;
        align-items: center;
      }
      .writen-info {
        svg {
          width: 16px;
          height: 16px;
        }
        span {
          display: inline-block;
          line-height: 16px;
        }
      }
    }
  }
`;
function WeeklyBestNews() {
  return (
    <WeeklyBestNewsStyled>
      <div className="article-header">
        <span className="article-title">Weekly Best News</span>
        <ViewAll />
      </div>
      <ProgressBar
        current={1}
        total={15}
      />
      <div className="weekly-news-wrapper mt-30">
        {WEEKLY_NEWS?.slice(0, 4)?.map((newItem, index) => (
          <BigNewItem
            newItem={newItem}
            key={`${newItem.title}_${index}`}
            className="weekly-news-item"
            titleClassName={"text-ellipsis-2"}
            descriptionClassName={"text-ellipsis-3"}
          />
        ))}
      </div>
    </WeeklyBestNewsStyled>
  );
}

export default WeeklyBestNews;
