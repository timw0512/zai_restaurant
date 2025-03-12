import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  .header-content {
    margin: 0 auto;
    max-width: var(--max-width-desktop);
  }
  .header-search-bar {
    background-color: #183354;
    .header-content {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 25px;
      padding: 16px 0;
      color: #ffffff;
      .social-site {
        display: flex;
        gap: 6px;
        height: 28px;
        .social-icon {
          display: flex;
          gap: 14px;
          .icon-container {
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
      .search-bar {
        display: flex;
        gap: 25px;
        input {
          color: #ffffff;
          background: transparent;
          border: none !important;
          &::placeholder {
            font-family: Inter;
            font-weight: 400;
            font-size: 14px;
            color: #8199b7;
          }
          &:focus-visible,
          &:focus {
            outline: unset;
          }
        }
      }
    }
  }
  .header-navigation {
    border-bottom: 1px solid #dfdfdf;
    box-shadow: 0px 10px 15px 0px #1919191a;
    background-color: #ffffff;
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 95px;
      background-color: #ffffff;
      nav {
        display: flex;
        gap: 34px;
      }
      .header-other {
        display: flex;
        align-items: center;
        gap: 25px;
        button {
          position: relative;
          display: flex;
          align-items: center;
          gap: 10px;
          .info {
            position: absolute;
            top: -2px;
            right: -10px;
            background-color: #f4796c;
            border-radius: 9px;
            min-width: 18px;
            min-height: 18px;
            padding: 2px 5px;
            .value {
              font-family: Inter;
              font-weight: 600;
              font-size: 11px;
              color: #fff;
            }
          }
          &.my-account {
            span {
              font-family: Inter;
              font-weight: 700;
              font-size: 14px;
              line-height: 0px;
              color: #183354;
            }
          }
        }
      }
    }
  }
`;
