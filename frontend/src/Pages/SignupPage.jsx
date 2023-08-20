import React, { useState } from "react";
import axios from "axios";
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
  Text,
  VStack,
  useSafeLayoutEffect,
  useToast,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaUserShield } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { signupAction } from "../Redux/authReducer/action";
import Error from "../Components/Error";

const initialState = {
  username: "",
  email: "",
  password: "",
};
const SignupPage = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [user, setUser] = useState(initialState);

  //Redux Store
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.authReducer.isLoading);
  const regMsg = useSelector((store) => store.authReducer.regMsg);
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

  const handleSignup = () => {
    console.log(user);
    if (user?.username && user?.email && user?.password) {
      dispatch(signupAction(user)).then(() => {
        toast({
          title: `${regMsg} ✔`,
          position: positions[0],
          isClosable: true,
          duration: 1000,
          status: "success",
        });
      });
      setUser(initialState);
    } else {
      alert("Fill all the inputs !!");
    }
  };

  if (isError) {
    return <Error />;
  }

  return (
    <Box bg={"#091216"} padding={"50px 0px 120px 0px"}>
      <Container
        maxW={"4xl"}
        padding={"30px 30px 60px 30px"}
        bg={"#FFBB00"}
        borderRadius={"20px"}
        boxShadow={
          "rgba(30, 189, 217, 0.814) 6px 6px 16px, rgba(45, 48, 43, 0.775) 8px 8px 32px"
        }
      >
        <HStack justifyContent={"space-between"}>
          <VStack spacing={"20px"} padding={"20px"}>
            <Heading size={"lg"} color={"white"}>
              Sign Up
            </Heading>
            <Divider color={"blue.500"} />
            <FormControl>
              <FormLabel>Username : </FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <FaUserShield color="gray.300" />
                </InputLeftElement>
                <Input
                  type="text"
                  name="username"
                  value={user?.username}
                  placeholder="Username"
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Email : </FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <EmailIcon color="gray.700" />
                </InputLeftElement>
                <Input
                  type="email"
                  name="email"
                  value={user?.email}
                  placeholder="Email address"
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel>Password : </FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <LockIcon color="gray.700" />
                </InputLeftElement>
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  onChange={handleChange}
                  name="password"
                  value={user?.password}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    style={{ background: "white" }}
                    onClick={handleClick}
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
              onClick={handleSignup}
              isLoading={isLoading}
            >
              Sign Up
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
                  <Text>Continue with Facebook</Text>
                </Center>
              </Button>

              {/* Google */}
              <Button w={"full"} variant={"outline"} leftIcon={<FcGoogle />}>
                <Center>
                  <Text>Continue with Google</Text>
                </Center>
              </Button>
            </Box>
          </VStack>
          <Image
            src="https://cdn.dribbble.com/users/3651832/screenshots/7058203/media/01ac4ec5340e8e7f0b3c53f88a22e38a.gif"
            width={"400px"}
          />
        </HStack>
      </Container>
    </Box>
  );
};

export default SignupPage;
