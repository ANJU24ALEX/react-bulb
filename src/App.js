import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color:pink;
`;

const Box = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BulbContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #ddd;
  margin-bottom: 20px;
`;

const Bulb = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 80px 80px;
  width: 100px;
  height: 100px;
  border-radius: 80%;
  background-color: ${(props) => (props.isOn ? '#ffcc00' : '#ddd')};
`;

const Switch = styled.button`
  background-color: #333;
  color: #fff;
  padding: 20px 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
`;

const App = () => {
  const [isOn, setIsOn] = useState(false);
  const [switchText, setSwitchText] = useState('On');

  const toggleBulb = () => {
    setIsOn(!isOn);
    setSwitchText((prevText) => (prevText === 'On' ? 'Off' : 'On'));
  };

  return (
    <Container>
      <Box>
        <BulbContainer>
          <Bulb isOn={isOn} />
        </BulbContainer>
        <Switch onClick={toggleBulb}>{switchText}</Switch>
      </Box>
    </Container>
  );
};

export default App;