import React from 'react';

import styled from "styled-components";

import Icon from '../assets/image.svg';

const DropArea = () => {
  return (
    <StyledDropArea>
      <StyledImage src={Icon} />
      <Text>Drag & Drop your image here</Text>
    </StyledDropArea>
  );
}

const StyledDropArea = styled.div`
  background: #F6F8FB;
  border: 1px dashed #97BEF4;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 36px 16px 40px;
`;

const StyledImage = styled.img`
  margin-bottom: 36px;
`;

const Text = styled.p`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.035em;
  color: #BDBDBD;
`;

export default DropArea;
