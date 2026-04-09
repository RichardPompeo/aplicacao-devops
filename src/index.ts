import express from 'express'

const app = express()
const PORT = 3000

const data = {
  integrantes: [
    { nome: 'Richard Pompeo' },
    { nome: 'Gustavo Angelo' },
    { nome: 'Henrique Ferraz' }
  ]
}

app.get('/', (req, res) => {
  res.sendFile('views/index.html', { root: __dirname })
})

app.get('/integrantes', (req, res) => {
  res.json(data)
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
