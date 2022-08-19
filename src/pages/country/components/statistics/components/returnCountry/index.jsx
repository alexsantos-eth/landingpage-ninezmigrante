// REACT
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// CHAKRA UI COMPONENTS
import { Box, Stack, Text } from '@chakra-ui/react';

// ASSETS
import EEUU from './components/polygons/eeuu';
import Mexico from './components/polygons/mexico';
import Canada from './components/polygons/canada';
import Belice from './components/polygons/belice';
import Guatemala from './components/polygons/guatemala';
import ElSalvador from './components/polygons/elsalvador';

import useFetch from '../../../../../../hooks/fetch';

const countryImages = {
  eu: { color: '', image: <EEUU key={`eeuu_1`} /> },
  mx: { color: '', image: <Mexico key={`mexico_2`} /> },
  cd: { color: '', image: <Canada key={`canada_3`} /> },
  gt: { color: '', image: <Guatemala key={`guatemala_4`} /> },
  bz: { color: '', image: <Belice key={`belice_5`} /> },
  es: { color: '', image: <ElSalvador key={`elsalvador_6`} /> },
};

const defaultTotals = {
  eu: { name: '', total: 0 },
  mx: { name: '', total: 0 },
  cd: { name: '', total: 0 },
  gt: { name: '', total: 0 },
  bz: { name: '', total: 0 },
  es: { name: '', total: 0 },
};

const ReturnCountry = ({ period, year, country }) => {
  const countryID = useParams().countryID || country;
  const [total, setTotal] = useState(() => ({ ...defaultTotals }));

  useFetch({
    url: '/consultas/totalporpaisdeproveniencia/country/year/quarter',
    year,
    period,
    country: countryID,
    resolve: (data) => {
      let totals = {
        eu: { name: '', total: 0 },
        mx: { name: '', total: 0 },
        cd: { name: '', total: 0 },
        gt: { name: '', total: 0 },
        bz: { name: '', total: 0 },
        es: { name: '', total: 0 },
      };

      data?.data?.forEach((stats) => {
        if (stats._id?.nombre === 'Estados Unidos') {
          totals.eu.total = stats.total;
          totals.eu.name = 'EE.UU.';
        }
        if (stats._id?.nombre === 'México') {
          totals.mx.total = stats.total;
          totals.mx.name = stats._id?.nombre;
        }
        if (stats._id?.nombre === 'Canadá') {
          totals.cd.total = stats.total;
          totals.cd.name = stats._id?.nombre;
        }
        if (stats._id?.nombre === 'Guatemala') {
          totals.gt.total = stats.total;
          totals.gt.name = stats._id?.nombre;
        }
        if (stats._id?.nombre === 'Belice') {
          totals.bz.total = stats.total;
          totals.bz.name = stats._id?.nombre;
        }

        if (stats._id?.nombre === 'El Salvador') {
          totals.es.total = stats.total;
          totals.es.name = stats._id?.nombre;
        }
      });

      setTotal(totals);
    },
  });

  return (
    <Box width='100%'>
      <Stack justifyContent='center' alignItems='center' marginBottom='24px'>
        <Text fontFamily='Oswald' fontSize='2xl'>
          País de retorno
        </Text>
      </Stack>

      <Stack
        spacing='24px'
        justifyContent='center'
        direction={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'center', md: 'flex-end' }}
      >
        {Object.entries(total)
          .sort((a, b) => b[1].total - a[1].total)
          .map((country, index) =>
            country[1].total > 0 ? (
              <Stack
                gap='24px'
                direction='column'
                key={`${country[0]}-${index}`}
                alignItems='center'
                justifyContent='center'
              >
                {countryImages[country[0]].image}

                <Stack
                  spacing='8px'
                  direction='column'
                  alignItems='center'
                  justifyContent='space-between'
                >
                  <Text fontFamily='Oswald' fontSize='md' lineHeight='1'>
                    {country[1].name}
                  </Text>
                  <Text fontFamily='Oswald' fontSize='3xl' lineHeight='1'>
                    {country[1].total}
                  </Text>
                </Stack>
              </Stack>
            ) : null
          )}
      </Stack>
    </Box>
  );
};

export default ReturnCountry;
