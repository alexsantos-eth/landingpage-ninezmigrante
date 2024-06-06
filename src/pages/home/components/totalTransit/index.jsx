// REACT
import React, { useState, useEffect } from 'react';

// CHAKRA UI COMPONENTS
import { Box, Stack, Image, Text, Tooltip } from '@chakra-ui/react';

// COMPONETS
import Mexico from '../../../../assets/mexico.svg';
import USA from '../../../../assets/usa.svg';
import Family from '../../../../assets/family.png';

// UTILS
import { year } from '../../../../utils/year';
import useFetch from '../../../../hooks/fetch';

const TotalTransit = () => {
  const [total, setTotal] = useState({ mx: 0, usa: 0 });

  // OBTENER DATOS
  useFetch({
    url: '/consultas/detenidosenfrontera/selectedYear/m%C3%A9xico',
    year,
    resolve: (data) =>
      setTotal((prev) => ({ ...prev, mx: data.data?.[0]?.granTotal ?? 0 })),
  });

  useFetch({
    url: '/consultas/detenidosenfronteradeestadosunidos/selectedYear/estados%20unidos',
    year,
    resolve: (data) =>
      setTotal((prev) => ({ ...prev, usa: data.data?.[0]?.granTotal ?? 0 })),
  });

  return (
    <Box bg="blue.500" p={{ base: '40px 24px', md: '80px 40px' }}>
      {/* CONTAINER */}
      <Stack
        alignItems="center"
        justifyContent="center"
        gap={{ base: '0px', md: '40px' }}
        padding={{ base: '16px', md: '24px' }}
        direction={{ base: 'column', md: 'row' }}
      >
        {/* DESKTOP IMAGE */}
        <Image
          w="180px"
          h="180px"
          src={Family}
          display={{ base: 'none', md: 'block' }}
        />
        {/* DATA */}
        <Stack
          direction="column"
          justifyContent="center"
          gap={{ base: '24px', md: '0px' }}
          alignItems={{ base: 'center', md: 'flex-start' }}
        >
          {/* TITLE */}
          <Text
            maxWidth="600px"
            fontFamily="Oswald"
            fontSize={{ base: '3xl', md: '4xl' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            Total de NIÑEZ en TRANSITO {year}
          </Text>

          {/* MOBILE IMAGE */}
          <Image
            w="150px"
            h="150px"
            src={Family}
            display={{ base: 'block', md: 'none' }}
          />

          {/* GLOBAL DATA */}
          <Text fontFamily="Oswald" fontSize={{ base: '5xl', md: '6xl' }}>
            {Number(total.mx) + Number(total.usa)}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};

export default TotalTransit;
