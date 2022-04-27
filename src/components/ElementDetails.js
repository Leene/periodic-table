import React from "react";
import styled from "styled-components";

import "../App.css";
//import BackdropFilter from "react-backdrop-filter";

export default function ElementDetails() {
  return (
    <Container>
      <Square>Element</Square>
      <Description>Beschreibung</Description>
    </Container>

    /*  <BackdropFilter
      /* className="bluredForm" */
    /*  filter={"blur(10px) sepia(50%)"}
      canvasFallback={true}
      html2canvasOpts={{
        allowTaint: true,
      }}
      onDraw={() => {
        console.log("Rendered !");
      }}
    > 
      <Div>Hello World</Div>
    </BackdropFilter>*/
  );
}

const Container = styled.div`
  position: absolute;
  display: flex;
  left: 15.2%;
  top: 10%;
  // height: 500px;
  width: 950px;
  background-color: rgba(255, 255, 255, 0.3);
  justify-content: space-between;
`;
const Square = styled.div`
  height: 270px;
  width: 270px;
  background-color: rgba(255, 255, 255, 0.3);
  margin-right: 10px;
`;
const Description = styled.div`
  height: 100%;
  width: 70%;
  background-color: rgba(255, 255, 255, 0.3);
`;
const Ice = styled.div`
  height: 200px;
  width: 500px;
  background: rgba(0, 0, 0, 0.8);
`;
const Con = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Div = styled.div`
  border-radius: 20px;
  height: 480px;
  width: 100%;
  //background: rgba(0, 0, 0, 0.5);
  background-color: rgba(255, 255, 255, 0.25);
  color: white;
`;
