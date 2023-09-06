import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import logo from "./logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemLS, getItemLS } from "../localStorage/localStorage";
import { logoutAction } from "../Redux/authReducer/action";

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();

  //Navbar Sticky
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  //Redux Store
  const dispatch = useDispatch();
  const isAuth = getItemLS("auth")?.isAuth || false;
  const username = getItemLS("auth")?.username || "";

  //Logout Button
  const handleLogout = () => {
    navigate("/");
    dispatch(logoutAction());
  };

  return (
    <Box
      bg={"#091216"}
      padding={{ base: "0px", md: "10px", lg: "10px" }}
      style={{ position: "sticky", top: 0, zIndex: 999 }}
      className={scroll ? "active-scroll" : ""}
    >
      <Container maxW={"8xl"}>
        <HStack justifyContent={"space-between"}>
          <Image
            src={logo}
            width={{ base: "100px", md: "110px", lg: "110px" }}
            marginLeft={{ base: "0px", md: "10px", lg: "20px" }}
            onClick={() => navigate("/")}
            cursor={"pointer"}
          />
          {isAuth ? (
            <HStack
              spacing={{ base: "8px", md: "10px", lg: "20px" }}
              marginRight={{ base: "0px", md: "10px", lg: "20px" }}
            >
              <Avatar
                width={"50px"}
                name={username}
                marginRight={{ base: "0px", md: "10px", lg: "30px" }}
                src="https://bit.ly/broken-link"
              />
              <Button
                colorScheme="blue"
                borderRadius={"50px"}
                _hover={{
                  bg: "skyblue",
                }}
                boxShadow={
                  "rgb(255, 255, 255) 0px 4px 6px -1px, rgba(255, 255, 255, 0.974) 0px 2px 4px -1px"
                }
                onClick={() => navigate("/notes")}
              >
                Notes
              </Button>
              <Button
                color={"white"}
                bg={"#e02c1f"}
                variant={"solid"}
                borderRadius={"50px"}
                _hover={{
                  bg: "#b5271d",
                }}
                boxShadow={
                  "rgb(255, 255, 255) 0px 4px 6px -1px, rgba(255, 255, 255, 0.974) 0px 2px 4px -1px"
                }
                onClick={handleLogout}
              >
                Log out
              </Button>
            </HStack>
          ) : (
            <HStack
              spacing={{ base: "10px", md: "10px", lg: "20px" }}
              marginRight={{ base: "0px", md: "10px", lg: "20px" }}
            >
              <Button
                color={"white"}
                bg={"#e02c1f"}
                variant={"solid"}
                borderRadius={"50px"}
                _hover={{
                  bg: "#b5271d",
                }}
                boxShadow={
                  "rgb(255, 255, 255) 0px 4px 6px -1px, rgba(255, 255, 255, 0.974) 0px 2px 4px -1px"
                }
                onClick={() => navigate("/login")}
              >
                Log in
              </Button>
              <Button
                colorScheme="blue"
                borderRadius={"50px"}
                _hover={{
                  bg: "skyblue",
                }}
                boxShadow={
                  "rgb(255, 255, 255) 0px 4px 6px -1px, rgba(255, 255, 255, 0.974) 0px 2px 4px -1px"
                }
                onClick={() => navigate("/signup")}
              >
                Sign up
              </Button>
            </HStack>
          )}
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
