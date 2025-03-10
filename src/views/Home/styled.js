import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 10000px;
  background-color: #fff;
  .home-content {
    margin: 0 auto;
    max-width: var(--max-width-desktop);
  }
  .article-header {
    display: flex;
    justify-content: space-between;
    .article-title {
      font-weight: 700;
      font-size: 28px;
      line-height: 33.6px;
      text-transform: capitalize;
      color: #183354;
    }
  }
  aside {
    width: 330px;
    .aside-title {
      font-weight: 700;
      font-size: 22px;
      line-height: 26.4px;
      text-transform: capitalize;
      color: #183354;
    }
  }
  article {
    flex: 1;
  }
`;
