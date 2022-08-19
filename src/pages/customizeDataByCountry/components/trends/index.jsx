import React from 'react';

import Header from './components/header';
import TrendsGraphs from './components/graphs';
import { Box } from '@chakra-ui/react';

const Trends = () => {
  return (
    <Box bgColor='#d9e8e8'>
      <Header />
      <TrendsGraphs />
    </Box>
  );
};

export default Trends;
