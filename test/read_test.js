const assert = require('assert');
const Building = require('../src/building');
let build;

describe('Reading building details', () => {
    beforeEach((done) => {
      build = new Building({  BuildingFullName: 'Informatics', BuildingName: 'IF' });
      build.save()
          .then(() => done());
    });
    it('finds building with the fullname of build', (done) => {
        Building.findOne({ BuildingFullName: 'Informatics' })
            .then((builds) => {
                assert(build.BuildingFullName === 'Informatics'); 
                done();
            });
    })
})