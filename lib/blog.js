posts = new Mongo.Collection('posts');

posts.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    },
    remove: function (userId, doc) {
        return !!userId;
    }
});

PostSchema = new SimpleSchema({
    "title": {
        type: String,
        defaultValue: "",
        label: "Post Title"
    },
    "author": {
        type: String,
        defaultValue: " ",
        label: "Author"
    },
    "category": {
        type: String,
        defaultValue: "",
        label: "Category"
    },
    "date": {
        type: String,
        defaultValue: new Date()
    },
    "content": {
        type: String,
        defaultValue: "",
        label: "Post"
    },
    "active": {
        type: Boolean,
        defaultValue: true,
        label: "Status"
    }
});

posts.attachSchema( PostSchema );