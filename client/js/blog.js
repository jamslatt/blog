Template.newPost.events({
    'submit form': function () {
        event.preventDefault();

        let title = $('.pTitle').val();
        let author = $('.pAuthor').val();
        let category = $('.pCategory').val();
        let date = new Date();
        let content = $('.pContent').val();

        posts.insert({
            title: title,
            author: author,
            category: category,
            date: date,
            content: content
        });

        Router.go('/');
    }
});