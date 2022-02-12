import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

interface ButtonProps {
  children: React.ReactNode;
  bgColor?: string;
  color?: string;
  border?: string;
  card?: boolean;
  scrollDown?: boolean;
  CTA?: boolean;
  onClick?: () => void;
}

interface StyledProps {
  bgColor?: string | null;
  textColor: string;
  border?: string;
  card?: boolean;
  scrollDown?: boolean;
  CTA?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  bgColor,
  border = "none",
  color = colors.black,
  scrollDown = false,
  card = false,
  CTA = false,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonComponent
      bgColor={bgColor}
      textColor={color}
      border={border}
      scrollDown={scrollDown}
      card={card}
      CTA={CTA}
      onClick={onClick}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;

const _marginStyle = (card?: boolean, scrollDown?: boolean, CTA?: boolean) => {
  if (card || scrollDown || CTA) return "0px";
  else return "0 10px";
};

const _paddingStyle = (card?: boolean, scrollDown?: boolean, CTA?: boolean) => {
  if (card) return "3px 5px";
  if (scrollDown) return "10px 5px";
  if (CTA) return "15px 30px";
  else return "5px 20px";
};

const _borderRadiusStyle = (
  card?: boolean,
  scrollDown?: boolean,
  CTA?: boolean
) => {
  if (card) return "5px";
  if (scrollDown) return "30px";
  else return "10px";
};

const _widthStyle = (card?: boolean, scrollDown?: boolean, CTA?: boolean) => {
  if (scrollDown) return "200px";
  else return "unset";
};

const _opacityStyle = (card?: boolean, CTA?: boolean) => {
  if (card) return "1";
  else return "0.5";
};

const ButtonComponent = styled.button<StyledProps>`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
  color: ${({ textColor }) => textColor};
  border: ${({ border }) =>
    border ? `1px solid ${border}` : colors.transparent};
  padding: ${({ card, scrollDown, CTA }) =>
    _paddingStyle(card, scrollDown, CTA)};
  margin: ${({ card, scrollDown, CTA }) => _marginStyle(card, scrollDown, CTA)};
  border-radius: ${({ card, scrollDown, CTA }) =>
    _borderRadiusStyle(card, scrollDown, CTA)};
  width: ${({ card, scrollDown, CTA }) => _widthStyle(card, scrollDown, CTA)};
  font-size: ${({ CTA }) => (CTA ? "large" : "inherit")};
  font-weight: ${({ CTA }) => (CTA ? "bold" : "inherit")};
  font-family: inherit;
  cursor: pointer;
  background-repeat: no-repeat;
  outline: none;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    border-style: none;
  }

  &:hover {
    border: ${({ border }) => (border ? `1px solid ${border}` : "none")};
    background-color: ${({ card, CTA }) =>
      card || CTA ? colors.yellow : null};
    opacity: ${({ card }) => _opacityStyle(card)};
  }
`;
