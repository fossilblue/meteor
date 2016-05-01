
Template.notifications.helpers({
  notifications:function(){
    return Notification.find({userId:Meteor.userId(),read:false});
  },
  noticationCount:function(){
    return Notification.find({userID:Meteor.userId(),read:false}).count;
  }
});

Template.notificationItem.helpers({
  notificationPostPath:function(){
    return Router.routes.postPage.path({_id:this.postId});
  }
});

Tempate.notificationItem.events({
  'click a': function(){
    Notification.update(this.id,{$set:{read:true}});

  }
});
