import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box, Button, Container, Image, useDisclosure } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, getNotesAction } from "../Redux/notesReducer/action";
import Card from "../Components/Card";
import Loading from "../Components/Loading";
import Error from "../Components/Error";
import AddNoteModal from "../Components/AddNoteModal";
import UpdateModal from "../Components/UpdateModal";

const Notes = () => {
  //single note to edit
  const [singleNote, setSingleNote] = useState({});

  //AddNoteModal
  const {
    isOpen: isUpdateOpen,
    onOpen: onUpdateOpen,
    onClose: onUpdateClose,
  } = useDisclosure();
  const {
    isOpen: isAddNoteOpen,
    onOpen: onAddNoteOpen,
    onClose: onAddNoteClose,
  } = useDisclosure();

  //Redux Store
  const dispatch = useDispatch();
  const data = useSelector((store) => store.notesReducer.data);
  const isLoading = useSelector((store) => store.notesReducer.isLoading);
  const isError = useSelector((store) => store.notesReducer.isError);

  useEffect(() => {
    dispatch(getNotesAction());
  }, []);

  //handleDelete
  const handleDeleteBTN = (id) => {
    dispatch(deleteNoteAction(id)).then(() => {
      dispatch(getNotesAction());
    });
  };

  //handleEdit
  const handleEditBTN = (item) => {
    setSingleNote(item)
    onUpdateOpen();
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <Box bg={"#091216"} padding={"20px"} color={"white"} minH={"82vh"}>
      <Button
        color={"white"}
        bg={"#149652"}
        variant={"solid"}
        borderRadius={"50px"}
        padding={"10px 20px 10px 10px"}
        height={"70px"}
        _hover={{
          bg: "#0b8244",
        }}
        boxShadow={
          "rgb(255, 255, 255) 0px 4px 6px -1px, rgba(255, 255, 255, 0.974) 0px 2px 4px -1px"
        }
        leftIcon={
          <Image
            src="https://img.icons8.com/?size=1x&id=IA4hgI5aWiHD&format=png"
            width={"60px"}
          />
        }
        onClick={onAddNoteOpen}
      >
        Add Note
      </Button>
      <Container maxW={"4xl"} margin={"40px auto 20px auto"}>
        {data?.map((item) => {
          return (
            <Card
              key={item?._id}
              item={item}
              handleDeleteBTN={handleDeleteBTN}
              handleEditBTN={handleEditBTN}
            />
          );
        })}
      </Container>

      {/* AddNote Modal */}
      <AddNoteModal isOpen={isAddNoteOpen} onClose={onAddNoteClose} />
      <UpdateModal isOpen={isUpdateOpen} onClose={onUpdateClose} singleNote={singleNote} />
    </Box>
  );
};

export default Notes;
