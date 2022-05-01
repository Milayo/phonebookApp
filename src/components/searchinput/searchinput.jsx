import React from "react";
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = () => {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <TextField
        size="small"
        fullWidth
        id="input-with-icon-textfield"
        placeholder="SEARCH BY NAME OR NUMBER"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchInput;
