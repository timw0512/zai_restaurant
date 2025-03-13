import React from "react";
import styled from "styled-components";
import Icon from "@/conponents/common/Icon";
import ProgressBar from "@/conponents/common/ProgressBar";
import { CATEGORY_LIST } from "@/constants/fakeCategories";
import { useNavigate } from "react-router-dom";

const HotCategoriesStyled = styled.div`
  .aside-title {
    display: inline-block;
    margin-bottom: 15px;
  }
  .category-list {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    .category-btn {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 80px;
      padding: 27px 25px;
      border-radius: 6px;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      .category-title {
        padding: 4px 10px;
        border-radius: 30px;
        font-weight: 600;
        font-size: 13px;
        letter-spacing: 0.78px;
        text-transform: uppercase;
        color: #fff;
        background-color: rgba(255, 255, 255, 0.3);
      }
    }
  }
`;
function HotCategories() {
  const navigate = useNavigate();
  return (
    <HotCategoriesStyled className="w-100">
      <span className="aside-title">Hot Categories</span>
      <ProgressBar
        current={1}
        total={15}
      />
      <div className="category-list mt-30">
        {CATEGORY_LIST?.map((category, index) => (
          <button
            type="button"
            className="category-btn"
            key={`category_${category?.title}_${index}`}
            style={{ backgroundImage: `url(${category?.imageUrl})` }}
            onClick={() => navigate(`/category/${category?.router}`)}
          >
            <p className="category-title">{category.title}</p>
            <Icon
              name="view_all"
              width="16px"
              height="16px"
              color="#fff"
            />
          </button>
        ))}
      </div>
    </HotCategoriesStyled>
  );
}

export default HotCategories;
