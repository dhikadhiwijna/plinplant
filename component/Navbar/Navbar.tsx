import Link from "next/link";
import { Router, useRouter } from "next/router";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import colors from "../../styles/colors";
import Button from "../Button";
import Logo from "../Logo";
import * as S from "./Navbar.styles";
// import colors from "../../styles/colors";

const Navbar = () => {
  const router = useRouter();
  return (
    <S.NavBg>
      <S.NavContainer>
        <S.NavWrapper>
          <Logo>
            <Link href="/">PlinPlant</Link>
          </Logo>
          <S.NavList>
            <li>
              <Link href="/cart/1">
                <a className="cart">
                  <FaShoppingCart
                    style={{
                      fill: colors.lightGreenTransparent,
                      cursor: "pointer",
                    }}
                  />
                </a>
              </Link>
            </li>
            <li>
              <Link href="/article/1">Artikel</Link>
            </li>
            <li>
              <Button
                border={colors.white}
                color={colors.white}
                onClick={() => router.push("/login")}
              >
                Masuk
              </Button>
              <Button
                border={colors.transparent}
                bgColor={colors.lightGreen}
                color={colors.white}
                onClick={() => router.push("/register")}
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
