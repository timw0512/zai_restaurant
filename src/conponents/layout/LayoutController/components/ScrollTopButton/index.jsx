import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Icon from "@/conponents/common/Icon";

const ScrollTopButtonStyled = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4796c;
`;

function ScrollTopButton({ scrollThreshold = 200 }) {
  const scrollableElementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollableElement = document.getElementById("main-container");
    if (!scrollableElement) {
      console.error(`Element with ID "main-container" not found.`);
      return; // Exit if the element doesn't exist
    }
    scrollableElementRef.current = scrollableElement;
    const handleScroll = () => {
      if (scrollableElement.scrollTop > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    scrollableElement.addEventListener("scroll", handleScroll);

    return () => {
      scrollableElement.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold]);

  const scrollToTop = () => {
    if (scrollableElementRef.current) {
      scrollableElementRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <ScrollTopButtonStyled
      type="button"
      onClick={scrollToTop}
      style={{
        visibility: isVisible ? "visible" : "hidden",
      }}
      disabled={!isVisible}
    >
      <Icon name="scroll_top" />
    </ScrollTopButtonStyled>
  );
}

export default ScrollTopButton;
