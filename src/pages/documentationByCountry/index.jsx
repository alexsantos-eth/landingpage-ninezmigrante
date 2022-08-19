import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/fetch';
import {
  Stack,
  Button,
  Text,
  Box,
  Heading,
  HStack,
  Badge,
  Divider,
  Flex,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { colors } from '../../utils/theme';
import { motion } from 'framer-motion';
import Libreria from '../../assets/libreria.jpg';

const DocumentationByCountry = () => {
  const { countryID } = useParams();
  const titulo = countryID.charAt(0).toUpperCase() + countryID.slice(1);
  const [dataByCountry, setDataByCountry] = useState([]);

  const downloadDocument = (id) => () =>
    fetch(`${import.meta.env.VITE_APP_API_URL}/uploads/recursos/${id}`)
      .then((res) => res.blob())
      .then((blob) => {
        var a = document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = `${id}`;
        a.click();
      });

  useFetch({
    url: '/recurso/public',
    country: countryID,
    resolve: (data) => {
      setDataByCountry(
        data?.recursos?.filter(
          (source) => source?.categoria?.nombre === countryID?.toUpperCase()
        ) ?? []
      );
    },
  });

  const MotionFlex = motion(Flex);

  return (
    <Box width='100%' padding='40px'>
      <Stack
        spacing={4}
        width='100%'
        margin='auto'
        maxWidth='800px'
        direction='column'
      >
        <Heading
          padding='10px 0px 10px 0px'
          as='h1'
          size='lg'
          fontFamily='Oswald'
        >
          {`Listado de documentos de ${titulo}`}
        </Heading>
        <Divider orientation='horizontal' />
        <MotionFlex
          py={3}
          px={3}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileInView={{ opacity: 1 }}
        >
          <Stack
            w='100%'
            padding='10px 0px 10px 0px'
            display='flex'
            mt='4'
            alignItems='center'
            justifyContent='space-around'
          >
            {dataByCountry.map((source) => (
              <HStack
                shadow='md'
                borderWidth='1px'
                width='100%'
                spacing={8}
                padding='8'
                direction={{ base: 'column', md: 'row' }}
                key={source.id}
                alignItems='center'
                justifyContent='space-between'
              >
                <Stack transition='ease-in' direction='column' spacing={0}>
                  <Text fontFamily='Oswald' fontSize='2xl'>
                    {source.nombre}
                  </Text>
                  <Text fontFamily='Montserrat Medium'>
                    {source.descripcion}
                  </Text>
                  <Stack direction='row'>
                    <Heading color='gray' as='h6' size='xs'>
                      Catalogado en:
                    </Heading>
                    <Badge color={colors.green[700]}>
                      {source.subCategoria.nombre}
                    </Badge>
                  </Stack>
                </Stack>
                {source.archivos === '' ? null : (
                  <Button
                    size='lg'
                    bgColor='#ccc'
                    rightIcon={<DownloadIcon />}
                    fontFamily='Montserrat Medium'
                    onClick={downloadDocument(source.id)}
                    _hover={{ bgColor: 'green.700', color: 'white' }}
                  >
                    Descargar
                  </Button>
                )}
              </HStack>
            ))}
          </Stack>
        </MotionFlex>
      </Stack>
    </Box>
  );
};

export default DocumentationByCountry;
