//Template listStartup helpers
Template.ListStartups.helpers({
  'startups': function(){
    return Startups.find({})
  }
})


Template.Startup.events({
  'click .vote-up': function (evt, template) {
    //template has the data with which it was rendered!!!
    var startup_id = template.data._id
    Startups.findOne({ _id: startup_id}).voteUp( Meteor.userId() )
  }
})

