import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--max-width-desktop);
  .header-search-bar {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 16px 0;
    background-color: #183354;
    color: #ffffff;
    .social-site {
      display: flex;
      gap: 6px;
      .social-icon {
        display: flex;
        gap: 14px;
        padding: 6px 5px;
      }
    }
  }
  .header-navigation {
  }
`;
