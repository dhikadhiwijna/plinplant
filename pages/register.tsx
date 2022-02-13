import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { registerImg } from "../assets/svg";
import Button from "../component/Button";
import Container from "../component/Container";
import Logo from "../component/Logo";
import colors from "../styles/colors";

const Register = () => {
  return (
    <BgContainer>
      <ContainerWrapper>
        <Box>
          <Logo color={colors.black}>
            <Link href="/">PlinPlant</Link>
          </Logo>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet,
            dolore!
          </p>

          <button>
            <h3>Login with Google</h3>
          </button>
          <p>OR</p>

          <div>
            <input placeholder="Email" type="email" />
            <input placeholder="Fullname" type="text" />
            <input placeholder="Password" type="password" />
          </div>

          <Button bgColor={colors.lightGreen} color={colors.white} Signup>
            Sign Up
          </Button>

          <p>
            Already have an account?{" "}
            {
              <Link href="/login">
                <span>Log in</span>
              </Link>
            }
          </p>
        </Box>

        <Image src={registerImg} alt="login" width={500} height={500} />
      </ContainerWrapper>
    </BgContainer>
  );
};

export default Register;

const BgContainer = styled.div`
  background-color: ${colors.white};
`;

const ContainerWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

const Box = styled.div`
  max-width: 400px;
  min-width: 350px;
  background-color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding: 30px 50px;
  border-radius: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  & > p {
    margin: 15px 0;

    & > span {
      color: ${colors.yellow};
      cursor: pointer;
    }
  }

  & > div {
    display: flex;
    flex-direction: column;

    & > input {
      border: 2px solid ${colors.lightGreen};
      border-radius: 5px;
      padding: 15px 20px;
      font-size: 1em;
      margin: 10px 0;
      outline: none !important;
      transition: all 0.3s ease;

      &:hover {
        border: 2px solid ${colors.darkGreen};
      }

      &:focus {
        border: 2px solid ${colors.yellow};
      }
    }
  }

  & > button {
    padding: 10px;
    border-radius: 10px;
    outline: none;
    border: none;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    &:hover {
      background-color: ${colors.yellow};
    }
  }
`;
