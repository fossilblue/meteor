// Write your tests here!
// Here is an example.
Tinytest.add("Errors - collection", function (test) {
  test.equal(Errors.find({}).count(), 0);
  Errors.throw('A new error!');
  test.equals(Errors.find({}).count(),1);
  Errors.collection.remove({});


});

Tinytest.addAsync("Errors - Template",function(test,done){
  Errors.throw('A new Error!');
  test.equal(Error.collection.find({}).count(),1);
  Template.insert(Template.render(Template.meteorErrors),document.body);
  Meteor.Match.setTimeout(function(){
     test.equal(Error.collection.find({}).count(),0);
     done();
  }, 3000);
  


});
