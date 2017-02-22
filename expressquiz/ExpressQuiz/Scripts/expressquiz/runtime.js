var ExpressQuiz;
(function (ExpressQuiz) {
    var Runtime = (function () {
        function Runtime(quiz) {
            this.quiz = quiz;
            this.userAnswers = [];
            this.currentQuestionIndex = 0;
            for (var i = 0; i < quiz.Questions.length; i++) {
                this.userAnswers[i] = new ExpressQuiz.UserAnswer(quiz.Questions[i].QuestionId, undefined, undefined);
            }
        }
        Runtime.prototype.setActiveQuestion = function (index) {
            //if (this.quiz.Questions[index] === undefined) {
            //    throw "index out of range";
            //}
            this.currentQuestionIndex = index;
            // return this.quiz.Questions[index];
        };
        Runtime.prototype.getActiveQuestion = function (index) {
            return this.quiz.Questions[index];
        };
        Runtime.prototype.setAnswer = function (index, answer, input) {
            var q = this.quiz.Questions[index];
            var userAnswer;
            if (answer === undefined || answer === 999) {
                userAnswer = new ExpressQuiz.UserAnswer(q.QuestionId, undefined, input);
            }
            else {
                // answer is text sometimes
                var a = q.Answers[answer];
                userAnswer = new ExpressQuiz.UserAnswer(q.QuestionId, a.AnswerId, input);
            }
            this.userAnswers[index] = userAnswer;
        };
        Runtime.prototype.getAnswer = function (index) {
            return this.userAnswers[index].answerId;
        };
        Runtime.prototype.getAnswerInput = function (index) {
            return this.userAnswers[index];
        };
        Runtime.prototype.getProgress = function () {
            var qCount = this.quiz.Questions.length;
            var answered = 0;
            for (var i = 0; i < qCount; i++) {
                if (this.userAnswers[i].answerId !== undefined) {
                    answered++;
                }
            }
            return {
                total: qCount, answered: answered
            };
        };
        Runtime.prototype.getResult = function () {
            return this.userAnswers;
        };
        return Runtime;
    }());
    ExpressQuiz.Runtime = Runtime;
})(ExpressQuiz || (ExpressQuiz = {}));
//# sourceMappingURL=runtime.js.map