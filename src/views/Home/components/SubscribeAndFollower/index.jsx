import React from "react";
import ProgressBar from "@/conponents/common/ProgressBar";
import styled from "styled-components";
import Icon from "@/conponents/common/Icon";
import { SOCIAL_LIST } from "@/constants/fakeSocial";

const SubscribeAndFollowStyled = styled.div`
  .aside-title {
    display: inline-block;
    margin-bottom: 15px;
  }
  .social-link-list {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    .social-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0 1 calc(50% - 4px);
      gap: 10px;
      height: 44.5px;
      border-radius: 4px;
      background-color: #e8f1f1;
      .social-title {
        font-family: Inter;
        font-weight: 500;
        font-size: 14px;
        line-height: 24.5px;
        text-transform: capitalize;
      }
    }
  }
`;

function SubscribeAndFollow() {
  return (
    <SubscribeAndFollowStyled className="w-100">
      <span className="aside-title">Subscribe & Followers</span>
      <ProgressBar
        current={1}
        total={20}
      />
      <div className="social-link-list mt-30">
        {SOCIAL_LIST?.map((social, index) => (
          <button
            type="button"
            key={`social_${social?.title}_${index}`}
            className="social-btn"
          >
            <Icon name={social?.icon} />
            <span className="social-title">{social.title}</span>
          </button>
        ))}
      </div>
    </SubscribeAndFollowStyled>
  );
}

export default SubscribeAndFollow;
