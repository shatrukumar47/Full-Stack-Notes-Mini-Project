import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaClipboardList, FaFeather, FaNeos } from "react-icons/fa";

const Card = ({ item, handleDeleteBTN, handleEditBTN }) => {
  const handleDelete = () => {
    handleDeleteBTN(item?._id);
  };

  const handleEdit = () => {
    handleEditBTN(item);
  };

  return (
    <HStack spacing={"10px"} alignItems={"flex-start"} padding={"10px"} borderRadius={"10px"} marginBottom={"15px"} boxShadow={"rgb(27, 131, 210) 0px 1px 2px 0px, rgb(5, 147, 255) 0px 1px 3px 1px"}>
      <Box paddingTop={"10px"} color={"blue.400"}>
        <FaFeather />
      </Box>
      <VStack width={"full"} alignItems={"flex-start"} wordBreak={"break-all"}>
        <Heading size={"lg"} color={"white"} textAlign={"justify"}>
          {item?.title.toUpperCase()}
        </Heading>
        <Text textAlign={"justify"}>{item?.body}</Text>
        <HStack
          spacing={{ base: "5px", md: "10px", lg: "20px" }}
          margin={"20px"}
        >
          <Button
            bg="darkblue"
            color={"white"}
            borderRadius={"50px"}
            _hover={{
              bg: "black",
            }}
            boxShadow={
              "rgb(255, 255, 255) 0px 4px 6px -1px, rgba(255, 255, 255, 0.974) 0px 2px 4px -1px"
            }
            onClick={handleEdit}
          >
            Edit
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
            onClick={handleDelete}
          >
            Delete
          </Button>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Card;
