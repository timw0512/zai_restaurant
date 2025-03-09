import React, { useState } from "react";
import styled from "styled-components";
import Icon from "@/conponents/common/Icon";
import ProgressBar from "@/conponents/common/ProgressBar";

const EditorChoiceStyled = styled.div`
  padding: 0 15px 20px;
  width: 100%;
  .article-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 17px;
    .article-title {
      font-weight: 700;
      font-size: 28px;
      line-height: 33.6px;
      text-transform: capitalize;
      color: #183354;
    }
    .article-controller {
      display: flex;
      gap: 5px;
      .controller-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 36px;
        height: 36px;
        border-radius: 4px;
        border: 1px solid #cfcfcf;
        &.next {
          transform: rotate(-180deg);
        }
      }
    }
  }
`;

function EditorChoice({ className }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const total = 15;

  return (
    <EditorChoiceStyled className={className}>
      <div className="article-header">
        <span className="article-title">Editors Choice</span>
        <div className="article-controller">
          <button
            type="button"
            className="controller-btn previous"
            onClick={() => {
              if (currentIndex > 1) setCurrentIndex(currentIndex - 1);
            }}
          >
            <Icon name="previous" />
          </button>
          <button
            type="button"
            className="controller-btn next"
            onClick={() => {
              if (currentIndex < total) setCurrentIndex(currentIndex + 1);
            }}
          >
            <Icon name="previous" />
          </button>
        </div>
      </div>
      <ProgressBar
        current={currentIndex}
        total={total}
      />
    </EditorChoiceStyled>
  );
}

export default EditorChoice;
