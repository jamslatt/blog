Template.newPost.events({
    'submit form': function () {
        event.preventDefault();

        let title = $('.pTitle').val();
        let author = Meteor.user().emails[0].address;
        let category = $('.pCategory').val();
        let date = new Date().toISOString().slice(0,10);
        let active = true;
        let content = $('.pContent').val();

        posts.insert({
            title: title,
            active: true,
            author: author,
            category: category,
            date: date,
            content: content
        });

        Router.go('/');
    }
});

Template.post.helpers({
   'post_feed' : function () {
       return posts.find({ active: true });
   }
});

Template.home.events({
    'click .delPost' : function () {
       posts.update(this._id, {
           $set: {active: false}
       })
    }
});