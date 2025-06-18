import { Routes, Route } from 'react-router-dom'
import QuizHome from './components/QuizHome'
import HtmlQuiz from './pages/HtmlQuiz'
import CssQuiz from './pages/CssQuiz'
import JavaScriptQuiz from './pages/JavaScriptQuiz'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<QuizHome />} />
        <Route path="/html-quiz" element={<HtmlQuiz />} />
        <Route path="/css-quiz" element={<CssQuiz />} />
        <Route path="/javascript-quiz" element={<JavaScriptQuiz />} />
      </Routes>
    </div>
  )
}

export default App