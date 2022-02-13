import React from "react";
import colors from "../../../styles/colors";
import Button from "../../Button";
import * as S from "./CTAEnsiklopedia.style";

const CTAEnsiklopedia = () => {
  return (
    <S.BgContainer>
      <S.ContainerWrapper>
        <div>
          <h2>Lorem ipsum dolor sit amet</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolorem
            voluptatum debitis? Totam, harum. Dignissimos, sed pariatur!
            Asperiores dolorem aspernatur deserunt dolor quas ducimus? Eos ipsa
            molestias iure qui commodi.
          </p>
        </div>
        <div>
          <Button
            color={colors.white}
            bgColor={colors.yellow}
            border={colors.yellow}
            CTA
          >
            Beli Sekarang!
          </Button>
        </div>
      </S.ContainerWrapper>
    </S.BgContainer>
  );
};

export default CTAEnsiklopedia;
