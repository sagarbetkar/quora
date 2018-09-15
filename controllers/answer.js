const Answers = require('../models/answer')

exports.getAllAnswers = (request, response) => {
  var query = Answers.find();
  console.log(request.query);
  query.exec((error, answers) => {
    if (error)
      response.json({
        error: error,
        status: 500
      });
    if (anwsers) {
      response.json({
        data: answers,
        message: "All answers fetched",
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

exports.postNewAnswer = (request, response) => {
  console.log(request.body);
  let {
    question,
    answer,
    user,
    createdAt,
    modifiedAt
  } = request.body;

  var ans = new Ans({
    question,
    answer,
    user,
    createdAt,
    modifiedAt
  });
  answer.save().then((ans) => {
    console.log('Answer Added');
    response.json({
      message: "Added successfully",
      status: 200
    });
  }).catch(function(err) {
    if (err) {
      console.log(err);
      response.json({
        message: 'Server error',
        status: 500
      });
    }
  });
};

exports.updateAnswerById = (request, response) => {
  const {
    question,
    answer,
    user
  } = request.body;
  Answer.update({
    _id: request.params.id
  }, {
    question,
    answer,
    user
  }, {}, (error, answer) => {
    if (error)
      response.json({
        error: error,
        status: 500
      });
    console.log(error);
    response.json(answer);
  });
};

exports.deleteAnswerById = (request, response) => {
  Answers.findOneAndDelete({
    _id: request.params.id
  }, (error, delAnswer) => {
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
