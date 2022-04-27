import React from "react";
import styled from "styled-components";
import { elements } from "../data/list_of_elements";
/* data source : https://github.com/Bowserinator/Periodic-Table-JSON/blob/master/PeriodicTableJSON.json
 */
export default function Element(props) {
  const { id } = props;
  return (
    <>
      <Tile>
        <div>
          <NUM>{elements[id - 1].number}</NUM>
        </div>
        <div>
          <Symbol>{elements[id - 1].symbol}</Symbol>
        </div>
        <div>
          <H5>{elements[id - 1].name}</H5>{" "}
        </div>
      </Tile>
    </>
  );
}

const Tile = styled.div`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background-color: #c7e0d7;
  width: 80px;
  height: 80px;
  margin: 5px 5px;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 3px 10px 0 rgba(0, 0, 0, 0.4); */
  box-shadow: 2px 2px 5px 0 rgba(10, 104, 81, 0.4),
    -2px -2px 15px 0 rgba(255, 255, 255, 0.6),
    inset 1px 1px 3px 0 rgba(255, 255, 255, 0.75);
  &:hover {
    box-shadow: inset 2px 2px 1px 1px rgba(10, 104, 81, 0.2),
      -2px -2px 15px 0 rgba(255, 255, 255, 0.9),
      1px 1px 3px 0 rgba(255, 255, 255, 0.75);
  }
`;
const H5 = styled.h5`
  font-size: 0.6em;
  letter-spacing: 0.2px;
  //color: mediumaquamarine;
  //color: darkslategrey;
  // color: seagreen;
  color: white;
  //border: 1px solid green;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  //background-color: rgba(102, 205, 170, 1);
  //background-color: rgba(0, 128, 128, 1);
  background-color: rgba(32, 178, 170, 1);
  margin: 0;
  margin-top: 2px;
`;
const Symbol = styled.h6`
  font-size: 2.5em;
  font-weight: 800;
  color: #96d7bf;

  margin-bottom: -2px;
  margin-top: -10px;
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
  color: white;
  //border: 1px solid green;
  margin-top: 2px;
  margin-bottom: 0;
  margin-left: 4px;
  padding: 2px;
  text-align: left;
`;
