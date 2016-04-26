Template.meteorErrors.helpers({
  error: function(){
      return Errors.collection.find();
  }
});

Template.meteorError.onRendered(function(){
  var error = this.data;
  Meteor.setTimeout(function(){
     Errors.collection.remove(error._id);
  }, 3000);
});
