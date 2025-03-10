import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "@/conponents/common/Icon";
import ProgressBar from "@/conponents/common/ProgressBar";
import { EDITOR_CHOICE } from "@/constants/fakeEditorChoice";
import PostItem from "@/conponents/common/PostItem";

const EditorChoiceStyled = styled.div`
  .article-header {
    /* padding: 0 15px; */
    margin-bottom: 17px;
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
  .editor-choice_wrapper {
    margin-top: 30px;
    overflow-x: hidden;
    .editor-choice-list {
      display: flex;
      gap: 30px;
      width: fit-content;
      .editor-choice_item {
        display: flex;
        align-items: center;
        gap: 30px;
        min-width: 410px;
        img {
          width: 160px;
          height: 140px;
          object-fit: cover;
          border-radius: 8px;
        }
        .post-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
          .post-category {
            width: fit-content;
            font-family: Inter;
            font-weight: 600;
            font-size: 13px;
            letter-spacing: 0.78px;
            text-transform: uppercase;
            color: #6d757f;
            border: 1px solid #b8c1cd;
            border-radius: 3px;
            padding: 5px 9px 6px 9px;
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
  }
`;

function EditorChoice({ className }) {
  const total = EDITOR_CHOICE?.length - 3;
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isManualInteraction, setIsManualInteraction] = useState(false);

  useEffect(() => {
    if (!isManualInteraction) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevCount) => {
          if (prevCount < total) {
            return prevCount + 1;
          } else {
            return 1;
          }
        });
      }, 2000);
      return () => clearInterval(intervalId);
    }
  }, [isManualInteraction, total]);

  const handleIncrement = () => {
    setIsManualInteraction(true);
    setCurrentIndex((prevCount) => prevCount + 1);
    resetManualInteraction();
  };

  const handleDecrement = () => {
    setIsManualInteraction(true);
    setCurrentIndex((prevCount) => prevCount - 1);
    resetManualInteraction();
  };

  const resetManualInteraction = () => {
    setTimeout(() => {
      setIsManualInteraction(false);
    }, 1000);
  };

  return (
    <EditorChoiceStyled className={className}>
      <div className="article-header">
        <span className="article-title">Editors Choice</span>
        <div className="article-controller">
          <button
            type="button"
            className="controller-btn previous"
            onClick={() => {
              if (currentIndex > 1) handleDecrement();
            }}
          >
            <Icon name="previous" />
          </button>
          <button
            type="button"
            className="controller-btn next"
            onClick={() => {
              if (currentIndex < total) handleIncrement();
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
      <div className="editor-choice_wrapper hidden-scrollbar">
        <div
          className="editor-choice-list"
          style={{
            transform: `translateX(-${(currentIndex - 1) * 440}px)`,
            transition: "transform 0.3s ease-in-out",
          }}
        >
          {EDITOR_CHOICE &&
            EDITOR_CHOICE?.map((item, index) => (
              <PostItem
                item={item}
                className={"editor-choice_item"}
                titleClassName={"text-ellipsis-2"}
                key={`${item.title}_${index}`}
              />
            ))}
        </div>
      </div>
    </EditorChoiceStyled>
  );
}

export default EditorChoice;
