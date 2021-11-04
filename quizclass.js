// Create the Quiz Class
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestion() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestion().isCorrectAnswer(answer)) {
            this.score += 10;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

export {Quiz}