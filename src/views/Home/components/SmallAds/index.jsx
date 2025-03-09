import React from "react";
import styled from "styled-components";

const AdsStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  img {
    width: ${(props) => props.size || "100%"};
  }
`;
function SmallAds({ size, ads, className }) {
  const { imageUrl, url, description } = ads;
  return (
    <AdsStyled
      size={size}
      onClick={() => window.open(url, "_blank")}
      className={className}
    >
      <img
        src={imageUrl}
        alt={description}
      />
    </AdsStyled>
  );
}

export default SmallAds;
