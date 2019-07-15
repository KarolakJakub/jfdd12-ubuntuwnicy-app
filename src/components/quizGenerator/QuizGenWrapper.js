import React, { useState, useEffect } from 'react'
import './QuizGenWrapperStyles.css'

import QuizTitleInput from './QuizTitleInput';
import AnswersList from './AnswersList'
import QuestionInput from './QuestionInput'
import AddAnswerButton from './AddAnswerButton'
import AddQuestionButton from './AddQuestionButton'
import { DeleteQuestionButton } from './DeleteQuestionButton';
import { GetQuiz } from '../services/quizService'

let fetchedQuestions = []

let answersArr1 = [
    { id: 1, answer: 'aaa', isCorrect: false, isHighlighted: false },
    { id: 2, answer: 'bbb', isCorrect: true, isHighlighted: false },
    { id: 3, answer: 'ccc', isCorrect: false, isHighlighted: false },

]

const post = [
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

export function QuizGenWrapper(props) {
    const questionsMap = {
        "1": {
            id: 1,
            question: 'tresc pytania',
            answers: [
                {
                    id: 'A', answer: 'AAA', isCorrect: false,
                },
                {
                    id: 'B', answer: 'BBB', isCorrect: false
                },
                {
                    id: 'C', answer: 'adsasdsCCC', isCorrect: false
                },
            ],
        }
    };

    const [fetchedQuestionsState, setFetchedQuestion] = useState(fetchedQuestions)
    const [questions, setQuestions] = useState(questionsMap);

    useEffect(() => {

        GetQuiz().then(res => setFetchedQuestion(res))

    }, [])



    function onQuestionChange(e) {
        const questionId = +e.target.name;
        setQuestions({
            ...questions,
            [questionId]: {
                ...questions[questionId],
                question: e.target.value,
            }
        });
    }

    function onAnswerAdd(props) {

        debugger

        const { questionId } = props

        const newFetchedQuestions = fetchedQuestionsState[questionId].answers

        setFetchedQuestion(
            newFetchedQuestions.push({ id: 'D', answerBody: '' }))
    }

    function addQuestion() {
        const newQuestion = {
            id: questions.length + 1,
            question: '',
            answers: [
                {
                    id: 'A', answer: 'dwadziescia', isCorrect: false,
                },
                {
                    id: 'B', answer: '', isCorrect: false
                },
                {
                    id: 'C', answer: '', isCorrect: false
                },
            ],
            correctAnswerId: 'A',
        }
        setQuestions({
            ...questions,
            newQuestion,
        });
    }


    return (
        <div className='quizGenWrapper'>
            <h1 className='quizGenHeader'>STWÓRZ QUIZ</h1>
            <QuizTitleInput />
            {
                Object.values(fetchedQuestionsState).map((question, index) =>
                    <div key={question.id} className={"quizGenInputs"}>
                        <QuestionInput question={question} onQuestionChange={onQuestionChange} />
                        <AnswersList question={question} questionId={index} />
                        <div className="quizButtons">
                            <AddAnswerButton onClick={onAnswerAdd} questionId={index}></AddAnswerButton>
                            <AddQuestionButton onClick={addQuestion} questionId={index} />
                            <DeleteQuestionButton />
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default QuizGenWrapper