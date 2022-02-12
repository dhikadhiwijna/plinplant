import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import colors from "../../styles/colors";
import Button from "../Button";
import Logo from "../Logo";
import * as S from "./Navbar.styles";
// import colors from "../../styles/colors";

const Navbar = () => {
  return (
    <S.NavBg>
      <S.NavContainer>
        <S.NavWrapper>
          <Logo>
            <Link href="/">PlinPlant</Link>
          </Logo>
          <S.NavList>
            <li>
              <Link href="/cart">
                <a className="cart">
                  <FaShoppingCart fontSize="18" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/article">Artikel</Link>
            </li>
            <li>
              <Button border={colors.white} color={colors.white}>
                Masuk
              </Button>
              <Button
                border={colors.transparent}
                bgColor={colors.lightGreen}
                color={colors.white}
              >
                Daftar
              </Button>
            </li>
          </S.NavList>
        </S.NavWrapper>
      </S.NavContainer>
    </S.NavBg>
  );
};

export default Navbar;
