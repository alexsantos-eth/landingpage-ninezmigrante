import React, { useState, useRef, useEffect } from 'react';

import { Box, Stack, Text } from '@chakra-ui/react';

import SelectOptions from './components/selectOptions';
import Statistics from './components/statistics';
import DownloadTable from '../country/components/statistics/components/downloadTable';

const ComparePage = () => {
  const [options, setOptions] = useState({
    1: { country: '', year: '', period: '' },
    2: { country: '', year: '', period: '' },
  });
  const [screenshot, setScreenshot] = useState(false);

  const handleDownloadImage = async () => setScreenshot(true);

  useEffect(() => {
    if (screenshot) {
      const take = async () => {
        const element = satisticsRef.current;
        const html2canvas = (await import('html2canvas')).default;
        const canvas = await html2canvas(element);

        const data = canvas.toDataURL('image/png');
        const link = document.createElement('a');

        if (typeof link.download === 'string') {
          link.href = data;
          link.download = 'infografia.png';

          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          window.open(data);
        }

        setScreenshot(false);
      };
      take();
    }
  }, [screenshot]);

  const satisticsRef = useRef(null);

  const onChange = (id, data) => {
    setOptions((prevOptions) => ({ ...prevOptions, [id]: data }));
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <SelectOptions onChange={onChange} satisticsRef={satisticsRef} />
      {Object.values(options).every((option) =>
        Object.values(option).every((value) => value !== '')
      ) && (
        <Box
          ref={satisticsRef}
          bgColor='#eee'
          padding={{ base: '40px 24px', md: '80px 40px' }}
        >
          <Stack
            gap='40px'
            alignContent='center'
            justifyContent='center'
            marginBottom='60px'
            direction={{ base: 'column', md: 'row' }}
          >
            <Statistics data={options['1']} />
            <Statistics data={options['2']} />
          </Stack>
          <Stack
            width='100%'
            margin='auto'
            direction='column'
            alignItems='center'
            marginBottom='40px'
            justifyContent='center'
            maxWidth={{ base: '300px', md: '800px' }}
          >
            <Text
              textAlign='center'
              fontFamily='Oswald'
              fontSize={{ base: 'xl', md: '2xl' }}
              maxWidth={{ base: '300px', md: '800px' }}
            >
              {options[1].country === 'guatemala'
                ? 'Fuentes Guatemala: SBS y/o IGM'
                : options[2].country === 'honduras'
                ? 'Fuente Honduras: DINAF'
                : 'Fuente Honduras: DINAF - Fuentes Guatemala: SBS y/o IGM'}
            </Text>

            <Text
              textAlign='center'
              fontFamily='Montserrat Medium'
              fontSize={{ base: 'xs', md: 'sm' }}
            >
              Esta información ha sido procesada por: MOBINM, monitoreo
              binacional de niñez migrante Guatemala-Honduras, en el marco del
              Proyecto Binacional Honduras-Guatemala a favor de los derechos de
              la niñez y adolescencia migrante. Implementado por: PAMI y
              COIPRODEN, con fondos de KNH y BMZ.
            </Text>
          </Stack>
          {!screenshot && (
            <DownloadTable
              satisticsRef={satisticsRef}
              handleDownloadImage={handleDownloadImage}
              periodId={''}
            />
          )}
        </Box>
      )}
    </>
  );
};

export default ComparePage;
