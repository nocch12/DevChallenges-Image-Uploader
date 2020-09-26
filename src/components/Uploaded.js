import React from 'react';

import styled from 'styled-components';

const Uploaded = () => {
  return (
    <StyledUploaded>
      <StyledIcon className="material-icons">check_circle</StyledIcon>
      <Heading>Uploaded Successfully!</Heading>

      <ImageArea>
        <img src="https://whitewood-hp.com/web-tips/wp-content/uploads/2019/01/koala.jpg" />

      </ImageArea>

      <LinkArea>
        <LinkText>https://images.unsplash.com/photo-14969508fadfsfawefaewf66446-325...</LinkText>
        <Button type="button">Copy Link</Button>
      </LinkArea>
    </StyledUploaded>
  );
}

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
  background: #F6F8FB;
  border: 1px solid #E0E0E0;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 1px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkText = styled.p`
  font-size: 8px;
  line-height: 12px;
  letter-spacing: -0.035em;
  color: #4F4F4F;
  padding: 0 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
