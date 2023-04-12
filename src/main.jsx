import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QuizContextProvider } from './context/quizContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  </React.StrictMode>,
)
