import React from "react";
import styled from "styled-components";

const ProgressBarStyled = styled.div`
  width: 100%;
  overflow: hidden;
  height: 5px;
  display: flex;
  background: #fff;
  .progress {
    display: flex;
    .current {
      width: 10px;
      clip-path: polygon(0 0, 100% 0, 50% 100%, 0 100%);
    }
    .current,
    .past {
      height: 5px;
      background-color: #f4796c;
    }
  }
  .other,
  .past {
    flex: 1;
  }
  .rest {
    flex: 1;
    display: flex;
    .intersection,
    .other {
      border-width: 1px 0px 1px 0px;
      border-style: solid;
      border-color: #dfdfdf;
    }
    .intersection {
      clip-path: polygon(50% 0, 100% 0, 100% 100%, 0% 100%);
      width: 10px;
    }
  }
`;

function ProgressBar({ current, total }) {
  const percent = (100 * current) / total;
  return (
    <ProgressBarStyled>
      <div
        className="progress"
        style={{
          width: `${percent}%`,
        }}
      >
        <div className="past"></div>
        <div className="current"></div>
      </div>
      <div className="rest">
        <div className="intersection"></div>
        <div className="other"></div>
      </div>
    </ProgressBarStyled>
  );
}

export default ProgressBar;
