const uuid = require('./../../src/utils/uuid');

describe('Generate UUID (v4)', () => {
    it('should generate a unique ID (uuid)', () => {
        const uniqueId = uuid.generate();

        expect(uniqueId).toHaveLength(36);
    });
});