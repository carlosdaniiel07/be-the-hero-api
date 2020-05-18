const request = require('supertest');
const app = require('./../../src/app');
const connection = require('./../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        // Executa as migrations
        // await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });
    
    it('should create a new ONG', async () => {
        const response = await request(app).post('/ongs').send({
            name: 'Teste',
            email: 'teste@email.com',
            whatsapp: '+55 1234-5678',
            city: 'São Paulo',
            uf: 'SP',
        });

        const responseBody = response.body[0];

        expect(response.status).toBe(200);
        expect(responseBody).toHaveProperty('id');
        expect(responseBody.id).toHaveLength(36);
    });
});