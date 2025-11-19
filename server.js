import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.json({ mensagem: 'Atividade 2 teste! A aplicação está funcionando!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
