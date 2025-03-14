import React from "react";
import HotNewItem from "./HotNewItem";
import { HOT_NEWS } from "@/constants/fakeHotNews";
import styled from "styled-components";

const NewsContainer = styled.div`
  width: 100%;
  height: 630px;
  margin: 50px 0;
  .news-content {
    display: flex;
    height: 100%;
    max-width: var(--max-width-desktop);
    margin: 0 auto;
    gap: 20px;
  }
  .latest {
    width: 60%;
    .info {
      padding: 0 40px !important;
    }
  }
  .other {
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex: 1;
    .news-item {
      flex: 1;
    }
  }
`;

function HotNews() {
  return (
    <NewsContainer>
      <div className="news-content">
        <div className="latest news-item">
          <HotNewItem item={HOT_NEWS?.[0]} />
        </div>
        <div className="other">
          {HOT_NEWS?.slice(1, 4)?.map((item, index) => (
            <div
              key={`hot_new_${item?.title}_${index}`}
              className="news-item"
            >
              <HotNewItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </NewsContainer>
  );
}

export default HotNews;
