import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Search from "./components/Search";
import styled, { createGlobalStyle } from "styled-components";
import NewReleases from "./components/NewReleases";

const root = ReactDOM.createRoot(document.getElementById("root"));

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  code {
    font-family: monospace;
  }

  li {
    list-style: none;
  }
`;

const AppContainer = styled.div`
  width: 100vw;
  min-height: 50rem;
  background-image: linear-gradient(90deg, #00876e 35%, #03bf9a);
`;

const App = () => {
  return (
    <AppContainer>
      <Header />
      <Search />
      <NewReleases />
    </AppContainer>
  );
};

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
