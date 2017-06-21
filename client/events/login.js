// Login Logic
Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=loginPassword]').val();
        Meteor.loginWithPassword(email, password);
    }
});
