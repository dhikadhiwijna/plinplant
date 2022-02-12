import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import colors from "../../../styles/colors";
import Container from "../../Container";
import Logo from "../../Logo";

const Footer = () => {
  return (
    <BgFooter>
      <ContainerWrapper>
        <LeftContainer>
          <Logo color={colors.black}>PlinPlant</Logo>
          <Address>
            <span>Jl. Raya Senoparty Jakarta</span>
            <span>Indonesia</span>
          </Address>
        </LeftContainer>

        <ListWrapper>
          <ul>
            <li>About Us</li>
            <li>References</li>
            <li>Developer</li>
          </ul>
          <ul>
            <li>References</li>
            <li>Developer</li>
          </ul>
        </ListWrapper>

        <RightContainer>
          <h4>Social Media:</h4>

          <LogoList>
            <div className="logo">
              <FaFacebook />
            </div>
            <div className="logo">
              <FaTwitter width={50} height={50} />
            </div>
            <div className="logo">
              <FaInstagram width={50} height={50} />
            </div>
          </LogoList>
        </RightContainer>
      </ContainerWrapper>
    </BgFooter>
  );
};

export default Footer;

const BgFooter = styled.div`
  background-color: ${colors.white};
  padding: 50px 0;
`;

const ContainerWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;

  & > text {
    margin: 3px 0;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  height: 100px;
  padding: 5px 0;

  & > ul {
    display: flex;
    flex-direction: column;

    &:first-of-type {
      margin-right: 10px;
    }

    & > li {
      margin: 5px 0;
    }
  }
`;

const LogoList = styled.div`
  display: flex;
  justify-content: space-between;

  & > .logo {
    background-color: ${colors.white};
  }
`;

const RightContainer = styled.div`
  padding: 5px 0;

  & > h4 {
    margin-bottom: 10px;
  }
`;
