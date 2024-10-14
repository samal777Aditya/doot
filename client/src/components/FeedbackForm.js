import { useState } from 'react';
import { db } from '../services/firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useSpeechToText } from '../hooks/useSpeechToText';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const { transcript, startListening } = useSpeechToText();

  const handleSubmit = async () => {
    await addDoc(collection(db, 'feedback'), { text: transcript || text, createdAt: new Date() });
    alert('Feedback submitted!');
  };

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter feedback..." />
      <button onClick={startListening}>Record Voice Feedback</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default FeedbackForm;