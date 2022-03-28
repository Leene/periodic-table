import React from "react";
import styled from "styled-components";
import Element from "./Element";
import ElementDetails from "./ElementDetails";
import ElementPlaceholder from "./ElementPlaceholder";

function MainScreen() {
  function createRowOfElements(min, max) {
    const renderedElements = [];

    for (let i = min; i <= max; i++) {
      renderedElements.push(<Element id={i} />);
    }

    return <Row>{renderedElements}</Row>;
  }

  return (
    <Wrapper>
      <ElementDetails />
      <GroupContainer>
        {createRowOfElements(1, 1)}
        {createRowOfElements(2, 2)}
      </GroupContainer>
      <GroupContainer>
        {createRowOfElements(3, 4)}
        {createRowOfElements(5, 10)}
      </GroupContainer>
      <GroupContainer>
        {createRowOfElements(11, 12)}
        {createRowOfElements(13, 18)}
      </GroupContainer>
      <GroupContainer>
        {createRowOfElements(19, 21)}
        {createRowOfElements(22, 36)}
      </GroupContainer>
      <GroupContainer>
        {createRowOfElements(37, 39)}
        {createRowOfElements(40, 54)}
      </GroupContainer>
      <GroupContainer>
        {createRowOfElements(55, 57)}
        <ElementPlaceholder min={58} max={71} color={"peru"} />
        {createRowOfElements(72, 86)}
      </GroupContainer>
      <GroupContainer>
        {createRowOfElements(87, 89)}
        <ElementPlaceholder min={90} max={103} color={"slateblue"} />
        {createRowOfElements(104, 118)}
      </GroupContainer>
      <Lanthanoide>
        <GroupContainer>{createRowOfElements(58, 71)}</GroupContainer>
      </Lanthanoide>
      <Actinoide>
        <GroupContainer>{createRowOfElements(90, 103)}</GroupContainer>
      </Actinoide>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1826px;
`;
const GroupContainer = styled.div`
  display: flex;
  align-items: flex-end;
  //justify-content: center;
  justify-content: space-between;
`;
const Row = styled.div`
  display: flex;
  //align-items: flex-end;
`;
const Lanthanoide = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  border: 7px solid peru;
  justify-content: center;
  flex-wrap: wrap;
  margin: 15px 4px;
  padding: 20px 5px;
  border-radius: 8px;
`;
const Actinoide = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  border: 7px solid slateblue;

  justify-content: center;
  flex-wrap: wrap;
  margin: 15px 4px;
  padding: 20px 5px;
  border-radius: 8px;
`;

export default MainScreen;
