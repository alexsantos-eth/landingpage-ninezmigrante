import React from 'react';

import { Stack } from '@chakra-ui/react';

import Mexico from './mexico';
import EEUU from './eeuu';

const Statistics = () => {
  return (
    <Stack bgColor='#d9e8e8' spacing='40px'>
      <Mexico />
      <EEUU />
    </Stack>
  );
};

export default Statistics;
