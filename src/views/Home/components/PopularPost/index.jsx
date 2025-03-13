import React from "react";
import ProgressBar from "@/conponents/common/ProgressBar";
import styled from "styled-components";
import Icon from "@/conponents/common/Icon";
import PostItem from "@/conponents/common/PostItem";
import { POPULAR_POST } from "@/constants/fakePopularPost";

const PopularPostStyled = styled.div`
  .aside-title {
    display: inline-block;
    margin-bottom: 15px;
  }
  .popular-post-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 25px;
    .popular-post_item {
      display: flex;
      align-items: center;
      gap: 18px;
      img {
        width: 110px;
        height: 110px;
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
`;

function PopularPost() {
  return (
    <PopularPostStyled className="w-100">
      <span className="aside-title">Popular Posts</span>
      <ProgressBar
        current={1}
        total={15}
      />
      <div className="popular-post-list mt-30">
        {POPULAR_POST?.slice(0, 3)?.map((item, index) => (
          <PostItem
            item={item}
            key={`${item.title}_${index}`}
            className={"popular-post_item"}
            titleClassName={"text-ellipsis-2"}
          />
        ))}
      </div>
    </PopularPostStyled>
  );
}

export default PopularPost;
