import React from 'react';
import Box from "@mui/material/Box";

import Header from '../../components/header/header';
import ContactsComponent from '../../components/phonebookcomponent/phonebookcomponent';

const PhoneBookPage = () => {
  return (
      <Box>
          <Header />
          <ContactsComponent/>
    </Box>
  )
}

export default PhoneBookPage;