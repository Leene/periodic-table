import React from "react";
import styled from "styled-components";
import { elements } from "../data/list_of_elements";

import "../App.css";
//import BackdropFilter from "react-backdrop-filter";

export default function ElementDetails() {
  return (
    <Container>
      <Square className="fcol">
        <SymbolDiv className="frow">
          <Symbol>{elements[85].symbol}</Symbol>
          <Symbol>{elements[85].name}</Symbol>
        </SymbolDiv>
        <div className="frow">
          <ShellDiv>
            <Shell>{elements[117].shells[0]}</Shell>
            <Shell>{elements[117].shells[1]}</Shell>
            <Shell>{elements[117].shells[2]}</Shell>
            <Shell>{elements[117].shells[3]}</Shell>
            <Shell>{elements[117].shells[4]}</Shell>
            <Shell>{elements[117].shells[5]}</Shell>
            <Shell>{elements[117].shells[6]}</Shell>
          </ShellDiv>

          <AtomDiv>
            <Atom>
              <Rotation2>
                <Electron></Electron>
                <ElectronOrbit>
                  <Rotation1>
                    <Electron></Electron>
                    <ElectronOrbit>
                      <Proton></Proton>
                    </ElectronOrbit>
                    <Electron></Electron>
                  </Rotation1>
                </ElectronOrbit>
                <Electron></Electron>
              </Rotation2>
            </Atom>
          </AtomDiv>

          <AtomicnNum>{elements[85].number}</AtomicnNum>
        </div>
      </Square>
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
  //background-color: rgba(255, 255, 255, 0.3);
  justify-content: space-between;
`;
const Square = styled.div`
  //border: 1px solid green;
  display: flex;
  align-content: space-between;
  height: 300px;
  width: 270px;
  background-color: rgba(255, 255, 255, 0.3);
  margin-right: 10px;

  border-radius: 20px;
`;
const SymbolDiv = styled.div`
  //border: 1px solid hotpink;
  background-color: rgba(32, 178, 170, 1);

  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  margin: 0px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: white;
`;
const Symbol = styled.h6`
  font-size: 1.8em;
  margin: 5px;
  height: ;
  width: ;
`;
////////////Atom//////////////////////

const Rotation1 = styled.div`
height:100%;
width:100%;
display: flex;
justify-content: center;
align-items: center;
  animation: rotate 25s linear infinite;
  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
`;
const Rotation2 = styled.div`
height:100%;
width:100%;
display: flex;
justify-content: center;
align-items: center;
  animation: rotate 15s linear infinite;
  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
`;

const ShellDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  //border: 1px solid blue;
  margin-left: 10px;
  height: 98%;
`;
const Shell = styled.p`
  //border: 1px solid cyan;
  padding: 0;
  margin: 5px 0;
`;

const AtomDiv = styled.div`
  //border: 1px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 260px;
  width: 270px;
  margin-right: -50px;
  margin-left: -32px;
  margin-bottom: -5px;

  
  }
`;

const AtomicnNum = styled.p`
  align-self: flex-end;
  font-size: 2em;
  font-weight: bold;
  //border: 1px solid red;
  margin-bottom: 0px;
  margin-right: 10px;

  padding: 0px;
`;

const Atom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
  width: 40%;
  border-radius: 50%;
  border: 1px solid white;
`;

const ElectronOrbit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 75%;
  width: 75%;
  border-radius: 50%;
  border: 1px dashed violet;
`;

const Electron = styled.div`
  height: 14px;
  width: 14px;
  border-radius: 50%;
  background-color: violet;
  margin: -8px;
  z-index: 3;
`;
const Proton = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: seagreen;
`;

//////////////Ende Atom////////////////////////////

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
