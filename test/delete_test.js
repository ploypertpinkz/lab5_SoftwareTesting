//inside read_test.js
const assert = require('assert');
const Building = require('../src/building');
let build;

describe('Delete Build details', () => {
    beforeEach((done) => {
        build = new Building({  BuildingFullName: 'Informatics', BuildingName: 'IF' });
        build.save()
            .then(() => done());
      });
    it('removes a builds using its instance', (done) => {
      build.remove()
        .then(() => Building.findOne({ BuildingFullName: 'Informatics' }))
        .then((builds) => {
          assert(builds === null);
          done();
        });
    });
    it('removes multiple builds', (done) => {
      Building.remove({ BuildingFullName: 'Informatics' })
        .then(() => Building.findOne({ BuildingFullName: 'Informatics' }))
        .then((builds) => {
          assert(builds === null);
          done();
        });
    });
  
    it('removes a builds', (done) => {
      Building.findOneAndRemove({  BuildingFullName: 'Informatics' })
        .then(() => Building.findOne({  BuildingFullName: 'Informatics' }))
        .then((builds) => {
          assert(builds === null);
          done();
        });
    });
  
    it('removes a builds using id', (done) => {
      Building.findByIdAndRemove(build._id)
      // the following code block is repeated again and again
        .then(() => Building.findOne({ BuildingFullName: 'Informatics' }))
        .then((builds) => {
          assert(builds === null);
          done();
        });
      })
})