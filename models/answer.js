const mongoose = require('mongoose')

var answerSchema = new mongoose.Schema({
	question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
	answer: String,
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	createdAt: { type: Date, default: Date.now},
  modifiedAt: { type: Date, default: Date.now}
})

var Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
