//Template listStartup helpers
Template.ListStartups.helpers({
  'startups': function(){
    return Startups.find({})
  }
})

