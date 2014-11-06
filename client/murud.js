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

Template.AddStartup.events({
  'click .save': function (evt, template) {
    evt.preventDefault()
    name = template.find('input[name=name]').value
    descr = template.find('input[name=descr]').value

    //could be a collection method, but lets see that from client
    //we can use the DB API
    Startups.insert({ name:name, description: descr, votes_up: [], image_src: "http://lorempixel.com/400/200/technics/"});
    Router.go('/')
  }
})

Template.Home.events({
  'click .add-startup': function (evt, template) {
    evt.preventDefault
    Router.go('/add')
  }
})