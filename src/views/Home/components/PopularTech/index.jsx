import React from "react";
import ProgressBar from "@/conponents/common/ProgressBar";
import styled from "styled-components";
import Icon from "@/conponents/common/Icon";
import PostItem from "@/conponents/common/PostItem";
import HotNewItem from "../HotNews/HotNewItem";
import { POPULAR_TECH } from "@/constants/fakePopularTech";

const PopularTechStyled = styled.div`
  .aside-title {
    display: inline-block;
    margin-bottom: 15px;
  }
  .first-popular-tech {
    height: 364px;
    img {
      height: 364px;
      border-radius: 5px;
    }
    .info {
      justify-content: flex-end;
      inset: 0;
      padding: 0px 25px 30px 30px;
      background: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
      .category {
        height: 26px;
        span {
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.78px;
          text-transform: uppercase;
        }
      }
      .title {
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        text-transform: capitalize;
      }
      .more-info {
        .author {
          display: none;
        }
        span {
          font-family: Inter;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.52px;
          text-transform: uppercase;
          color: #bacce1;
        }
      }
    }
  }
  .popular-tech-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 25px;
    padding-top: 25px;
    .popular-tech_item {
      display: flex;
      align-items: center;
      gap: 16px;
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
        gap: 8px;
        .post-category {
          height: 24px;
          width: fit-content;
          display: flex;
          align-items: center;
          padding: 0 9px;
          border: 1px solid #b8c1cd;
          border-radius: 3px;
          color: #6d757f;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.78px;
          text-transform: uppercase;
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
          align-items: center;
          gap: 5px;
          svg g path {
            fill: #6d757f;
          }
          span {
            font-family: Inter;
            font-weight: 600;
            font-size: 13px;
            letter-spacing: 0.52px;
            text-transform: uppercase;
            color: #6d757f;
            padding-top: 1px;
          }
        }
      }
    }
  }
`;

function PopularTech() {
  return (
    <PopularTechStyled className="w-100">
      <span className="aside-title">Popular Tech</span>
      <ProgressBar
        current={1}
        total={15}
      />
      <HotNewItem
        item={POPULAR_TECH?.[0]}
        className="first-popular-tech mt-30"
      />
      <div className="popular-tech-list">
        {POPULAR_TECH?.slice(1, 4)?.map((item, index) => (
          <PostItem
            item={item}
            key={`${item.title}_${index}`}
            className={"popular-tech_item"}
            titleClassName={"text-ellipsis-2"}
          />
        ))}
      </div>
    </PopularTechStyled>
  );
}

export default PopularTech;
