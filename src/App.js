import React from "react";

import './App.css';
import styled from "styled-components";

import ImageUploader from './containers/ImageUploader';

const App = () => {
  return (
    <StypedApp>
      <ImageUploader />
    </StypedApp>
  );
};

const StypedApp = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #FAFAFA;
  padding: 0 15px;
`;

export default App;
