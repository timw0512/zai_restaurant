import React from "react";
import styled from "styled-components";
import Icon from "@/conponents/common/Icon";
import { useLocation } from "react-router-dom";

const NavMenuItemStyled = styled.button`
  position: relative;
  display: flex;
  gap: 4px;
  padding: 10px;
  align-items: center;
  span {
    font-weight: 700;
    font-size: 14px;
    line-height: 14px;
    text-transform: capitalize;
    color: #183354;
  }
  &.active {
    & > span {
      color: #f4796c;
    }
    .icon-container {
      svg path {
        fill: #f4796c !important;
      }
    }
  }
  .icon-container {
    svg path {
      fill: #183354 !important;
    }
  }

  .sub-nav {
    display: none;
  }

  &:hover {
    .sub-nav {
      position: absolute;
      background-color: #fff;
      top: 25px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 10px;
      .sub-nav-item {
        padding: 4px;
        white-space: nowrap;
        span {
          color: #183354;
        }
        &.active > span {
          color: #f4796c;
        }
      }
      .sub-nav-item:not(:last-child) {
        border-bottom: 1px solid #dfdfdf;
      }
    }
  }
`;

function NavMenuItem({ item }) {
  const location = useLocation();
  const hasChildren = item?.children && item?.children.length > 0;
  const isActive = location.pathname === item?.path;

  return (
    <NavMenuItemStyled
      type="button"
      onClick={() => {
        console.log("Navigate to: ", item?.title);
      }}
      className={isActive ? "active" : ""}
    >
      <span>{item.title}</span>
      {hasChildren && (
        <>
          <Icon name="dropdown" />
          <div className="sub-nav">
            {item.children.map((subNavItem) => (
              <div
                type="button"
                key={subNavItem.title}
                className={`sub-nav-item ${
                  subNavItem?.path === location?.pathname?.split("/")?.[1]
                    ? "active"
                    : ""
                }`}
                onClick={() => {
                  console.log("Navigate to: ", subNavItem?.title);
                }}
              >
                <span>{subNavItem.title}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </NavMenuItemStyled>
  );
}

export default NavMenuItem;
