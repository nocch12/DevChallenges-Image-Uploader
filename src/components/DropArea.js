import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';

import styled from "styled-components";

import Icon from '../assets/image.svg';

const DropArea = (props) => {
  const {droped} = props;

  const onDrop = useCallback(acceptedFiles => {
    if(acceptedFiles.length) {
      const image = acceptedFiles[0];
      droped(image);
    }
  }, [droped])
  
  const accept = "image/jpeg, image/png, image/gif";
  const {getRootProps, getInputProps} = useDropzone({onDrop, accept});

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <StyledDropArea>
        <StyledImage src={Icon} alt="uploading" />
        <Text>Drag & Drop your image here</Text>
      </StyledDropArea>
    </div>
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
  cursor: default;
`;

export default DropArea;
