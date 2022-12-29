import React from "react";
import { OptionGemContainer, OptionGemDetails } from "./Gem.elements";

const Gem = () => {
  return (
    <OptionGemContainer>
      <h2>Gems Options</h2>
      <OptionGemDetails>
        <h4>Option 1</h4>
        <h4>Option 2</h4>
        <h4>Option 3</h4>
      </OptionGemDetails>
    </OptionGemContainer>
  );
};

export default Gem;
