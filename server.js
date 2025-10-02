const fastify = require('fastify');

const server = fastify();

const PORT = 4200;
const HOST = '127.0.0.1';

server.listen({ port: PORT, host: HOST })
  .then(() => {
    console.log(`🚀 Servidor Angular rodando em http://${HOST}:${PORT}`);
  })
  .catch(err => {
    console.error('❌ Erro ao iniciar servidor:', err);
    process.exit(1);
  });
