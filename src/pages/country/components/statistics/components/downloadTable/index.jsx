import React, { useState } from 'react';

import { Stack, Text, Button, Image, Divider } from '@chakra-ui/react';

import { DownloadIcon } from '@chakra-ui/icons';

import folder from '../../../../../../assets/folder.png';
import DownloadImage from '../../../../../../components/downloadImage';

const DownloadTable = ({ satisticsRef, periodId, tableState }) => {
  const [hideXls, setHideXls] = useState(false);
  const onSS = (ss) => setHideXls(ss);

  // DOWNLOAD
  const downloadXLS = () =>
    fetch(`${import.meta.env.VITE_APP_API_URL}/uploads/planillav1/${periodId}`)
      .then((res) => res.blob())
      .then((blob) => {
        var a = document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = `${periodId}`;
        a.click();
      });

  return (
    <>
      <Stack
        gap='40px'
        margin='auto'
        maxWidth='750px'
        direction='column'
        alignItems='center'
        justifyContent='center'
      >
        <Divider
          data-html2canvas-ignore='true'
          orientation='horizontal'
          borderColor='black'
          borderWidth='1px'
        />

        {hideXls && <></>}
        {!periodId ? (
          <></>
        ) : (
          <Stack
            data-html2canvas-ignore='true'
            gap='24px'
            alignItems='center'
            justifyContent='center'
            direction={{ base: 'column', md: 'row' }}
          >
            <Image src={folder} height='50px' />
            <Text fontFamily='Oswald' fontSize='2xl'>
              Descargar tabla XLS del período
            </Text>

            <Button
              size='lg'
              bgColor='#ccc'
              onClick={downloadXLS}
              rightIcon={<DownloadIcon />}
              fontFamily='Montserrat Medium'
              _hover={{ bgColor: 'green.700', color: 'white' }}
            >
              Descargar
            </Button>
          </Stack>
        )}

        <DownloadImage
          onSS={onSS}
          containerRef={satisticsRef}
          label='Descargar infografía del período'
        />
      </Stack>
    </>
  );
};

export default DownloadTable;
