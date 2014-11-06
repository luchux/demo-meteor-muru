//FIXTURE to load data in the database on startup server
Meteor.startup(function () {
    // code to run on server at startup

    //Fixture to initialize some startups
    if (Startups.find().count() === 0) {
      Startups.insert({
        name: "FanFuel",
        description: "37 billion dollars Sponsorship market, as easy as buying facebook ads!",
        image_src: "http://awesomefriday.ca/wp-content/uploads/2013/04/fry-bender.jpg",
      })
    }
  });