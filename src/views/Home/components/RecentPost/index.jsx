import React from "react";
import styled from "styled-components";
import ProgressBar from "@/conponents/common/ProgressBar";
import HotNewItem from "../HotNews/HotNewItem";
import { RECENT_LIST } from "@/constants/fakeRecent";
import PostItem from "@/conponents/common/PostItem";
import ViewAll from "@/conponents/common/buttons/ViewAll";

const RecentPostStyled = styled.div`
  width: 100%;
  .article-title {
    display: inline-block;
    margin-bottom: 17px;
  }
  .article-content {
    display: flex;
    gap: 30px;
    height: 520px;
    .main-content {
      width: 55%;
    }
    .other-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;
      .recent-post_item {
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        gap: 18px;
        img {
          width: 160px;
          height: 160px;
          object-fit: cover;
          border-radius: 5px;
        }
        .post-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 12px;
          .post-category {
            width: fit-content;
            font-weight: 600;
            font-size: 13px;
            letter-spacing: 0.78px;
            text-transform: uppercase;
            border: 1px solid #b8c1cd;
            border-radius: 3px;
            padding: 4px 10px;
            color: #ffffff;
            background-color: #f4796c;
          }
          .post-title {
            font-weight: 700;
            font-size: 18px;
            line-height: 25.2px;
            text-transform: capitalize;
            color: #183354;
          }
          .post-create-time {
            display: flex;
            gap: 5px;
            span {
              font-family: Inter;
              font-weight: 600;
              font-size: 13px;
              letter-spacing: 0.52px;
              text-transform: uppercase;
              color: #6d757f;
            }
          }
        }
      }
    }
  }
`;
function RecentPost({ className }) {
  return (
    <RecentPostStyled className={className}>
      <div className="article-header">
        <span className="article-title">Recent Posts</span>
        <ViewAll />
      </div>
      <ProgressBar
        current={1}
        total={20}
      />
      <div className="article-content mt-30">
        <div className="main-content">
          <HotNewItem item={RECENT_LIST?.[0]} />
        </div>
        <div className="other-content">
          {RECENT_LIST?.slice(1)
            ?.splice(0, 3)
            ?.map((item, index) => (
              <PostItem
                item={item}
                key={`${item.title}_${index}`}
                className={"recent-post_item"}
                titleClassName={"text-ellipsis-2"}
              />
            ))}
        </div>
      </div>
    </RecentPostStyled>
  );
}

export default RecentPost;
