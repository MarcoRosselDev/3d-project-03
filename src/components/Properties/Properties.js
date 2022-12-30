import React from "react";
import { PropertiesContainer, PropertiesWrapper } from "./Properties.elements";
import Gem from "./Options/Gem/Gem";
import MetalColor from "./Options/MetalColor/MetalColor";
import RingTexture from "./Options/RingTexture/RingTexture";

const Properties = ({ setCurrentGem }) => {
  return (
    <PropertiesContainer>
      <PropertiesWrapper>
        <h1>Custom Rings</h1>
        <Gem setCurrentGem={setCurrentGem} />
        <MetalColor />
        <RingTexture />
      </PropertiesWrapper>
    </PropertiesContainer>
  );
};

export default Properties;
