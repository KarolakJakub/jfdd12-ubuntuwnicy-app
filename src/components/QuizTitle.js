import React from "react";
import styles from "./QuizTitle.module.css";
import { stringLiteral } from "@babel/types";

const Question = <p className={styles.currentQuestion}>OBECNE PYTANIE</p>;

const Answer = ({ answer }) => (
  <li className={styles.possibleAnswer}>
    <button className={styles.button}>{answer.id}</button> | {answer.answerBody}
  </li>
);

const Timer = (
  <div>
    <div className={styles.quizTimer}>00:00</div>
  </div>
);

// const arrowButton = () => (
//   console.log(this.props),
//   <div onClick={this.props.clicked}><img
//   className={styles.arrowImage}
//   src="data:image/jpeg;base64,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"
// />
// </div>
// );

// Arrow.right, Arrow.left this.state +1 -1

export class QuizTitle extends React.Component {
  state = {
    currentQuestion: 0,
    questions: [
      {
        question: "Ile kol ma samochod",
        answers: [
          {
            id: "A",
            answerBody: "jeden"
          },
          {
            id: "B",
            answerBody: "jeden"
          },
          {
            id: "C",
            answerBody: "jeden"
          }
        ],
        correctAnswer: "A"
      },
      {
        question: "Ile kol ma kot",
        answers: [
          {
            id: "A",
            answerBody: "Pytanie pierwsze"
          },
          {
            id: "B",
            answerBody: "Pytanie drugie"
          },
          {
            id: "C",
            answerBody: "Pytanie trzecie"
          },
          {
            id: "D",
            answerBody: "Pytanie czwarte"
          }
        ],
        correctAnswer: "A"
      }
    ]
  };

  increment = () => {
    this.setState({
      page: this.state.page + 1
    });
  };

  render() {
    const { page } = this.state;
    return (
      <div click={this.clicked} className={styles.quizTitles}>
        <div className={styles.questionCard}>
          <div>
            <h1 className={styles.quizName}>
              {this.state.questions[this.state.currentQuestion].question}
            </h1>
            {Timer}
            {Question}
          </div>
          <div className={styles.answerWrapper}>
            <ul className={styles.answer}>
              {this.state.questions[this.state.currentQuestion].answers.map(
                answer => (
                  <Answer key={answer.id} answer={answer} />
                )
              )}
            </ul>
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <div className={styles.arrowImageBox}>
            <img
              className={styles.arrowImage}
              onClick={() =>
                this.state.currentQuestion === 0
                  ? this.state.currentQuestion
                  : this.setState({
                      currentQuestion: this.state.currentQuestion - 1
                    })
              }
              src="https://cdn3.iconfinder.com/data/icons/line/36/arrow_left-512.png"
            />
          </div>
          <div className={styles.arrowImageBox}>
            <img
              className={styles.arrowImage}
              onClick={() =>
                this.state.currentQuestion === this.state.questions.length - 1
                  ? this.state.currentQuestion
                  : this.setState({
                      currentQuestion: this.state.currentQuestion + 1
                    })
              }
              src="https://cdn3.iconfinder.com/data/icons/line/36/arrow_right-512.png"
            />
          </div>
        </div>
      </div>
    );
  }
}
