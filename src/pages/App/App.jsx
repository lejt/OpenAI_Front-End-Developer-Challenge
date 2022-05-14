import './App.css';
import React, { useState, useEffect } from "react";
import { getUser } from "../../utilities/users-service";
import { Routes, Route } from "react-router-dom";
// import NewOrderPage from "../NewOrderPage/NewOrderPage";
// import AuthPage from "../AuthPage/AuthPage";
// import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
// import NavBar from "../../components/NavBar/NavBar";

import fetchAPI from '../../utilities/fetchAPI';
import AIResponses from '../../components/AIReponses/AIResponses';

function App() {
  const [question, setQuestion] = useState({ 
    prompt: "Write a poem about a dog wearing skis",
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  const [reply, setReply] = useState([]);

  const handleChange = (e) => {
    setQuestion({...question,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const aiReply = await fetchAPI(question);
    // console.log('aiReply: ', aiReply)
    
    setReply((prevReplies) => 
      [...prevReplies,
        {answer: aiReply.choices[0].text,
        timestamp: Date(),
      }]
    )
    console.log('reply: ', reply)
  }

  return (
    <main className="App">
      {
        <>
          <h1>OPENAI Q&A</h1>
          <input type="text" placeholder="Ask a question" name="prompt" value={question.prompt} onChange={handleChange} />
          <button onClick={handleSubmit}>Submit</button><br/>
          {reply && (reply.sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp))).map((re) => (<AIResponses question={question} re={re} /> ))}

        </>
      }
    </main>
  );
}

export default App;