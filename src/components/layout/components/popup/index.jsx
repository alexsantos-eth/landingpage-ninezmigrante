// REACT
import React, { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";

// GOOGLE RECAPTCHA
import ReCAPTCHA from "react-google-recaptcha";

// CHAKRA UI COMPONENTS
import {
  Box,
  Text,
  Stack,
  Input,
  Button,
  Select,
  Checkbox,
  IconButton,
} from "@chakra-ui/react";

// CHAKRA UI ICONS
import { CloseIcon } from "@chakra-ui/icons";

import "./index.css";
import sendContactEmail, { validateEmail } from "../../../../utils/email";

const Popup = () => {
  const toast = useToast();
  const [popup, setPopup] = useState(false);
  const [form, setForm] = useState({
    email: "",
    age: "",
    gender: "",
    country: "",
    message: "",
    notifications: "",
    captcha: "",
  });

  const sendForm = () => {
    // VALIDAR CAPTCHA
    if (!form.captcha) {
      toast({
        title: "Por favor completa el reCAPTCHA",
        status: "error",
      });
      return;
    }

    //  VALIDAR EMAIL
    if (!validateEmail(form.email)) {
      toast({
        title: "Tu correo electrónico no es válido.",
        status: "error",
      });
      return;
    }

    // ENVIAR
    sendContactEmail({
      ...form,
      callBack: (msg) => {
        toast({
          title: "Hemos recibido tu información correctamente.",
          status: "success",
        });
      },
    });
    closePopup();
  };

  const handleInputs = (ev) =>
    setForm((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));

  const handleCheckbox = (ev) =>
    setForm((prev) => ({
      ...prev,
      notifications: ev.target.checked,
    }));

  useEffect(() => {
    if (!import.meta.env.DEV) {
      setTimeout(() => {
        setPopup(true);
      }, 3000);
    }
  }, []);

  const closePopup = () => {
    setPopup(false);
  };

  if (popup) {
    document.body.classList.add("active-popup");
  } else {
    document.body.classList.remove("active-popup");
  }

  const onChange = (value) => {
    setForm((prev) => ({ ...prev, captcha: value }));
  };

  return (
    <>
      {popup && (
        <Box
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="2"
          width="100vw"
          height="100vh"
          position="fixed"
        >
          {/* OVERLAY */}
          <Box
            zIndex="2"
            width="100%"
            height="100%"
            position="fixed"
            onClick={closePopup}
            bgColor="rgba(0,0,0,0.5)"
            backdropFilter="blur(4px)"
            _hover={{ cursor: "pointer" }}
          ></Box>

          {/* CONTENT */}
          <Box
            top="50%"
            left="50%"
            zIndex="2"
            borderRadius="8px"
            position="absolute"
            padding="40px 32px 32px 32px"
            bgColor="rgba(255,255,255,0.8)"
            transform="translate(-50%, -50%)"
            width={{ base: "324px", md: "720px" }}
            height={{ base: "480px", md: "auto" }}
            overflow={{ base: "scroll", md: "hidden" }}
          >
            <IconButton
              size="xs"
              top="10px"
              right="10px"
              position="absolute"
              icon={<CloseIcon />}
              onClick={closePopup}
            />

            {/* POPUP TITLE */}
            <Text
              fontWeight="500"
              textAlign="center"
              marginBottom="24px"
              fontFamily="Montserrat Medium"
              fontSize={{ base: "2xl", md: "3xl" }}
            >
              Queremos saber más sobre usted
            </Text>

            {/* FORM */}
            <Stack gap={{ base: "16px", md: "24px" }}>
              {/* EMAIL FIELD */}
              <Stack
                gap="0px"
                direction={{ base: "column", md: "row" }}
                alignItems="center"
              >
                <Text
                  fontFamily="Montserrat Medium"
                  fontSize={{ base: "lg", md: "xl" }}
                  width={{ base: "100%", lg: "12%" }}
                >
                  E-mail:
                </Text>
                <Input
                  name="email"
                  onChange={handleInputs}
                  type="email"
                  bgColor="white"
                  width={{ base: "100%", lg: "88%" }}
                />
              </Stack>

              <Stack direction={{ base: "column", md: "row" }} gap="16px">
                {/* AGE FIELD */}
                <Stack
                  gap="0px"
                  width="100%"
                  alignItems="center"
                  direction={{ base: "column", md: "row" }}
                >
                  <Text
                    fontFamily="Montserrat Medium"
                    fontSize={{ base: "lg", md: "xl" }}
                    width={{ base: "100%", md: "25%" }}
                  >
                    Edad:
                  </Text>
                  <Input
                    name="age"
                    onChange={handleInputs}
                    type="number"
                    bgColor="white"
                    width={{ base: "100%", md: "75%" }}
                  />
                </Stack>

                {/* GENDER FIELD */}
                <Stack
                  gap="0px"
                  width="100%"
                  alignItems="center"
                  direction={{ base: "column", md: "row" }}
                >
                  <Text
                    fontFamily="Montserrat Medium"
                    fontSize={{ base: "lg", md: "xl" }}
                    width={{ base: "100%", md: "25%" }}
                  >
                    Género:
                  </Text>
                  <Select
                    name="gender"
                    onChange={handleInputs}
                    bgColor="white"
                    fontFamily="Montserrat Medium"
                    placeholder="Selecciona tu género"
                    width={{ base: "100%", md: "75%" }}
                  >
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="femenino">Otro</option>
                    <option value="femenino">Prefiero no decirlo</option>
                  </Select>
                </Stack>
              </Stack>

              {/* COUNTRY FIELD */}
              <Stack
                gap="0px"
                alignItems="center"
                direction={{ base: "column", md: "row" }}
              >
                <Text
                  fontFamily="Montserrat Medium"
                  fontSize={{ base: "lg", md: "xl" }}
                  width={{ base: "100%", md: "12%" }}
                >
                  País:
                </Text>
                <Input
                  name="country"
                  onChange={handleInputs}
                  type="text"
                  bgColor="white"
                  width={{ base: "100%", md: "88%" }}
                />
              </Stack>

              {/* INQUIRY FIELD */}
              <Stack
                gap="0px"
                alignItems="center"
                direction={{ base: "column", md: "row" }}
              >
                <Text
                  fontFamily="Montserrat Medium"
                  fontSize={{ base: "lg", md: "xl" }}
                  width={{ base: "100%", md: "30%" }}
                >
                  Rázon de consulta:
                </Text>
                <Select
                  name="message"
                  onChange={handleInputs}
                  bgColor="white"
                  fontFamily="Montserrat Medium"
                  width={{ base: "100%", md: "70%" }}
                  placeholder="Selecciona una opción"
                >
                  <option value="investigacion">Investigación</option>
                  <option value="academia">Academia</option>
                  <option value="escolar">Escolar</option>
                </Select>
              </Stack>

              {/* NEWSLETTER CHECKBOX */}
              <Checkbox borderColor="black" onChange={handleCheckbox}>
                <Text fontFamily="Montserrat Medium">
                  Deseo recibir notificaciones
                </Text>
              </Checkbox>

              {/* GOOGLE RECAPTCHA */}
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_APP_GOOGLE_RECAPTCHA_KEY}
                onChange={onChange}
              />

              {/* SEND BUTTON */}
              <Button
                color="white"
                bgColor="blue.700"
                onClick={sendForm}
                fontFamily="Montserrat Medium"
                size={{ base: "md", md: "lg" }}
                _hover={{ bgColor: "red.500" }}
              >
                Enviar
              </Button>
            </Stack>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Popup;
