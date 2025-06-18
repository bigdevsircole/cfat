import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Quiz({ questions, quizName }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState([])
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const navigate = useNavigate()

  const handleAnswerOption = (answer) => {
    const newSelectedOptions = [...selectedOptions]
    newSelectedOptions[currentQuestion] = answer
    setSelectedOptions(newSelectedOptions)
    
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
    
    setShowAnswer(true)
  }

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
    setShowAnswer(false)
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedOptions([])
    setScore(0)
    setShowScore(false)
    setShowAnswer(false)
  }

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Your {quizName} Quiz Results</h2>
          <p>You scored {score} out of {questions.length}</p>
          <p>Percentage: {Math.round((score / questions.length) * 100)}%</p>
          <div className="button-group">
            <button onClick={handleRestart}>Retake Quiz</button>
            <button onClick={() => navigate('/')}>Back to Home</button>
          </div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOption(option)}
                disabled={showAnswer}
                className={
                  showAnswer
                    ? option === questions[currentQuestion].correctAnswer
                      ? 'correct'
                      : selectedOptions[currentQuestion] === option
                      ? 'incorrect'
                      : ''
                    : ''
                }
              >
                {option}
                {showAnswer && option === questions[currentQuestion].correctAnswer && (
                  <span className="correct-marker"> ✓</span>
                )}
                {showAnswer && 
                  selectedOptions[currentQuestion] === option && 
                  option !== questions[currentQuestion].correctAnswer && (
                  <span className="incorrect-marker"> ✗</span>
                )}
              </button>
            ))}
          </div>
          {showAnswer && (
            <div className="explanation">
              <p><strong>Explanation:</strong> {questions[currentQuestion].explanation}</p>
              <button onClick={handleNextQuestion} className="next-button">
                {currentQuestion + 1 === questions.length ? 'See Results' : 'Next Question'}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  )
}