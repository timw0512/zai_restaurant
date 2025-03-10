import React from "react";
import ProgressBar from "@/conponents/common/ProgressBar";
import styled from "styled-components";
import { SOCIAL_LIST } from "@/constants/fakeSocial";

const SubscribeAndFollowStyled = styled.div`
  .aside-title {
    display: inline-block;
    margin-bottom: 15px;
  }
  .social-link-list {
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
        {SOCIAL_LIST?.map((social) => (
          <button type="button">{social.title}</button>
        ))}
      </div>
    </SubscribeAndFollowStyled>
  );
}

export default SubscribeAndFollow;
