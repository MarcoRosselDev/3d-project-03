import React from "react";
import {
  OptionMetalColorContainer,
  OptionMetalColorDetails,
} from "./MetalColor.elements";

const MetalColor = ({ setCurrentRingColor }) => {
  return (
    <OptionMetalColorContainer>
      <h2>Metal Color Options</h2>
      <OptionMetalColorDetails>
        <h4>Gold</h4>
        <h4>Silver</h4>
        <h4>Copper</h4>
      </OptionMetalColorDetails>
    </OptionMetalColorContainer>
  );
};

export default MetalColor;
