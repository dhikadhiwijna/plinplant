import Image from "next/image";
import React from "react";
import styled from "styled-components";
import Container from "../../component/Container";
import colors from "../../styles/colors";

const Article = () => {
  return (
    <ColorContainer>
      <ContainerWrapper>
        <div>
          <div>
            <div>
              <Image src={} alt="artikel image" />
            </div>
          </div>
          <div></div>
        </div>
      </ContainerWrapper>
    </ColorContainer>
  );
};

export default Article;

const ColorContainer = styled.div`
  background-color: ${colors.green};
`;

const ContainerWrapper = styled(Container)`
  padding-top: 100px;
`;
