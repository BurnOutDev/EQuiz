var ExpressQuiz;
(function (ExpressQuiz) {
    var UserAnswer = (function () {
        function UserAnswer(questionId, answerId, value) {
            this.questionId = questionId;
            this.answerId = answerId;
            this.value = value;
        }
        return UserAnswer;
    }());
    ExpressQuiz.UserAnswer = UserAnswer;
})(ExpressQuiz || (ExpressQuiz = {}));
//# sourceMappingURL=useranswer.js.map