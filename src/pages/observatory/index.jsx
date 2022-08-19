// REACT
import React, { useEffect } from 'react';

// CHAKRA UI COMPONENTS
import { Box, Stack, Text, Heading } from '@chakra-ui/react';

// COMPONENTS
import Slider from './components/slider';

const ObservatoryPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
  return (
    <Box padding={{ base: '24px', md: '40px' }} bgColor='gray.100'>
      <Stack
        spacing='40px'
        margin='0 auto'
        maxWidth='800px'
        bgColor='gray.50'
        padding='40px'
        alignItems='flex-start'
        justifyContent='center'
        borderRadius='10'
      >
        <Slider />
      </Stack>
    </Box>
  );
};

export default ObservatoryPage;
