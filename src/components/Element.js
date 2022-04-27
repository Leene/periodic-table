import React from "react";
import styled from "styled-components";
import elements from "../data/list_of_elements";
// data source : https://github.com/Bowserinator/Periodic-Table-JSON/blob/master/PeriodicTableJSON.json

export default function Element(props) {
  const { id } = props;
  return (
    <>
      <Tile>
        <div>{/*   <NUM>{elements[id - 1].number}</NUM> */}</div>
        <div>{/*  <Symbol>{elements[id - 1].symbol}</Symbol> */}</div>
        <div>{/*   <H5>{elements[id - 1].name}</H5> */}</div>
      </Tile>
    </>
  );
}

const Tile = styled.div`
  border-radius: 15px;
  display: flex;
  //justify-content: center;
  flex-direction: column;
  /*  background-color: darkcyan; */
  background-color: #c7e0d7;
  width: 90px;
  height: 90px;
  margin: 5px 5px;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 3px 10px 0 rgba(0, 0, 0, 0.4); */
  box-shadow: 2px 2px 5px 0 rgba(10, 104, 81, 0.4),
    -2px -2px 15px 0 rgba(255, 255, 255, 0.6),
    inset 1px 1px 3px 0 rgba(255, 255, 255, 0.75);
`;
const H5 = styled.h5`
  letter-spacing: 0.2px;
  color: white;
  //border: 1px solid green;
  margin: 0;
  margin-top: 2px;
`;
const Symbol = styled.p`
  font-size: 2.5em;
  font-weight: 800;
  //color: white;
  color: #96d7bf;
  //border: 1px solid green;
  margin: 0;
  margin-top: 0px;

  color: transparent;
  background: #6cbd9f;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;

  text-shadow: rgba(255, 255, 255, 0.5) 1px 2px 3px;
`;
const NUM = styled.p`
  font-size: 0.9em;
  font-weight: bold;
  color: black;
  //border: 1px solid green;
  margin-top: 0;
  margin-bottom: 0;
  padding: 2px;
  text-align: left;
`;
