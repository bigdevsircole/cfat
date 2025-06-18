import Quiz from '../components/Quiz'

const javascriptQuestions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: [
      "<javascript>",
      "<scripting>",
      "<script>",
      "<js>"
    ],
    correctAnswer: "<script>",
    explanation: "The <script> tag is used to define a client-side script (JavaScript)."
  },
  {
    question: "What is the correct JavaScript syntax to change the content of the HTML element below? <p id='demo'>This is a demonstration.</p>",
    options: [
      "document.getElementById('demo').innerHTML = 'Hello World!';",
      "document.getElement('p').innerHTML = 'Hello World!';",
      "document.getElementByName('p').innerHTML = 'Hello World!';",
      "#demo.innerHTML = 'Hello World!';"
    ],
    correctAnswer: "document.getElementById('demo').innerHTML = 'Hello World!';",
    explanation: "The correct syntax uses getElementById to select the element and innerHTML to change its content."
  },
  {
    question: "Where is the correct place to insert a JavaScript?",
    options: [
      "Both the <head> section and the <body> section are correct",
      "The <head> section",
      "The <body> section",
      "The <footer> section"
    ],
    correctAnswer: "Both the <head> section and the <body> section are correct",
    explanation: "You can place JavaScript code in both the <head> and <body> sections of an HTML document."
  },
  {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
    options: [
      "<script href='xxx.js'>",
      "<script name='xxx.js'>",
      "<script src='xxx.js'>",
      "<script file='xxx.js'>"
    ],
    correctAnswer: "<script src='xxx.js'>",
    explanation: "The 'src' attribute is used to specify the URL of an external script file."
  },
  {
    question: "How do you write 'Hello World' in an alert box?",
    options: [
      "alertBox('Hello World');",
      "msg('Hello World');",
      "alert('Hello World');",
      "msgBox('Hello World');"
    ],
    correctAnswer: "alert('Hello World');",
    explanation: "The alert() method displays an alert box with a specified message and an OK button."
  },
  {
    question: "How do you create a function in JavaScript?",
    options: [
      "function = myFunction()",
      "function:myFunction()",
      "function myFunction()",
      "create myFunction()"
    ],
    correctAnswer: "function myFunction()",
    explanation: "Functions in JavaScript are defined with the 'function' keyword followed by the name of the function."
  },
  {
    question: "How do you call a function named 'myFunction'?",
    options: [
      "call myFunction()",
      "myFunction()",
      "call function myFunction()",
      "execute myFunction()"
    ],
    correctAnswer: "myFunction()",
    explanation: "Functions are called by using the function name followed by parentheses."
  },
  {
    question: "How to write an IF statement in JavaScript?",
    options: [
      "if i = 5 then",
      "if (i == 5)",
      "if i == 5 then",
      "if i = 5"
    ],
    correctAnswer: "if (i == 5)",
    explanation: "The if statement in JavaScript uses parentheses around the condition."
  },
  {
    question: "How does a WHILE loop start?",
    options: [
      "while (i <= 10; i++)",
      "while i = 1 to 10",
      "while (i <= 10)",
      "while (i <= 10) then"
    ],
    correctAnswer: "while (i <= 10)",
    explanation: "The while loop starts with the 'while' keyword followed by a condition in parentheses."
  },
  {
    question: "How does a FOR loop start?",
    options: [
      "for (i = 0; i <= 5; i++)",
      "for (i = 0; i <= 5)",
      "for i = 1 to 5",
      "for (i <= 5; i++)"
    ],
    correctAnswer: "for (i = 0; i <= 5; i++)",
    explanation: "The for loop has three parts: initialization, condition, and increment."
  },
  {
    question: "What is the correct way to write a JavaScript array?",
    options: [
      "var colors = (1:'red', 2:'green', 3:'blue')",
      "var colors = ['red', 'green', 'blue']",
      "var colors = 'red', 'green', 'blue'",
      "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
    ],
    correctAnswer: "var colors = ['red', 'green', 'blue']",
    explanation: "JavaScript arrays are written with square brackets and elements separated by commas."
  },
  {
    question: "How do you round the number 7.25 to the nearest integer?",
    options: [
      "Math.round(7.25)",
      "round(7.25)",
      "Math.rnd(7.25)",
      "rnd(7.25)"
    ],
    correctAnswer: "Math.round(7.25)",
    explanation: "The Math.round() function returns the value of a number rounded to the nearest integer."
  },
  {
    question: "How do you find the number with the highest value of x and y?",
    options: [
      "Math.max(x, y)",
      "Math.ceil(x, y)",
      "top(x, y)",
      "ceil(x, y)"
    ],
    correctAnswer: "Math.max(x, y)",
    explanation: "The Math.max() function returns the number with the highest value."
  },
  {
    question: "What is the correct JavaScript syntax for opening a new window called 'w2'?",
    options: [
      "w2 = window.open('http://www.example.com');",
      "w2 = window.new('http://www.example.com');",
      "w2 = window.create('http://www.example.com');",
      "w2 = launch('http://www.example.com');"
    ],
    correctAnswer: "w2 = window.open('http://www.example.com');",
    explanation: "The window.open() method opens a new browser window."
  },
  {
    question: "JavaScript is the same as Java.",
    options: [
      "True",
      "False",
      "Sometimes",
      "Depends on the browser"
    ],
    correctAnswer: "False",
    explanation: "JavaScript and Java are completely different languages, both in concept and design."
  },
  {
    question: "How can you detect the client's browser name?",
    options: [
      "navigator.appName",
      "browser.name",
      "client.navName",
      "window.browser"
    ],
    correctAnswer: "navigator.appName",
    explanation: "The navigator.appName property returns the name of the browser."
  },
  {
    question: "Which event occurs when the user clicks on an HTML element?",
    options: [
      "onchange",
      "onclick",
      "onmouseclick",
      "onmouseover"
    ],
    correctAnswer: "onclick",
    explanation: "The onclick event occurs when the user clicks on an element."
  },
  {
    question: "How do you declare a JavaScript variable?",
    options: [
      "variable carName;",
      "v carName;",
      "var carName;",
      "let carName;"
    ],
    correctAnswer: "var carName;",
    explanation: "Variables in JavaScript are declared with the 'var' keyword (or 'let' in modern JavaScript)."
  },
  {
    question: "Which operator is used to assign a value to a variable?",
    options: [
      "*",
      "-",
      "=",
      "x"
    ],
    correctAnswer: "=",
    explanation: "The '=' operator is used to assign values to variables."
  },
  {
    question: "What will the following code return: Boolean(10 > 9)",
    options: [
      "NaN",
      "false",
      "true",
      "1"
    ],
    correctAnswer: "true",
    explanation: "The Boolean() function returns true when the expression evaluates to true."
  }
]

export default function JavaScriptQuiz() {
  return <Quiz questions={javascriptQuestions} quizName="JavaScript" />
}