import React, { useState } from "react";
import { GeneralContainer, Wrapper } from "./Menu.elements";
import Properties from "../Properties/Properties";
import Ring from "../Ring/Ring";

const Menu = () => {
  const [currentGem, setCurrentGem] = useState({ name: "" });

  return (
    <GeneralContainer>
      <Wrapper>
        <Properties setCurrentGem={setCurrentGem} />
        <Ring currentGem={currentGem} />
      </Wrapper>
    </GeneralContainer>
  );
};

export default Menu;
