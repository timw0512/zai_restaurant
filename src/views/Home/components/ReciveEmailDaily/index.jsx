import React, { useState } from "react";
import Icon from "@/conponents/common/Icon";
import emailBackground from "@/assets/images/email_bg.png";
import styled from "styled-components";

const ReciveEmailDailyStyled = styled.div`
  background-color: #183354;
  padding: 28px 35px 30px;
  .title {
    height: 75px;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-weight: 800;
      font-size: 24px;
      line-height: 28.8px;
      text-align: center;
      text-transform: capitalize;
      color: #ffffff;
    }
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: url(${emailBackground});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      opacity: 0.1;
    }
  }
  .description {
    font-family: Inter;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    text-transform: capitalize;
    color: #fff;
  }
  .email-input {
    height: 50px;
    width: 100%;
    padding: 16px 18px 16px 20px;
    margin-top: 25px;
    background: #f4796c;
    border-radius: 5px;
    display: flex;
    align-items: center;
    input {
      flex: 1;
      border: none !important;
      color: #ffffff;
      background: transparent;
      &::placeholder {
        font-family: Inter;
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
      }
      &:focus-visible,
      &:focus {
        outline: unset;
      }
    }
  }
`;

function ReciveEmailDaily() {
  const [email, setEmail] = useState("");

  return (
    <ReciveEmailDailyStyled className="w-100">
      <div className="title">
        <p>Daily Newsletter</p>
      </div>
      <p className="description">
        Get all the top stories from Blogs to keep track.
      </p>
      <div className="email-input">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your e-mail"
        />
        <button
          type="button"
          onClick={() => console.log({ email })}
        >
          <Icon
            name="view_all"
            width="16px"
            height="16px"
            color="#fff"
          />
        </button>
      </div>
    </ReciveEmailDailyStyled>
  );
}

export default ReciveEmailDaily;
