const assert = require('assert');
const Building = require('../src/building'); 
describe('Creating documents', () => {
    it('creates a building', (done) => {

        const build = new Building({ BuildingFullName: 'Informatics', BuildingName: 'IF' });
        build.save() 
            .then(() => {
                assert(!build.isNew); 
                done();
            });
    });
});