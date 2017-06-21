Router.configure({
    layoutTemplate: 'base',
    notFoundTemplate: '404'
});

// URL Routes
Router.route('/', function() {
    this.render('home');
    Router.onAfterAction(function() {
        document.title = "Simple Blog"
    });
});
Router.route('/c/all', function() {
    this.render('c_all');
    Router.onAfterAction(function() {
        document.title = "Simple Blog - Categories"
    });
});
Router.route('/login', function() {
    this.render('login');
    Router.onAfterAction(function() {
        document.title = "Simple Blog - Login"
    });
});
Router.route('/admin', function() {
    this.render('admin');
    Router.onAfterAction(function() {
        document.title = "Simple Blog - Admin"
    });
});
Router.route('/p/new', function() {
    this.render('newPost');
    Router.onAfterAction(function() {
        document.title = "Simple Blog - New Post"
    });
});