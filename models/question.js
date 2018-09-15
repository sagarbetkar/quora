const mongoose = require('mongoose')

var questionSchema = new mongoose.Schema({
	ques: String,
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	createdAt: { type: Date, default: Date.now},
  updatedAt: { type: Date, default: Date.now}
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
