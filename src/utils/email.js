export const validateEmail = (email) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(email)
}

const sendContactEmail = ({
  email,
  phone,
  name,
  age,
  gender,
  subject,
  country,
  message,
  callBack = () => {}
}) =>
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "alexdanielsantosv@gmail.com",
    Password: "8596A4CC2E48D0FD981D12089DA72CE574B1",
    addresses: email,
    To: "info@ninezmigrante.org",
    From: "alexdanielsantosv@gmail.com",
    Subject: subject ?? "Nuevo mensaje desde NiñezMigrante.org",
    Body: `Correo: ${email}, Mensaje: ${message} ${
      phone
        ? `Telefono: ${phone}, Nombre: ${name}`
        : `Edad: ${age}, Genero: ${gender}, Pais: ${country}`
    }`,
  }).then((message) => callBack(message));

export default sendContactEmail;
