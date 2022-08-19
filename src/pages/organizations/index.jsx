// REACT
import React, { useEffect } from 'react';

// CHAKRA UI COMPONENTS
import { Box, Stack } from '@chakra-ui/react';

import Slider from './components/slider';
import Ongs from './components/ongs';

const OrganizationsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <Box padding={{ base: '24px', md: '40px' }} bgColor='gray.100'>
      <Stack
        spacing='40px'
        margin='0 auto'
        maxWidth='800px'
        alignItems='flex-start'
        justifyContent='center'
        bgColor='gray.50'
        padding='10'
        border='#fff 1px'
        borderRadius='10'
      >
        <Ongs />
        {/* <Slider /> */}
      </Stack>
    </Box>
  );
};

export default OrganizationsPage;
