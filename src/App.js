import React, { useState } from 'react';
import FlashcardList from "./FlashcardList";
import './app.css'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASCARDS)
  return (
    <FlashcardList flashcards={flashcards} />
  );
}

const SAMPLE_FLASCARDS = [
  {
    id: 1,
    question: 'What is 2 +2?',
    answer: '4',
    options: [
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
    id: 2,
    question: 'Question2',
    answer: '4',
    options: [
      'a',
      'b',
      'c',
      'd'
    ]
  },
  {
    id: 3,
    question: 'Question3',
    answer: '4',
    options: [
      '2',
      '3',
      '4',
      '5'
    ]
  }
]

export default App;
