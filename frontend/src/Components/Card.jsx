import { Button, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Card = ({ item, handleDeleteBTN,handleEditBTN }) => {

    const handleDelete = ()=>{
        handleDeleteBTN(item?._id)
    }

    const handleEdit = ()=>{
      handleEditBTN(item)
    }


  return (
    <HStack spacing={"30px"} alignItems={"flex-start"} margin={"20px"}>
      <Image width={"300px"} borderRadius={"20px"} src="https://img.freepik.com/free-vector/storyboard-concept-with-smartphone-coffee_23-2148701189.jpg?size=626&ext=jpg&ga=GA1.2.1257944628.1683352118&semt=country_rows_v2" />
      <VStack width={"full"}  alignItems={"flex-start"}>
        <Heading size={"lg"} color={"white"}>{item?.title.toUpperCase()}</Heading>
        <Text>{item?.body}</Text>
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
