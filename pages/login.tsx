import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { loginImg } from "../assets/svg";
import Button from "../component/Button";
import Container from "../component/Container";
import Logo from "../component/Logo";
import { setLogin } from "../redux/action";
import { RootState } from "../redux/store";
import colors from "../styles/colors";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const data = useSelector((state: RootState) => state.user.email);
  const router = useRouter();

  interface lStorage {
    type: string;
    value: {
      first_name: string;
      last_name: string;
      email: string;
    };
  }

  const onSubmit = () => {
    dispatch(
      setLogin({ first_name: "Dhika", last_name: "Adhiwijna", email: email })
    );
    localStorage.setItem(
      "user",
      JSON.stringify({
        first_name: "Dhika",
        last_name: "Adhiwijna",
        email: email,
      })
    );
    setEmail("");
    setPassword("");
    router.push("/");
  };

  useEffect(() => {
    if (data) {
      console.log("data", data);
      router.push("/");
    }
  }, []);

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
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
          </div>
          <Button
            bgColor={colors.lightGreen}
            color={colors.white}
            Signup
            onClick={() => onSubmit()}
          >
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
