const sendContactEmail = ({
  email,
  phone,
  name,
  age,
  gender,
  subject,
  country,
  message,
}) =>
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "alexdanielsantosv@gmail.com",
    Password: "8596A4CC2E48D0FD981D12089DA72CE574B1",
    addresses: email,
    To: email,
    From: "alexdanielsantosv@gmail.com",
    Subject: subject ?? "Nuevo mensaje desde NiñezMigrante.org",
    Body: `Correo: ${email}, Mensaje: ${message} ${
      phone
        ? `Telefono: ${phone}, Nombre: ${name}`
        : `Edad: ${age}, Genero: ${gender}, Pais: ${country}`
    }`,
  }).then((message) => console.log(message));

export default sendContactEmail;
