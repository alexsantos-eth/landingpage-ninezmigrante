import React, { useState, useEffect } from 'react';

import { Stack, Text, Button, Image } from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import folder from '../../assets/folder.png';

const DownloadImage = ({ label, containerRef, onSS = (screenshot) => {} }) => {
  // STATE
  const [screenshot, setScreenshot] = useState(false);
  const handleDownloadImage = async () => setScreenshot(true);

  // TAKE SCREEN SHOOT
  useEffect(() => {
    onSS(screenshot);
    if (screenshot) {
      const take = async () => {
        const element = containerRef.current;
        const html2canvas = (await import('html2canvas')).default;

        const canvas = await html2canvas(element, {
          scrollX: -window.scrollX,
          scrollY: -window.scrollY,
          windowWidth: document.documentElement.offsetWidth,
          windowHeight: document.documentElement.offsetHeight,
        });

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

  return !screenshot ? (
    <Stack
      gap='24px'
      alignItems='center'
      justifyContent='center'
      direction={{ base: 'column', md: 'row' }}
    >
      {label.length > 0 && (
        <>
          <Image src={folder} height='50px' />
          <Text fontFamily='Oswald' fontSize='2xl' textAlign='center'>
            {label}
          </Text>
        </>
      )}
      <Button
        size='lg'
        bgColor='#ccc'
        onClick={handleDownloadImage}
        rightIcon={<DownloadIcon />}
        fontFamily='Montserrat Medium'
        _hover={{ bgColor: 'green.700', color: 'white' }}
      >
        Descargar
      </Button>
    </Stack>
  ) : (
    <></>
  );
};

export default DownloadImage;
