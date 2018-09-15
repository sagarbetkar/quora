var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const userController = require('./controllers/users');
const questionController = require('./controllers/question');
const answerController = require('./controllers/answer');
/*const statController = require('./controllers/stat');*/
const blogController = require('./controllers/blog');
/*const pageController = require('./controllers/page');*/

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

mongoose.connect('mongodb://localhost:27017/quora');
mongoose.connection.on('error', (error) => console.error(error));
mongoose.connection.on('open', () => console.log("success in connecting to mongodb"));

app.get('/api/v1/users', userController.getAllUsers);
app.get('/api/v1/users/:id', userController.getUserById);
app.post('/api/v1/users', userController.postNewUser);
app.put('/api/v1/users/:id', userController.updateUserById);
app.delete('/api/v1/users/:id', userController.deleteUserById);

app.get('/api/v1/questions', questionController.getAllQuestions);
app.post('/api/v1/questions', questionController.postNewQuestion);
app.put('/api/v1/questions/:id',questionController.updateQuestionById);
app.delete('/api/v1/questions/:id', questionController.deleteQuestionById);

app.get('/api/v1/answers',answerController.getAllAnswers);
app.post('/api/v1/answers', answerController.postNewAnswer);
app.put('/api/v1/answers/:id', answerController.updateAnswerById);
app.delete('/api/v1/answers/:id', answerController.deleteAnswerById);

/*app.get('/api/v1/stats',statController.getAllStats);
app.post('/api/v1/stats', statController.postNewStat);
app.put('/api/v1/stats/:id', statController.updateStatById);
app.delete('/api/v1/stats/:id', statController.delStatById);*/

app.get('/api/v1/blogs',blogController.getAllBlogs);
app.get('/api/v1/blogs/:id',blogController.getBlogById);
app.post('/api/v1/blogs', blogController.postNewBlog);
app.put('/api/v1/blogs/:id', blogController.updateBlogById);
app.delete('/api/v1/blogs/:id', blogController.deleteBlogById);

module.exports = app;

app.listen(3000, () => console.log('Express server at 3000'));
