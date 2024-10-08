import React from 'react';
import { Box } from '@chakra-ui/react';

const Main = ({ children }) => {
  return (
    <Box as="main" role='main'>
      {children}
    </Box>
  );
};

export default Main;
