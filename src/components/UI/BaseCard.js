import React from 'react';

import styled from 'styled-components';

const BaseCard = (props) => {
  return (
    <StyledCard>
      {props.children}
    </StyledCard>
  );
}

const StyledCard = styled.div`
  width: 100%;
  max-width: 400px;
  background: #FAFAFB;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 36px 32px;
`;


export default BaseCard;
