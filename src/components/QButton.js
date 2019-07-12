import React from "react";
import styles from "./QuizTitle.module.css";
import { BrowserRouter, Route, Link } from "react-router-dom";

export function QButton(props) {
  const { question, onClickQButton, alink, onClick } = props;
  const { id } = question;

  return (
    <Link to={`/quiz-title/${alink}`}>
      <button className={styles.buttonQuestion} onClick={onClick}>
        {id}
      </button>
    </Link>
  );
}
