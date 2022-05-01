import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, Typography, Button, Modal, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchInput from "../searchinput/searchinput";
import ContactTable from "../contacttable/contacttable";
import { addUser } from "../../redux/contacts/contact-actions";

const ContactsComponent = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
  });
  const dispatch = useDispatch();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    dispatch(addUser(input));
    setInput({
      firstName: "",
      lastName: "",
      phoneNumber: "",
    });
  }
  return (
    <Box
      sx={{
        textTransform: "uppercase",
        display: "flex",
        padding: "2rem 4rem",
        flexDirection: "column",
        alignItems: "center",
        height: "35rem",
        width: "70vw",
        margin: "1rem auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "70vw",
          justifyContent: "space-between",
          padding: "0 4rem",
          alignItems: "center",
          margin: "1.5rem",
        }}
      >
        {" "}
        <Typography>Contacts</Typography>
        <Button
          variant="outlined"
          color="secondary"
          onClick={handleOpen}
          startIcon={<AddIcon />}
        >
          Add Contact
        </Button>
      </Box>
      <SearchInput />
      <ContactTable />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            backgroundColor: "#fff",
            border: "2px solid #281E5D",
            boxShadow: 24,
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <TextField
            size="small"
            name="firstName"
            label="First Name"
            value={input.firstName}
            onChange={handleChange}
          />
          <TextField
            size="small"
            label="Last Name"
            name="lastName"
            value={input.lastName}
            onChange={handleChange}
          />
          <TextField
            size="small"
            label="Phone Number"
            name="phoneNumber"
            value={input.phoneNumber}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            color="secondary"
            sx={{
              width: "5rem",
            }}
            onClick={handleSubmit}
          >
            ADD
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ContactsComponent;