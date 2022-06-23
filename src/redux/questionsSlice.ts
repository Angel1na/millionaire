import { createSlice } from '@reduxjs/toolkit'; // PayloadAction

// Define a type for the slice state
interface AnswerI {
  id: number,
  answer: string | number,
}

// Define a type for the slice state
interface QuestionI {
  id: number,
  question: string,
  correctAnswerIndex: number,
  answers: AnswerI[],
}

// Define a type for the slice state
interface QuestionsState {
  currentQuestionIndex: number,
  currentQuestion: QuestionI | null,
  totalScore: number | null,
  isGameOver: boolean | null,
  numberOfQuestion: number,
  scores: number[],
  questions: QuestionI[]
}

// Define the initial state using that type
const initialState: QuestionsState = {
  currentQuestionIndex: -1,
  currentQuestion: null,
  totalScore: null,
  isGameOver: null,
  numberOfQuestion: 12,
  scores: [500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000],
  questions: [
    {
      "question": "Which event from the following occurs more often? ",
      "correctAnswerIndex": 3,
      "id": 1,
      "answers": [
        { "answer": "One child is born in the world", "id": 1 },
        { "answer": "New star lights up in space", "id": 2 },
        { "answer": "You blink", "id": 3 },
        { "answer": "New javascript library was released", "id": 4 }
      ]
    },
    {
      "question": "What are the real competing languages of javascript? ",
      "correctAnswerIndex": 1,
      "id": 2,
      "answers": [
        { "answer": "CoffeeScript", "id": 1 },
        { "answer": "TypeScript", "id": 2 },
        { "answer": "English", "id": 3 },
        { "answer": "Indian", "id": 4 }
      ]
    },
    {
      "question": "Who is the author of the React.js library? ",
      "correctAnswerIndex": 2,
      "id": 3,
      "answers": [
        { "answer": "Sumerian civilization", "id": 1 },
        { "answer": "George Soros", "id": 2 },
        { "answer": "Jordan Walke", "id": 3 },
        { "answer": "Mark Elliot Zuckerberg", "id": 4 }
      ]
    },
    {
      "question": "JavaScript was invented by Brendan Eich in ?.. ",
      "correctAnswerIndex": 0,
      "id": 4,
      "answers": [
        { "answer": 1995, "id": 1 },
        { "answer": 1895, "id": 2 },
        { "answer": 1993, "id": 3 },
        { "answer": 1997, "id": 4 }
      ]
    },
    {
      "question": "Which of following are not array method?",
      "correctAnswerIndex": 2,
      "id": 5,
      "answers": [
        { "answer": ".map()", "id": 1 },
        { "answer": ".join()", "id": 2 },
        { "answer": ".split()", "id": 3 },
        { "answer": ".some()", "id": 4 }
      ]
    },
    {
      "question": "The process of comparing and changing real DOM and virtual DOM in React.JS called ..? ",
      "correctAnswerIndex": 0,
      "id": 6,
      "answers": [
        { "answer": "Reconsilation", "id": 1 },
        { "answer": "Confession", "id": 2 },
        { "answer": "Coordination", "id": 3 },
        { "answer": "Negotiation", "id": 4 }
      ]
    },
    {
      "question": "Which of the following can be implemented only with Class component in React.JS? ",
      "correctAnswerIndex": 3,
      "id": 7,
      "answers": [
        { "answer": "Context", "id": 1 },
        { "answer": "Higher-Order Components", "id": 2 },
        { "answer": "Forwarding Refs", "id": 3 },
        { "answer": "Error Boundaries", "id": 4 }
      ]
    },
    {
      "question": "What is type of null in javascript? ",
      "correctAnswerIndex": 1,
      "id": 8,
      "answers": [
        { "answer": "Null", "id": 1 },
        { "answer": "Object", "id": 2 },
        { "answer": "Undefined", "id": 3 },
        { "answer": "Symbol", "id": 4 }
      ]
    },
    {
      "question": "What is the word for when a function calls itself?",
      "correctAnswerIndex": 3,
      "id": 9,
      "answers": [
        { "answer": "Predicate", "id": 1 },
        { "answer": "Echo", "id": 2 },
        { "answer": "Ego", "id": 3 },
        { "answer": "Recursion", "id": 4 }
      ]
    },
    {
      "question": "Joining several arrays into one is know as?",
      "correctAnswerIndex": 1,
      "id": 10,
      "answers": [
        { "answer": "Pop", "id": 1 },
        { "answer": "Concat", "id": 2 },
        { "answer": "Push", "id": 3 },
        { "answer": "Shift", "id": 4 }
      ]
    },
    {
      "question": "What happens if an infinite while loop is ran?",
      "correctAnswerIndex": 2,
      "id": 11,
      "answers": [
        { "answer": "It will change itself", "id": 1 },
        { "answer": "It cannot be done", "id": 2 },
        { "answer": "It will crash the browser ", "id": 3 },
        { "answer": "It discovers the meaning of life", "id": 4 }
      ]  
    },
    {
      "question": "How do you deep clone an object?",
      "correctAnswerIndex": 3,
      "id": 12,
      "answers": [
        { "answer": "Magic method", "id": 1 },
        { "answer": "Object.values method", "id": 2 },
        { "answer": "Object.clone method", "id": 3 },
        { "answer": "JSON.parse(JSON.stringfy(obj))", "id": 4 }
      ]
    }
  ]
  
}

export const questionsSlice = createSlice({
  name: 'questions',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    nextQuestion: (state) => {
      if (state.currentQuestionIndex === -1) {
        state.isGameOver = false;
      }
      state.currentQuestionIndex += 1;
      state.currentQuestion = state.questions[state.currentQuestionIndex];
      if (!state.currentQuestion) { // if no 12 questions in array
        state.totalScore = state.scores[state.currentQuestionIndex - 1] || 0;
        state.currentQuestionIndex = -1;
        state.currentQuestion = null;
        state.isGameOver = true;
      }
    },
    tryAgain: (state) => {
      state.isGameOver = false;
      state.currentQuestionIndex = 0;
      state.currentQuestion = state.questions[state.currentQuestionIndex];
    },
    setIsGameOver: (state) => {
      state.totalScore = state.scores[state.currentQuestionIndex - 1] || 0;
      state.currentQuestionIndex = -1;
      state.currentQuestion = null;
      state.isGameOver = true;
    },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { nextQuestion, tryAgain, setIsGameOver } = questionsSlice.actions

export default questionsSlice.reducer