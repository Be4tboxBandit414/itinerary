module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('index.ejs');
  });

  app.get('/chat', function(req, res) {
    res.render('chat.ejs');
  });

  app.get('/register', function(req, res) {
    res.render('registration.ejs');
  });

};
