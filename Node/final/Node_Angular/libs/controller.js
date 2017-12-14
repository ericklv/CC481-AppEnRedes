module.exports = app => {

  // Imports
  const Post = require('../models/Post');
  const user = require('../models/User');
  var bcrypt = require('bcrypt');
  var jwt = require('jsonwebtoken');
  var bcrypt = require('bcrypt');
  //var multer = require('multer');


  app.get('/', (req, res) => {
    //sort({"education":1})
    Post.find({}).sort({time:-1}).then(posts => {
      res.render('index', {posts});
    })
  })

  app.get('/write', (req, res) => res.render('write'));

  app.get('/login', (req, res) => res.render('login'));

  app.post('/login',function(req, res){
    console.log('POST LOGIN ' + req.body.id);
    if(req.body.id.length > 0){

      user.findOne({id: req.body.id}, (err, item)=>{
        if(item == null){
          res.redirect('/login');
        }
        if(item){
          if(bcrypt.compareSync(req.body.password, item.password)){

            Post.find({creator: item.id}, (error, pstf)=>{
              if(error){
                  res.redirect('/login');
                }
                console.log('Se han encontrado'+ pstf.length);
                res.render('signed', {psts: pstf, login: item.id});
            });
          }
          else{
              res.redirect('/login');
          }
        }
      }); 
    }
    else{
      req.session.errors = JSON.parse('[{ "msg" : "Invalid User"}]');
      res.redirect('/login');
    }
});


  app.get('/register', (req, res) => res.render('register'));

  app.post('/register', function(req, res, next){

  var newUser = new user(req.body);
  newUser.password = bcrypt.hashSync(req.body.password, 10);
  newUser.save( (err, user)=>{
    if(err){
      return res.status(400).send({
        message: err
      });
    } else{
      user.password = bcrypt.hashSync(req.body.password, 10);
      user.token = req.body.password;
      //req.session.user = req.body.id;
      //req.session.success = true;
      res.redirect('/login');
    }
  });

});

  app.get('/article/:title', (req, res) => {
    let title = req.params.title;
    Post.findOne({title: title}).then(post => {
      res.render('article', {post});
    }).catch(err => console.log('Error getting the article'));

  });

app.post('/create', (req, res) => {

    if (req.files) {
        let file = req.files.image;
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            let post = new Post({ title: req.body.title, image: req.files.image.name, content: req.body.content, creator: req.body.name })
            file.mv(`./public/assets/uploads/${file.name}`, err => console.log(err ? 'Error on save the image!' : 'Image Uploaded!'));
            post.save().then(() => {
              console.log('Post Saved!');
              res.redirect('/');
            }).catch(err => console.log(err));
        } // Finish mimetype statement
    } else {
      console.log('You must Upload a image-post!');
      res.redirect('/article');
    }
}); // Finish all

} // Finish module
