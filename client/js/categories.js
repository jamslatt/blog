Template.new_category.events({
   'submit form': function () {
       event.preventDefault();

       var categoryName = $('.catName').val();
       var categoryColor = $('.catColor').val();
       var categoryDesc = $('.catDesc').val();


       categories.insert({
           categoryName: categoryName,
           color: categoryColor,
           desc: categoryDesc
       });
       Router.go('/c/all');
   }
});

Template.c_all.helpers({
   'categories': function () {
       return categories.find({});
   }
});

Template.admin.helpers({
    'categories': function () {
        return categories.find({});
    }
});

Template.newPost.helpers({
    'categories': function () {
        return categories.find({});
    }
});