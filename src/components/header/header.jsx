import React from "react";
import { Box, Typography } from "@mui/material";
import ContactsIcon from "@mui/icons-material/Contacts";

const Header = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#281E5D",
        height: "4rem",
        color: "white",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
        margin: "0 .5rem",
      }}
    >
      <ContactsIcon />
      <Typography>PHONEBOOK APP</Typography>
    </Box>
  );
};

export default Header;
