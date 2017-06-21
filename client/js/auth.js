// Login Logic
Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=loginPassword]').val();
        Meteor.loginWithPassword(email, password);
    }
});

Template.admin.events({
    'submit form' : function(e, t) {
        e.preventDefault();
        var email = t.find('[name=regEmail]').value
            , password = t.find('[name=regPassword]').value;


        // add logic

        Accounts.createUser({email: email, password : password}, function(err){
            if (err) {
                console.log(err);
            } else {
                console.log("Logged in.");
                location.replace("/");
            }

        });
    }
});