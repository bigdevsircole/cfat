import Quiz from '../components/Quiz'

const cssQuestions = [
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswer: "Cascading Style Sheets",
    explanation: "CSS stands for Cascading Style Sheets, which is used to style and layout web pages."
  },
  {
    question: "Which CSS property is used to change the text color of an element?",
    options: [
      "text-color",
      "font-color",
      "color",
      "text-style"
    ],
    correctAnswer: "color",
    explanation: "The 'color' property is used to set the color of the text."
  },
  {
    question: "Which CSS property controls the text size?",
    options: [
      "text-size",
      "font-size",
      "text-style",
      "size"
    ],
    correctAnswer: "font-size",
    explanation: "The 'font-size' property sets the size of the font."
  },
  {
    question: "How do you add a background color for all <h1> elements?",
    options: [
      "h1 {background-color:#FFFFFF;}",
      "all.h1 {background-color:#FFFFFF;}",
      "h1.all {background-color:#FFFFFF;}",
      "h1 {bgcolor:#FFFFFF;}"
    ],
    correctAnswer: "h1 {background-color:#FFFFFF;}",
    explanation: "The correct syntax is to use the element selector followed by the property in curly braces."
  },
  {
    question: "Which CSS property is used to change the font of an element?",
    options: [
      "font-family",
      "font-style",
      "font-weight",
      "text-font"
    ],
    correctAnswer: "font-family",
    explanation: "The 'font-family' property specifies the font for an element."
  },
  {
    question: "How do you make each word in a text start with a capital letter?",
    options: [
      "text-transform:capitalize",
      "text-transform:uppercase",
      "text-style:capitalize",
      "transform:capitalize"
    ],
    correctAnswer: "text-transform:capitalize",
    explanation: "The 'text-transform: capitalize' property makes each word start with a capital letter."
  },
  {
    question: "Which property is used to change the left margin of an element?",
    options: [
      "margin-left",
      "padding-left",
      "indent",
      "left-margin"
    ],
    correctAnswer: "margin-left",
    explanation: "The 'margin-left' property sets the left margin of an element."
  },
  {
    question: "How do you make a list that lists its items with squares?",
    options: [
      "list-style-type: square;",
      "list-type: square;",
      "list: square;",
      "list-style: square;"
    ],
    correctAnswer: "list-style-type: square;",
    explanation: "The 'list-style-type' property specifies the type of list-item marker."
  },
  {
    question: "Which property is used to change the background color?",
    options: [
      "bgcolor",
      "background-color",
      "color",
      "bg-color"
    ],
    correctAnswer: "background-color",
    explanation: "The 'background-color' property sets the background color of an element."
  },
  {
    question: "Which CSS property is used to specify the space between lines?",
    options: [
      "line-height",
      "line-spacing",
      "spacing",
      "text-space"
    ],
    correctAnswer: "line-height",
    explanation: "The 'line-height' property specifies the height of a line."
  },
  {
    question: "How do you display hyperlinks without an underline?",
    options: [
      "a {text-decoration:none;}",
      "a {decoration:no-underline;}",
      "a {underline:none;}",
      "a {text-decoration:no-underline;}"
    ],
    correctAnswer: "a {text-decoration:none;}",
    explanation: "The 'text-decoration: none' property removes the underline from links."
  },
  {
    question: "Which property is used to change the text color of an element?",
    options: [
      "text-color",
      "color",
      "fgcolor",
      "font-color"
    ],
    correctAnswer: "color",
    explanation: "The 'color' property is used to set the color of the text."
  },
  {
    question: "Which CSS property controls the text alignment?",
    options: [
      "text-align",
      "text-position",
      "align-text",
      "text-justify"
    ],
    correctAnswer: "text-align",
    explanation: "The 'text-align' property specifies the horizontal alignment of text."
  },
  {
    question: "How do you make the text bold?",
    options: [
      "font-weight:bold;",
      "style:bold;",
      "font:bold;",
      "text-style:bold;"
    ],
    correctAnswer: "font-weight:bold;",
    explanation: "The 'font-weight' property sets how thick or thin characters in text should be displayed."
  },
  {
    question: "Which property is used to add space inside an element's border?",
    options: [
      "margin",
      "spacing",
      "padding",
      "border-space"
    ],
    correctAnswer: "padding",
    explanation: "The 'padding' property generates space around an element's content, inside any defined borders."
  },
  {
    question: "Which property is used to add space outside an element's border?",
    options: [
      "margin",
      "spacing",
      "padding",
      "border-space"
    ],
    correctAnswer: "margin",
    explanation: "The 'margin' property sets the margins for an element, creating space outside the border."
  },
  {
    question: "How do you select an element with id 'demo'?",
    options: [
      ".demo",
      "#demo",
      "demo",
      "*demo"
    ],
    correctAnswer: "#demo",
    explanation: "The '#' selector is used to select elements with a specific id."
  },
  {
    question: "How do you select elements with class name 'test'?",
    options: [
      "*test",
      ".test",
      "#test",
      "test"
    ],
    correctAnswer: ".test",
    explanation: "The '.' selector is used to select elements with a specific class."
  },
  {
    question: "Which property is used to change the width of a border?",
    options: [
      "border-width",
      "border-size",
      "width",
      "border"
    ],
    correctAnswer: "border-width",
    explanation: "The 'border-width' property sets the width of an element's border."
  },
  {
    question: "How do you make a rounded corner border?",
    options: [
      "border-radius",
      "border-round",
      "corner-radius",
      "round-border"
    ],
    correctAnswer: "border-radius",
    explanation: "The 'border-radius' property defines the radius of the element's corners."
  }
]

export default function CssQuiz() {
  return <Quiz questions={cssQuestions} quizName="CSS" />
}