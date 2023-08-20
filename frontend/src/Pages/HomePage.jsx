import React from "react";
import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Error from "../Components/Error";

const HomePage = () => {
  const navigate = useNavigate();

  //Redux Store
  const isAuth = useSelector((store) => store.authReducer.isAuth);

  return (
    <Box bg={"#091216"}>
      <Container maxW={"7xl"} paddingTop={"100px"}>
        <HStack justifyContent={"center"} margin={"0px auto 30px auto"}>
          <Heading color={"#e02c1f"} fontSize={"50px"}>
            Welcome to Notes :
          </Heading>
          <Heading color={"skyblue"} fontSize={"40px"}>
            Your Digital Notebook Oasis
          </Heading>
        </HStack>
        <Text
          color={"gray.300"}
          fontWeight={"bold"}
          fontSize={"25px"}
          marginBottom={"20px"}
        >
          Unleash the Power of Organization and Creativity
        </Text>
        <Text color={"gray.400"} width={"80%"} margin={"0px auto 60px auto"}>
          Are you tired of scattered notes, lost ideas, and the constant
          struggle to keep track of your thoughts? Look no further – Notes is
          here to revolutionize the way you take and manage notes.
        </Text>
        {isAuth ? (
          ""
        ) : (
          <Button
            variant={"outline"}
            color={"skyblue"}
            padding={"23px"}
            marginBottom={"30px"}
            transition={"border-radius 0.3s ease-in-out"}
            _hover={{
              borderRadius: "20px",
            }}
            boxShadow={
              "rgb(255, 255, 255) 0px 4px 6px -1px, rgba(255, 255, 255, 0.974) 0px 2px 4px -1px"
            }
            rightIcon={<ArrowForwardIcon />}
            onClick={() => navigate("/signup")}
          >
            Get Started
          </Button>
        )}
        <Image
          src="https://cdn.dribbble.com/users/3182337/screenshots/17654482/media/e6b0e5693806b6e2a55870d71e76c79c.gif"
          margin={"auto"}
        />
      </Container>
    </Box>
  );
};

export default HomePage;
