import React from 'react';

import styled from 'styled-components';
import ProgressBar from './UI/ProgressBar'

const Uploading = () => {
  return (
    <div>
      <Heading>Uploading...</Heading>
      <ProgressBarWrapper>
        <ProgressBar />
      </ProgressBarWrapper>
    </div>
  );
}

const Heading = styled.h1`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  color: #4f4f4f;
  margin-bottom: 30px;
`;

const ProgressBarWrapper = styled.div`
  margin-bottom: 16px;
`;

export default Uploading;
