import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

const Logo = ({
  children,
  color,
}: {
  children: React.ReactNode;
  color?: string;
}) => {
  return <LogoComp color={color}>{children}</LogoComp>;
};

export default Logo;

const LogoComp = styled.h1`
  font-size: 36px;
  font-family: "Elsie Swash Caps", sans-serif;
  color: ${({ color }) => (color ? color : colors.white)};

  @media (max-width: 760px) {
    font-size: 28px;
  }
`;
