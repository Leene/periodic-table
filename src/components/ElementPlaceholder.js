import React from "react";
import styled from "styled-components";
import { elements } from "../data/list_of_elements";
// data source : https://github.com/Bowserinator/Periodic-Table-JSON/blob/master/PeriodicTableJSON.json

export default function ElementPlaceholder(props) {
  const { min, max, color } = props;

  return (
    <>
      <Tile style={{ backgroundColor: color }}>
        <div>
          <H5>
            {min} bis {max}
          </H5>
        </div>
        <div>
          <H5>Siehe unten</H5>
        </div>
      </Tile>
    </>
  );
}

const Tile = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  min-width: 90px;
  height: 90px;
  margin: 6px 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.6), 0 3px 10px 0 rgba(0, 0, 0, 0.4);
`;
const H5 = styled.h5`
  letter-spacing: 0.2px;
  color: white;
  margin: 0;
  margin-top: 2px;
`;
