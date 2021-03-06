﻿


module ExpressQuiz {

    export class Runtime {
        private userAnswers: Array<UserAnswer>
        private currentQuestionIndex: number;

        constructor(public quiz: any) {
            this.userAnswers = [];
            this.currentQuestionIndex = 0;
            for (var i = 0; i < quiz.Questions.length; i++) {
                this.userAnswers[i] = new UserAnswer(quiz.Questions[i].QuestionId, undefined, undefined);
            }
        }



        setActiveQuestion(index: number) {


            //if (this.quiz.Questions[index] === undefined) {
            //    throw "index out of range";
            //}
            this.currentQuestionIndex = index;
            // return this.quiz.Questions[index];
        }

        getActiveQuestion(index: number) {

            return this.quiz.Questions[index];
        }

        setAnswer(index: number, answer: number, input: string) {

            var q = this.quiz.Questions[index];
            var userAnswer;
            if (answer === undefined || answer === 999) {
                userAnswer = new UserAnswer(q.QuestionId, undefined, input);
            } else {
                // answer is text sometimes

                var a = q.Answers[answer];
                userAnswer = new UserAnswer(q.QuestionId, a.AnswerId, input);
            }

            this.userAnswers[index] = userAnswer;
        }

        getAnswer(index: number) {

            return this.userAnswers[index].answerId;
        }

        getAnswerInput(index: number) {
            return this.userAnswers[index];
        }

        getProgress() {
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
        }

        getResult(): any {
            return this.userAnswers;
        }
    }
}

