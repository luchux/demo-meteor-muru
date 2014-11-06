Startups = new Mongo.Collection("startups")

Startups.helpers({

    //retrieves amount of votes up for this startup
    votesUp: function () {
        return this.votes_up.length
    },

    //user_id is voting up the startup
    voteUp: function (user_id) {
        Startups.update(
            { _id: this._id},
            { $addToSet: { votes_up: user_id } } //Only adds if doesn't exist in the list
        );
    },

})