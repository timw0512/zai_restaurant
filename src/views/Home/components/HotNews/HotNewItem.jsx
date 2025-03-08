import React from "react";
import Icon from "@/conponents/common/Icon";
import styled from "styled-components";
import dayjs from "dayjs";

const NewItemStyled = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  img {
    position: absolute;
    inset: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.89) 16.31%,
      rgba(10, 23, 41, 0) 100%
    );
  }
  .info {
    position: absolute;
    bottom: 20px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 0 20px;
    .category {
      padding: 4px 10px;
      display: flex;
      align-items: center;
      background-color: #f4796c;
      width: fit-content;
      span {
        font-weight: 600;
        font-size: 13px;
        letter-spacing: 0.78px;
        text-transform: uppercase;
        color: #ffffff;
      }
    }
    .title {
      font-weight: 700;
      font-size: 28px;
      line-height: 39.2px;
      text-transform: capitalize;
      color: #ffffff;
    }
    .more-info {
      display: flex;
      gap: 15px;
      div {
        display: flex;
        align-items: center;
        gap: 5px;
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
`;

function HotNewItem({ item }) {
  const { bgUrl, category, title, author, createTime } = item;

  return (
    <NewItemStyled>
      <img
        src={bgUrl}
        alt={`${category}_${title}_by_${author}`}
      />
      <div className="info">
        <div
          type="button"
          className="category"
          onClick={() => console.log("Go to category: ", category)}
        >
          <span>{category}</span>
        </div>
        <span className="title">{title}</span>
        <div className="more-info">
          <div className="author">
            <Icon
              name="account"
              color="#BACCE1"
            />
            <span>BY</span>
            <span>{author}</span>
          </div>
          <div className="create-time">
            <Icon name="calendar" />
            <span>{dayjs(createTime).format("DD MMMM, YYYY")}</span>
          </div>
          <div className="time-pass">
            <Icon name="clock_revert" />
          </div>
        </div>
      </div>
    </NewItemStyled>
  );
}

export default HotNewItem;
