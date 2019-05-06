const assert = require('assert');
const Building = require('../src/building');
describe('Deleting a Building', () => {

  let build;

  beforeEach((done) => {
    build = new Building({  BuildingFullName: 'Informatics', BuildingName: 'IF' });
    build.save()
        .then(() => done());
  });
  
  function assertHelper(statement, done) {
    statement
     .then(() => Building.find({}))
     .then((builds) => {
      assert(builds.length === 1);
      assert(builds[0].BuildingFullName === 'InformaticsU');
      done();
    });
  }
  
  it('sets and saves Building using an instance', (done) => {
    build.set('BuildingFullName', 'InformaticsU'); //not updated in mongodb yet
    assertHelper(build.save(), done);
   });
 
  it('update Building using instance', (done) => {
    //useful to update multiple fields of the object
    assertHelper(build.update({ BuildingFullName: 'InformaticsU' }), done);
  });

  it('update all matching Building using model', (done) => {
    assertHelper(Building.update({ BuildingFullName: 'Informatics' }, { BuildingFullName: 'InformaticsU' }), done);
  });

  it('update one Building using model', (done) => {
    assertHelper(Building.findOneAndUpdate({ BuildingFullName: 'Informatics' }, { BuildingFullName: 'InformaticsU' }), done);
  });

  it('update one pokemon with id using model', (done) => {
    assertHelper(Building.findByIdAndUpdate(build._id, { BuildingFullName: 'InformaticsU' }), done);
  });
});