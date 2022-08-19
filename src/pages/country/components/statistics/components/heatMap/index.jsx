import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

// CHAKRA UI COMPONENTS
import { Box, Flex, HStack, Text } from '@chakra-ui/react';

import MapModal from './components/modal';

// UTILS
import HeatMapContext from './context';
import { useHeatColors } from './hooks';

import './style.css';
import { colors } from '../../../../../../utils/theme';
import HeatMapGT from './components/gt';
import HeatMapHN from './components/hn';

const HeatMap = ({ period, year, country }) => {
  const countryID = useParams().countryID || country;

  //SCALE
  const [scale, setScale] = useState({
    heat: {
      guatemala: {
        color: 'rgba(146,189,87',
        levelHeat: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      },
      honduras: {
        color: 'rgba(221,184,65',
        levelHeat: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      },
    },
  });

  // COLORES
  const [colorScales, setColorScales] = useState({});

  // MODAL
  const [modalDep, setModalDep] = useState('');

  // PREV COLOR
  const prevColor = useRef('');

  // CLICK EN DEPARTAMENTO
  const onClick = (name) => () => {
    prevColor.current = { [name]: colorScales[name] };
    setModalDep(name);
    setColorScales((prevScales) => ({
      ...prevScales,
      [name]: colors.heat[countryID][900],
    }));
  };

  // CERRAR
  const onCloseModal = () => {
    setModalDep('');
    setColorScales((prevScales) => ({
      ...prevScales,
      ...prevColor.current,
    }));
  };

  // DATA
  useHeatColors(setColorScales, countryID, period, year);

  return (
    <HeatMapContext.Provider value={{ colorScales, onClick }}>
      <Box
        gap='16px'
        width='100%'
        display='flex'
        alignItems='center'
        flexDirection='column'
        justifyContent='center'
        maxWidth={{ base: '100%', md: '450px' }}
      >
        <Text fontFamily='Oswald' fontSize='2xl'>
          Departamento de origen
        </Text>
        <Box>
          <HStack spacing={0}>
            <Box height='30px' width='30px' background={colors.heatMin[100]} />
            {Object.values(scale.heat[countryID].levelHeat).map((color) => {
              return (
                <Box
                  height='30px'
                  width='30px'
                  key={color}
                  background={`${scale.heat[countryID].color}, ${color})`}
                />
              );
            })}
          </HStack>
          <Flex justifyContent='space-between'>
            <Text fontFamily='Oswald' fontSize='lg'>
              Min.
            </Text>
            <Text fontFamily='Oswald' fontSize='lg'>
              Max.
            </Text>
          </Flex>
        </Box>
        {countryID === 'guatemala' && <HeatMapGT />}
        {countryID === 'honduras' && <HeatMapHN />}
        <MapModal
          country={country}
          year={year}
          period={period}
          modalDep={modalDep}
          onCloseModal={onCloseModal}
        />
      </Box>
    </HeatMapContext.Provider>
  );
};

export default HeatMap;
