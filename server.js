const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Usuários fixos (simples)
const users = [
  { username: 'aluno', password: '1234' },
  { username: 'duelte', password: '1234' }
];

// Lista de vídeos
const videos = [
  { title: 'Aula 1 - Introdução', url: 'https://www.youtube.com/watch?v=u4XcUVXQrlw' },
  { title: 'Aula 2 - HTML Básico', url: 'https://www.youtube.com/watch?v=ITE-0WQOfnc' },
  { title: 'Aula 3 - HTML Básico', url: 'https://www.youtube.com/watch?v=u4XcUVXQrlw' }
];

// Login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Rota protegida de vídeos
app.get('/videos', (req, res) => {
  res.json(videos);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Servidor rodando'));