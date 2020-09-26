import React from 'react';

import styled, {keyframes} from 'styled-components';

const ProgressBar = () => {
  return (
    <StyledProgressBarArea>
      <StyledProgressBar></StyledProgressBar>
    </StyledProgressBarArea>
  );
}

const StyledProgressBarArea = styled.div`
  height: 6px;
  background: #F2F2F2;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`;

const left = keyframes`
  from {
    left: -100px;
  }

  to {
    left: 1000px;
  }
`;

const StyledProgressBar = styled.div`
  height: 100%;
  width: 100px;
  background: #2F80ED;
  border-radius: 8px;
  position: absolute;
  top: 0;
  left: -100px;
  animation: ${left} 1.5s linear infinite;
`;

export default ProgressBar;
