import axios from "axios";
import { getItemLS } from "../../localStorage/localStorage";
import {
  ADDNOTES_SUCCESS,
  NOTES_DELETE,
  NOTES_FAILURE,
  NOTES_REQUEST,
  NOTES_SUCCESS,
  UPDATENOTES_SUCCESS,
} from "../actionTypes";

//GET Notes
export const getNotesAction = () => (dispatch) => {
  dispatch({ type: NOTES_REQUEST });
  const token = getItemLS("auth")?.token || "";

  axios("https://notesbackend-5ryo.onrender.com/notes", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      console.log(res);
      if (!res.data) {
        dispatch({ type: NOTES_SUCCESS, payload: [] });
      } else {
        dispatch({ type: NOTES_SUCCESS, payload: res?.data });
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: NOTES_FAILURE });
    });
};

//POST Notes
export const addNotesAction = (note) => (dispatch) => {
  dispatch({ type: NOTES_REQUEST });
  const token = getItemLS("auth")?.token || "";
  return axios
    .post("https://notesbackend-5ryo.onrender.com/notes/create", note, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      dispatch({ type: ADDNOTES_SUCCESS, payload: res?.data?.message });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: NOTES_FAILURE });
    });
};

//PATCH Notes
export const upateNotesAction = (note) => (dispatch) => {
  dispatch({ type: NOTES_REQUEST });
  const token = getItemLS("auth")?.token || "";
  return axios
    .patch(
      `https://notesbackend-5ryo.onrender.com/notes/update/${note?._id}`,
      note,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      console.log(res);
      dispatch({ type: UPDATENOTES_SUCCESS, payload: res?.data?.message });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: NOTES_FAILURE });
    });
};

//DELETE Notes
export const deleteNoteAction = (id) => (dispatch) => {
  dispatch({ type: NOTES_REQUEST });
  const token = getItemLS("auth")?.token || "";
  return axios(`https://notesbackend-5ryo.onrender.com/notes/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      dispatch({ type: NOTES_DELETE });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: NOTES_FAILURE });
    });
};
