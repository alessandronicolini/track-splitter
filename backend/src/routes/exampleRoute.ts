import { FastifyInstance, RouteShorthandOptions } from 'fastify';

export default async function (fastify: FastifyInstance) {
    const opts: RouteShorthandOptions = {
        schema: {
            response: {
                200: {
                    type: 'object',
                    properties: {
                        hello: { type: 'string' }
                    }
                }
            }
        }
    };

    fastify.get('/hello', opts, async (request, reply) => {
        return { hello: 'world, vai a cagare!' };
    });
}
