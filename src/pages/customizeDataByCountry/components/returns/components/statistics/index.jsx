// REACT
import React, { useState, useRef } from 'react';

// REACT ROUTER DOM
import { useParams } from 'react-router-dom';

// CHAKRA UI COMONENTS
import { Box, Stack, Text } from '@chakra-ui/react';

import DownloadImage from '../../../../../../components/downloadImage';

// HOOKS
import useSortedDepartments from './hooks';

import ModalContentGT from '../../../../../../components/departments/components/gt';
import ModalContentHN from '../../../../../../components/departments/components/hn';
import { colors } from '../../../../../../utils/theme';
import { year as currentYear } from '../../../../../../utils/year';

const Statistics = ({ returns }) => {
  const { countryID } = useParams();
  const [data, setData] = useState([]);
  const { period, year, list } = returns;
  const containerRef = useRef(null);
  useSortedDepartments(setData, countryID, period, year, list);

  return (
    <Box width='100%' padding='0px 40px 80px 40px'>
      {/* CONTAINER */}
      <Stack
        ref={containerRef}
        margin='auto'
        spacing='40px'
        bgColor='white'
        maxWidth='800px'
        direction='column'
        alignItems='center'
        borderRadius='20px'
        padding='60px 40px'
        justifyContent='center'
      >
        {/* TITLE AND SELECTED DATA */}
        <Stack
          spacing='16px'
          direction='column'
          alignItems='center'
          justifyContent='center'
        >
          <Text
            fontSize='2xl'
            fontFamily='Oswald'
            lineHeight={{ base: '1.5', md: '1' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            {`DEPARTAMENTOS CON ${
              list === 'desc' ? 'MENOS' : 'MÁS'
            } RETORNADOS - ${
              countryID === 'guatemala' ? 'GUATEMALA' : 'HONDURAS'
            }`}
          </Text>
          <Text
            fontSize='2xl'
            lineHeight='1'
            fontWeight='600'
            fontFamily='Times'
          >
            {`Cuatrimestre ${period?.substring(1) ?? ''} - ${
              year ?? currentYear
            }`}
          </Text>
        </Stack>

        {/* DEPARTMENTS */}
        <Stack
          alignItems='center'
          justifyContent='center'
          gap={{ base: '40px', md: '60px' }}
          direction={{ base: 'column', md: 'row' }}
        >
          {/* DEPARMENT BOX */}
          {data.map((department, index) => (
            <Stack
              key={index}
              direction='column'
              alignItems='center'
              justifyContent='center'
            >
              <Stack height='80px'>
                {countryID === 'guatemala' ? (
                  <ModalContentGT
                    disableHeat
                    id={department.id}
                    customColor={[colors.heat.guatemala[900 - index * 100]]}
                  />
                ) : (
                  <ModalContentHN
                    disableHeat
                    id={department.id}
                    customColor={[colors.heat.honduras[900 - index * 100]]}
                  />
                )}
              </Stack>

              <Stack
                direction='column'
                justifyContent='center'
                alignItems={{ base: 'center', md: 'flex-start' }}
              >
                <Text fontFamily='Oswald' fontSize='xl' lineHeight='1'>
                  {department?._id.replace('Department', '')}
                </Text>
                <Text fontFamily='Oswald' fontSize='4xl' lineHeight='1'>
                  {department?.total}
                </Text>
              </Stack>
            </Stack>
          ))}
        </Stack>
        <Stack
          width='100%'
          margin='auto'
          direction='column'
          alignItems='center'
          marginBottom='40px'
          padding='20px'
          justifyContent='center'
          maxWidth={{ base: '300px', md: '800px' }}
        >
          <Text
            textAlign='center'
            fontFamily='Oswald'
            fontSize={{ base: 'xl', md: '2xl' }}
            maxWidth={{ base: '300px', md: '800px' }}
          >
            {countryID === 'guatemala'
              ? 'Fuentes: SBS y/o IGM'
              : 'Fuente: DINAF'}
          </Text>

          <Text
            textAlign='center'
            fontFamily='Montserrat Medium'
            fontSize={{ base: 'xs', md: 'sm' }}
          >
            Esta información ha sido procesada por: MOBINM, monitoreo binacional
            de niñez migrante Guatemala-Honduras, en el marco del Proyecto
            Binacional Honduras-Guatemala a favor de los derechos de la niñez y
            adolescencia migrante. Implementado por: PAMI y COIPRODEN, con
            fondos de KNH y BMZ.
          </Text>
        </Stack>
        <DownloadImage
          containerRef={containerRef}
          label='Descargar imagen de comparación'
        />
      </Stack>
    </Box>
  );
};

export default Statistics;
