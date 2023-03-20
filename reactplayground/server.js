const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000!');
});

const React = require('react');
const ReactDOMServer = require('react-dom/server');
const MeuComponente = require('./MeuComponente.jsx').default;

app.get('/', (req, res) => {
  const html = ReactDOMServer.renderToString(<MeuComponente />);
  res.send(`
    <html>
      <head>
        <title>Meu projeto</title>
      </head>
      <body>
        <div id="app">${html}</div>
      </body>
    </html>
  `);
});
