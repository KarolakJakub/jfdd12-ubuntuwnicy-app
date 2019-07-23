import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';


export default function AnswerInput(props) {
   const { answer, isCorrect, answerId, onCheckboxChange, name, onAnswerChange, onClickRemoveAnswer } = props
   return (
       <div className="answerInputsStyles">
           <TextField
               className="answerInput"
               value={answer}
               placeholder='Wprowadź odpowiedź'
               onChange={onAnswerChange}
               label="Odpowiedź"
               multiline
               variant="outlined"
               answerid={answerId}
               name={answerId}
           ></TextField>
           <Checkbox
               className="isAnswerCorrect"
               color="default"
               iscorrect={'isCorrect'}
               onClick={onCheckboxChange}
               answerid={answerId}
               inputProps={{
                   'aria-label': 'checkbox with default color',
               }}
               checked={isCorrect}
               name={name}
           />
           <button className='removeAnswerButton' name={answerId} onClick={onClickRemoveAnswer} >
               X
           </button>
       </div>
   )
}


