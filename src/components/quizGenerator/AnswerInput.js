import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';

export default function AnswerInput(props) {

    const { answer, isCorrect, answerId } = props

    function onChange(e) {
        props.onAnswerChange(e.target.value, answerId)
    }

    return (
        <div>|{answer}|
            <p className='answerID'>{props.answerId}</p>
            <input
                className="answerInput"
                value={answer}
                placeholder='Wprowadź odpowiedź'
                onChange={onChange}
            ></input>
            <input type='checkbox' className='isAnswerCorrect'
                checked={isCorrect}
            ></input>
        </div>
    )
}
