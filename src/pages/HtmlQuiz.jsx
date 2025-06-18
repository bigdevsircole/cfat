import Quiz from '../components/Quiz'

const htmlQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Makeup Language"
    ],
    correctAnswer: "Hyper Text Markup Language",
    explanation: "HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages."
  },
  {
    question: "Which HTML element is used to define the title of a document?",
    options: [
      "<head>",
      "<title>",
      "<header>",
      "<h1>"
    ],
    correctAnswer: "<title>",
    explanation: "The <title> element in the head section defines the title of the document that appears in the browser's title bar or tab."
  },
  {
    question: "Which attribute is used to specify that an input field must be filled out?",
    options: [
      "placeholder",
      "required",
      "validate",
      "important"
    ],
    correctAnswer: "required",
    explanation: "The 'required' attribute specifies that an input field must be filled out before submitting the form."
  },
  {
    question: "Which HTML element is used to display a scalar measurement within a known range?",
    options: [
      "<range>",
      "<meter>",
      "<gauge>",
      "<measure>"
    ],
    correctAnswer: "<meter>",
    explanation: "The <meter> tag defines a scalar measurement within a known range, or a fractional value."
  },
  {
    question: "What is the correct HTML for creating a hyperlink?",
    options: [
      "<a>https://example.com</a>",
      "<a href='https://example.com'>Example</a>",
      "<a url='https://example.com'>Example</a>",
      "<link>https://example.com</link>"
    ],
    correctAnswer: "<a href='https://example.com'>Example</a>",
    explanation: "The <a> tag defines a hyperlink, and the href attribute specifies the URL of the page the link goes to."
  },
  {
    question: "Which HTML element is used to specify a header for a document or section?",
    options: [
      "<head>",
      "<header>",
      "<heading>",
      "<h1>"
    ],
    correctAnswer: "<header>",
    explanation: "The <header> element represents a container for introductory content or a set of navigational links."
  },
  {
    question: "Which HTML element is used to define important text?",
    options: [
      "<important>",
      "<b>",
      "<strong>",
      "<i>"
    ],
    correctAnswer: "<strong>",
    explanation: "The <strong> tag is used to define text with strong importance, typically displayed in bold."
  },
  {
    question: "Which HTML element is used to define emphasized text?",
    options: [
      "<em>",
      "<italic>",
      "<i>",
      "<highlight>"
    ],
    correctAnswer: "<em>",
    explanation: "The <em> tag is used to define emphasized text, typically displayed in italic."
  },
  {
    question: "Which HTML element is used to define a paragraph?",
    options: [
      "<para>",
      "<p>",
      "<paragraph>",
      "<pg>"
    ],
    correctAnswer: "<p>",
    explanation: "The <p> tag defines a paragraph in HTML."
  },
  {
    question: "Which HTML element is used to define a line break?",
    options: [
      "<break>",
      "<lb>",
      "<br>",
      "<newline>"
    ],
    correctAnswer: "<br>",
    explanation: "The <br> tag inserts a single line break."
  },
  {
    question: "Which HTML element is used to define an unordered list?",
    options: [
      "<ul>",
      "<ol>",
      "<list>",
      "<li>"
    ],
    correctAnswer: "<ul>",
    explanation: "The <ul> tag defines an unordered (bulleted) list."
  },
  {
    question: "Which HTML element is used to define a table row?",
    options: [
      "<tr>",
      "<td>",
      "<th>",
      "<table-row>"
    ],
    correctAnswer: "<tr>",
    explanation: "The <tr> tag defines a row in an HTML table."
  },
  {
    question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    options: [
      "src",
      "alt",
      "title",
      "longdesc"
    ],
    correctAnswer: "alt",
    explanation: "The alt attribute provides alternative information for an image if a user cannot view it."
  },
  {
    question: "Which HTML element is used to define the structure of an HTML document?",
    options: [
      "<structure>",
      "<body>",
      "<html>",
      "<document>"
    ],
    correctAnswer: "<html>",
    explanation: "The <html> tag is the root element of an HTML page and defines the whole document."
  },
  {
    question: "Which HTML element is used to define a section in a document?",
    options: [
      "<section>",
      "<div>",
      "<span>",
      "<part>"
    ],
    correctAnswer: "<section>",
    explanation: "The <section> tag defines sections in a document, such as chapters, headers, footers, etc."
  },
  {
    question: "Which HTML element is used to define a footer for a document or section?",
    options: [
      "<bottom>",
      "<footer>",
      "<foot>",
      "<end>"
    ],
    correctAnswer: "<footer>",
    explanation: "The <footer> tag defines a footer for a document or section."
  },
  {
    question: "Which HTML element is used to define navigation links?",
    options: [
      "<nav>",
      "<navigate>",
      "<links>",
      "<navigation>"
    ],
    correctAnswer: "<nav>",
    explanation: "The <nav> tag defines a set of navigation links."
  },
  {
    question: "Which HTML element is used to define a clickable button?",
    options: [
      "<button>",
      "<click>",
      "<input type='button'>",
      "<btn>"
    ],
    correctAnswer: "<button>",
    explanation: "The <button> tag defines a clickable button."
  },
  {
    question: "Which HTML element is used to define a drop-down list?",
    options: [
      "<list>",
      "<input type='dropdown'>",
      "<select>",
      "<dropdown>"
    ],
    correctAnswer: "<select>",
    explanation: "The <select> element is used to create a drop-down list."
  },
  {
    question: "Which HTML element is used to define a multi-line text input control?",
    options: [
      "<text>",
      "<input type='text'>",
      "<textarea>",
      "<multiline>"
    ],
    correctAnswer: "<textarea>",
    explanation: "The <textarea> tag defines a multi-line text input control."
  }
]

export default function HtmlQuiz() {
  return <Quiz questions={htmlQuestions} quizName="HTML" />
}