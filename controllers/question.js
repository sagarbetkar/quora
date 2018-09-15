const Questions = require('../models/question')

exports.getAllQuestions = (request, response) => {
    var query = Questions.find()
    console.log(request.query)
    query.exec((error, questions) => {
        if (error) {
          response.json({
              error: error,
              status: 500
          });
        }
        if (questions) {
          response.json ({
            data: questions,
            message: "All questions fetched",
            status: 200
          });
        } else {
          response.json({
            message: "No data found",
            status: 200
          });
        }
    });
};

exports.postNewQuestion = (request, response) => {
    let {
      ques,
    	user,
    	createdAt,
      updatedAt
    } = request.body;

    var question = new Question({
      ques,
    	user,
    	createdAt,
      updatedAt
    });
    question.save().then((question) => {
        console.log('Question Added');
        response.json({
          message: "Added successfully",
          status: 200
        });
    }).catch(function (err) {
      if (err) {
        console.log(err);
        response.json({
          message: 'Server error',
          status: 500
        });
      }
    });
};

exports.updateQuestionById = (request, response) => {
  const {
    ques,
    user
  } = request.body;
  Question.update({
    _id: request.params.id
  }, {
    ques,
    user
  }, {}, (error, question) => {
    if (error)
      response.json({
        error: error,
        status: 500
      });
    console.log(error);
    response.json(question);
  });
};

exports.deleteQuestionById = (request, response) => {
  Questions.findOneAndDelete({
    _id: request.params.id
  }, (error, deleteQuestion) => {
    if (error)
      response.json({
        error: error,
        status: 500
      });
    response.json({
      message: "deleted successfully"
    });
  });
};
