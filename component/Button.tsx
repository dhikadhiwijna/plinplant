import React from "react";
import styled from "styled-components";
import colors from "../styles/colors";

interface ButtonProps extends StyledProps {
  children: React.ReactNode;
}

interface StyledProps {
  bgColor?: string | null;
  color: string;
  border?: string;
  card?: boolean;
  scrollDown?: boolean;
  CTA?: boolean;
  Signup?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  bgColor,
  border = "none",
  color = colors.black,
  scrollDown,
  card,
  CTA,
  Signup,
  onClick,
}: ButtonProps) => {
  return (
    <ButtonComponent
      bgColor={bgColor}
      color={color}
      border={border}
      scrollDown={scrollDown}
      card={card}
      CTA={CTA}
      Signup={Signup}
      onClick={onClick}
    >
      {children}
    </ButtonComponent>
  );
};

export default Button;

const _marginStyle = (
  card?: boolean,
  scrollDown?: boolean,
  CTA?: boolean,
  Signup?: boolean
) => {
  if (card || scrollDown || CTA) return "0px";
  if (Signup) return "10px 0";
  else return "0 10px";
};

const _paddingStyle = (
  card?: boolean,
  scrollDown?: boolean,
  CTA?: boolean,
  Signup?: boolean
) => {
  if (card) return "3px 5px";
  if (scrollDown) return "10px 5px";
  if (CTA) return "15px 30px";
  if (Signup) return "10px 30px";
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

const _widthStyle = (
  card?: boolean,
  scrollDown?: boolean,
  CTA?: boolean,
  Signup?: boolean
) => {
  if (scrollDown) return "200px";
  if (CTA) return "300px";
  if (Signup) return "100%";
  else return "unset";
};

const _opacityStyle = (card?: boolean, Signup?: boolean) => {
  if (card || Signup) return "1";
  else return "0.5";
};

const ButtonComponent = styled.button<StyledProps>`
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "transparent")};
  color: ${({ color }) => color};
  border: ${({ border }) =>
    border ? `1px solid ${border}` : colors.transparent};
  padding: ${({ card, scrollDown, CTA, Signup }) =>
    _paddingStyle(card, scrollDown, CTA, Signup)};
  margin: ${({ card, scrollDown, CTA, Signup }) =>
    _marginStyle(card, scrollDown, CTA, Signup)};
  border-radius: ${({ card, scrollDown, CTA }) =>
    _borderRadiusStyle(card, scrollDown, CTA)};
  width: ${({ card, scrollDown, CTA, Signup }) =>
    _widthStyle(card, scrollDown, CTA, Signup)};
  min-width: ${({ CTA }) => (CTA ? "200px" : "unset")};
  font-size: ${({ CTA }) => (CTA ? "large" : "unset")};
  font-weight: ${({ CTA }) => (CTA ? "bold" : "unset")};
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
    border: ${({ border }) =>
      border ? `1px solid ${border}` : colors.transparent};
    background-color: ${({ card, CTA }) =>
      card || CTA ? colors.yellow : null};
    opacity: ${({ card, Signup }) => _opacityStyle(card, Signup)};
  }
`;
