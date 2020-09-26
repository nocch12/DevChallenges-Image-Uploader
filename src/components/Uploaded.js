import React, { useCallback, useRef } from "react";

import styled from "styled-components";

const Uploaded = ({ imageUrl }) => {
  const textRef = useRef(null);

  const linkCopyHandler = useCallback(() => {
    textRef.current.select();
    document.execCommand("copy");
  }, [textRef]);

  return (
    <StyledUploaded>
      <StyledIcon className="material-icons">check_circle</StyledIcon>
      <Heading>Uploaded Successfully!</Heading>

      <ImageArea>
        <img src={imageUrl} alt="uploaded" />
      </ImageArea>

      <LinkArea>
        <LinkText ref={textRef} value={imageUrl || 'aaaa'} type="text" readOnly="readonly" />
        <Button type="button" onClick={linkCopyHandler}>
          Copy Link
        </Button>
      </LinkArea>
    </StyledUploaded>
  );
};

const StyledUploaded = styled.div`
  text-align: center;
`;

const StyledIcon = styled.i`
  color: #219653;
  font-size: 36px;
  margin-bottom: 10px;
`;

const Heading = styled.h1`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  color: #4f4f4f;
  margin-bottom: 26px;
`;

const ImageArea = styled.div`
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 26px;
  max-height: 300px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const LinkArea = styled.div`
  background: #f6f8fb;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 1px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkText = styled.input`
  background: transparent;
  border: none;
  font-size: 8px;
  line-height: 12px;
  letter-spacing: -0.035em;
  color: #4f4f4f;
  padding: 0 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-grow: 1;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  font-family: "Noto Sans";
  font-size: 12px;
  white-space: nowrap;
  color: #fff;
  background: #2f80ed;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;

  &:hover {
    cursor: pointer;
  }
`;

export default Uploaded;
