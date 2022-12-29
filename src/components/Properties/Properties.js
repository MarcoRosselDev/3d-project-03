import React from "react";
import { PropertiesContainer, PropertiesWrapper } from "./Properties.elements";
import Gem from "./Options/Gem/Gem";

const Properties = () => {
  return (
    <PropertiesContainer>
      <PropertiesWrapper>
        <h1>Custom Rings</h1>
        <Gem />
      </PropertiesWrapper>
    </PropertiesContainer>
  );
};

export default Properties;
