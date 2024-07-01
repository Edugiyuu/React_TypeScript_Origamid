import React from 'react';
import { UiContextProvider } from "./UiContext";
import Header from './Header';
import Content from './Content';

function App() {
  
  return (
    <UiContextProvider>
      <Header></Header>
      <Content></Content>
    </UiContextProvider>
  );
}

export default App;
