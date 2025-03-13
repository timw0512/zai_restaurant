import dayjs from "dayjs";
import Icon from "@/conponents/common/Icon";
import ViewAll from "@/conponents/common/buttons/ViewAll";
import React from "react";
import styled from "styled-components";

const BigNewItemStyled = styled.div`
  img {
    border-radius: 6px;
  }
  display: flex;
  flex: 1;
  width: 100%;
  gap: 25px;
  .category {
    width: fit-content;
    padding: 4px 10px;
    border-radius: 3px;
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0.78px;
    text-transform: uppercase;
    color: #ffffff;
    background: #f4796c;
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 15px;
    .title {
      font-weight: 700;
      font-size: 28px;
      line-height: 36.4px;
      text-transform: capitalize;
    }
    .writen-info {
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
          color: #6d757f;
        }
      }
    }
  }
  .description {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    text-transform: capitalize;
    color: #545e69;
  }
`;

function BigNewItem({ newItem }) {
  return (
    <BigNewItemStyled>
      <img
        src={newItem?.imageUrl}
        alt={newItem?.title}
      />
      <div className="info">
        <p className="category">{newItem?.category}</p>
        <p className="title">{newItem?.title}</p>
        <div className="writen-info">
          <div className="author">
            <Icon
              name="account"
              color="#6d757f"
            />
            <span>BY</span>
            <span>{newItem?.author}</span>
          </div>
          <div className="create-time">
            <Icon
              name="calendar"
              color="#6d757f"
            />
            <span>{dayjs(newItem?.createTime).format("DD MMMM, YYYY")}</span>
          </div>
          <div className="time-pass">
            <Icon
              name="clock_revert"
              color="#6d757f"
            />
          </div>
        </div>
        <p className="description">{newItem?.description}</p>
        <ViewAll title="Read More" />
      </div>
    </BigNewItemStyled>
  );
}

export default BigNewItem;
