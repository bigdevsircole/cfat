import { Link } from 'react-router-dom'

export default function QuizHome() {
  return (
    <div className="quiz-home">
      <h1>Welcome to Caleb Frontend Aptitude Test (CFAT)</h1>
      <p>The CFAT aims to test your knowledge of either HTML, CSS, and JavaScript depending on your level of expertise. You can share your final result on social media, tag me and other people you think might need to see it.</p>
      
      <div className="quiz-options">
        <Link to="/html-quiz" className="quiz-card">
          <h2>HTML Quiz</h2>
          <p>20 questions about HTML markup</p>
        </Link>
        
        <Link to="/css-quiz" className="quiz-card">
          <h2>CSS Quiz</h2>
          <p>20 questions about CSS styling</p>
        </Link>
        
        <Link to="/javascript-quiz" className="quiz-card">
          <h2>JavaScript Quiz</h2>
          <p>20 questions about JavaScript programming</p>
        </Link>
      </div>
    </div>
  )
}