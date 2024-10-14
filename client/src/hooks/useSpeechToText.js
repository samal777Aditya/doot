import { useState } from 'react';

export const useSpeechToText = () => {
  const [transcript, setTranscript] = useState('');

  const startListening = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onresult = (event) => setTranscript(event.results[0][0].transcript);
    recognition.start();
  };

  return { transcript, startListening };
};