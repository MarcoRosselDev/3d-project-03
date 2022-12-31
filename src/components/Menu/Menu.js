import React, { useState } from "react";
import { GeneralContainer, Wrapper } from "./Menu.elements";
import Properties from "../Properties/Properties";
import Ring from "../Ring/Ring";

const Menu = () => {
  const [currentGem, setCurrentGem] = useState({ name: "" });
  const [currentRingColor, setCurrentRingColor] = useState({ color: "" });

  return (
    <GeneralContainer>
      <Wrapper>
        <Properties
          setCurrentGem={setCurrentGem}
          setCurrentRingColor={setCurrentRingColor}
        />
        <Ring currentGem={currentGem} currentRingColor={currentRingColor} />
      </Wrapper>
    </GeneralContainer>
  );
};

export default Menu;
