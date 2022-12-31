import React from "react";
import {
  OptionEngravingContainer,
  OptionEngravingDetail,
} from "./RingTexture.elements";
import * as THREE from "three";

const RingTexture = ({ setCurrentRingTextures }) => {
  const textureLoader = new THREE.TextureLoader();

  const handleRingTextures = () => {
    setCurrentRingTextures({
      base: textureLoader.load("./model/textures/1/base.png"),
      normal: textureLoader.load("./model/textures/1/normal.png"),
      roughness: textureLoader.load(
        "./model/textures/1/roughness_metalness.png"
      ),
    });
  };

  return (
    <OptionEngravingContainer>
      <h2>Metal Engraving</h2>
      <OptionEngravingDetail>
        <h4>Option 1</h4>
        <h4>Option 2</h4>
        <h4>Option 3</h4>
        <h4>Option 4</h4>
      </OptionEngravingDetail>
    </OptionEngravingContainer>
  );
};

export default RingTexture;
