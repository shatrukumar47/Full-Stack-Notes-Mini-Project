import React from "react";
import { Box, Button, Container, Heading, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  return (
    <Box bg={"#261AAE"}>
      <Container maxW={"6xl"} height={"600px"}>
        <Image
          margin={"auto"}
          src="https://img.freepik.com/free-vector/retro-error-text-with-layers_53876-99637.jpg?size=626&ext=jpg&ga=GA1.2.1257944628.1683352118&semt=country_rows_v2"
        />
        <Heading color={"white"}>404 : Page Not Found !!</Heading>
        <Button
          colorScheme="blue"
          borderRadius={"50px"}
          _hover={{
            bg: "skyblue",
          }}
          marginTop={"30px"}
          boxShadow={
            "rgb(255, 255, 255) 0px 4px 6px -1px, rgba(255, 255, 255, 0.974) 0px 2px 4px -1px"
          }
          onClick={() => navigate("/")}
        >
          Go to Home
        </Button>
      </Container>
    </Box>
  );
};

export default Error;
