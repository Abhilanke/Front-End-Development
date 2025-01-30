import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Navbar";
import Container from "./Container";

function App() {
  let manu = ["HOME", "ABOUT", "MEN", "WOMEN", "KIDS", "SALE", "KITCHEN"];
  return (
    <>
      <Container>
        <Navbar manuBar={manu}></Navbar>
      </Container>
    </>
  );
}

export default App;
