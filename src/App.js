import "./App.css";
import MainScreen from "./components/MainScreen";
import styled from "styled-components";

export default function App() {
  return (
    <DivApp className="App">
      <H1>Periodensystem der Elemente</H1>

      <MainScreen />
    </DivApp>
  );
}

const DivApp = styled.div`
  //background-image: url("https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e000383/GSFC_20171208_Archive_e000383~orig.jpg");
  //background-size: cover;
  width: 100vw;
`;
const H1 = styled.h1`
  color: white;
  padding: 55px 0;
  font-size: 25pt;
`;
