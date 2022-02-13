import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styled from "styled-components";
import { loginImg } from "../assets/svg";
import Button from "../component/Button";
import Container from "../component/Container";
import Logo from "../component/Logo";
import colors from "../styles/colors";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email, password);
  };
  return (
    <BgContainer>
      <ContainerWrapper>
        <Box>
          <Logo color={colors.black}>
            <Link href="/">PlinPlant</Link>
          </Logo>

          <div>
            <input
              placeholder="Email"
              type="email"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <input
              placeholder="Password"
              type="password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>
          <Button bgColor={colors.lightGreen} color={colors.white} Signup>
            Sign In
          </Button>

          <p>OR</p>

          <button>
            <h3>Login with Google</h3>
          </button>

          <p>
            Don't have an account?{" "}
            {
              <Link href="/register">
                <span>Sign up</span>
              </Link>
            }
          </p>
        </Box>

        <Image src={loginImg} alt="login" width={500} height={500} />
      </ContainerWrapper>
    </BgContainer>
  );
};

export default Login;

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
      padding: 15px 15px;
      font-size: 1em;
      margin: 5px 0;
      outline: none !important;
      transition: all 0.3s ease;

      &:first-of-type {
        margin-top: 15px;
      }

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
