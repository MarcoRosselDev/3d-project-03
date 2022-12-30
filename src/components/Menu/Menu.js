import React from "react";
import { GeneralContainer, Wrapper } from "./Menu.elements";
import Properties from "../Properties/Properties";
import Ring from "../Ring/Ring";

const Menu = () => {
  return (
    <GeneralContainer>
      <Wrapper>
        <Properties />
        <Ring />
      </Wrapper>
    </GeneralContainer>
  );
};

export default Menu;
