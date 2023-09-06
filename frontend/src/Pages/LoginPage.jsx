import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../Redux/authReducer/action";
import Error from "../Components/Error";
import { Navigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};
const LoginPage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [user, setUser] = useState(initialState);

  //Redux Store
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.authReducer.isLoading);
  const message = useSelector((store) => store.authReducer.message);
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  const isError = useSelector((store) => store.authReducer.isError);

  // Toast feature
  const toast = useToast();
  const positions = ["top"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleLogin = () => {
    if (user?.email && user?.password) {
      dispatch(loginAction(user));
    } else {
      toast({
        title: `Enter the valid credentials ⚠`,
        position: positions[0],
        isClosable: true,
        duration: 1000,
        status: "warning",
      });
    }
  };

  if (isAuth) {
    return <Navigate to={"/notes"} />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <Box bg={"#091216"} padding={"50px 0px 120px 0px"}>
      <Container
        maxW={"4xl"}
        padding={"30px 30px 60px 30px"}
        bg={"#EB5C9C"}
        color={"white"}
        borderRadius={"20px"}
        boxShadow={
          "rgba(30, 189, 217, 0.814) 6px 6px 16px, rgba(45, 48, 43, 0.775) 8px 8px 32px"
        }
      >
        <Stack
          direction={{ base: "column", md: "row", lg: "row" }}
          justifyContent={"space-between"}
        >
          <VStack
            spacing={"20px"}
            padding={{ base: "0px", md: "20px", lg: "20px" }}
          >
            <Heading size={"lg"}>Login</Heading>
            <Divider color={"blue.500"} />
            {message && (
              <Text color={isAuth ? "green" : "black"}>{message}</Text>
            )}
            <FormControl>
              <FormLabel>Email : </FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <EmailIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  type="email"
                  name="email"
                  value={user?.email}
                  placeholder="Email address"
                  _placeholder={{color:"white"}}
                  onChange={handleChange}
                  isDisabled={isAuth}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Password : </FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <LockIcon color="gray.300" />
                </InputLeftElement>
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  _placeholder={{color:"white"}}
                  onChange={handleChange}
                  name="password"
                  value={user?.password}
                  isDisabled={isAuth}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    style={{ background: "white" }}
                    onClick={handleClick}
                    isDisabled={isAuth}
                  >
                    {show ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              w={"full"}
              colorScheme="green"
              marginTop={"20px"}
              onClick={handleLogin}
              isLoading={isLoading}
            >
              Log in
            </Button>
            <Box w={"full"}>
              {/* Facebook */}
              <Button
                w={"full"}
                colorScheme={"facebook"}
                leftIcon={<FaFacebook />}
                marginBottom={"10px"}
              >
                <Center>
                  <Text>Sign in with Facebook</Text>
                </Center>
              </Button>

              {/* Google */}
              <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>
            </Box>
          </VStack>
          <Image
            src="https://cdn.dribbble.com/users/2844289/screenshots/12049681/media/f1639d121996528e72f09f481a4b6ae2.gif"
            width={{ base: "400px", md: "300px", lg: "400px" }}
            objectFit={"contain"}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default LoginPage;
