categories = new Mongo.Collection('categories');

categories.allow({
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

CategorySchema = new SimpleSchema({
    "categoryName": {
        type: String,
        label: "Category Name"
    },
    "color": {
        type: String,
        label: "Hex Color"
    },
    "desc": {
        type: String,
        label: "Category Description"
    }
});


categories.attachSchema( CategorySchema );