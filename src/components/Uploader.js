import React from "react";
import DropArea from "./DropArea.js";

import styled from "styled-components";

const inputAccept = "image/png, image/jpeg, image/gif";

const Uploader = () => {
  return (
    <StyledUploader>
      <Heading>Upload your image</Heading>
      <Text>File should be Jpeg, Png,...</Text>

      <DropAreaWrapper>
        <DropArea></DropArea>
      </DropAreaWrapper>

      <TextLight>Or</TextLight>
      <FileInput id="fileUpload" type="file" accept={inputAccept} />
      <Button htmlFor="fileUpload">Choose a file</Button>
    </StyledUploader>
  );
};

const StyledUploader = styled.div`
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  color: #4f4f4f;
  margin-bottom: 16px;
`;

const Text = styled.p`
  font-size: 10px;
  line-height: 15px;
  color: #828282;
  margin-bottom: 30px;
`;

const DropAreaWrapper = styled.div`
  margin-bottom: 18px;
`;

const TextLight = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: #BDBDBD;
  margin-bottom: 22px;
`;

const FileInput = styled.input`
  display: none;
`;

const Button = styled.label`
  font-family: "Noto Sans";
  font-size: 12px;
  color: #fff;
  background: #2f80ed;
  border-radius: 8px;
  padding: 8px 16px;

  &:hover {
    cursor: pointer;
  }
`;

export default Uploader;
