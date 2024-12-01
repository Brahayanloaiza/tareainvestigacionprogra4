// index.js
const express = require('express');
const app = express();
const PORT = 3000;

// Datos de personajes
const characters = [
  {
    id: 1,
    name: "Fran Fine",
    occupation: "Niñera",
    description: "Una mujer extravagante que trabaja como niñera para la familia Sheffield."
  },
  {
    id: 2,
    name: "Maxwell Sheffield",
    occupation: "Productor de Broadway",
    description: "El jefe de Fran y un productor teatral exitoso."
  },
  {
    id: 3,
    name: "Niles",
    occupation: "Mayordomo",
    description: "El sarcástico mayordomo de la familia Sheffield."
  },
  {
    id: 4,
    name: "C.C. Babcock",
    occupation: "Socia",
    description: "La socia de negocios de Maxwell y rival de Fran."
  }
];

// Rutas del API
app.get('/', (req, res) => {
  res.send('Bienvenido al API de The Nanny');
});

app.get('/characters', (req, res) => {
  res.json(characters);
});

app.get('/characters/:id', (req, res) => {
  const character = characters.find(c => c.id === parseInt(req.params.id));
  if (!character) {
    return res.status(404).send('Personaje no encontrado');
  }
  res.json(character);
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${3000}`);
});
