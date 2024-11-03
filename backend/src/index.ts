import Fastify from 'fastify';

const fastify = Fastify({
    logger: true,
});

// Registra rotte e plugin (eventualmente)
fastify.register(import('./routes/exampleRoute'));

// Avvia il server
const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
        console.log('Server listening on http://localhost:3000');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();