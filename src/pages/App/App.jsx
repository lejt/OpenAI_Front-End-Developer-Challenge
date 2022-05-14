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
  const [data, setData] = useState({ 
    prompt: "",
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });

  const [responses, setResponses] = useState([]);

  const handleChange = (e) => {
    setData({ 
      ...data, 
      prompt: e.target.value 
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const aiReply = await fetchAPI(data);

    setResponses((prevResponses) => 
      [...prevResponses,
        {
          dataInput: data,
          answer: aiReply.choices[0].text,
          timestamp: Date(),
        }
      ]
    )
  }

  return (
    <main className="App">
      {
        <>
          <h1>OPENAI Q&A</h1>
          <input type="text" placeholder="Ask a question" value={data.prompt} onChange={handleChange} />
          <button onClick={handleSubmit}>Submit</button><br/>

          {/* sorts reply array based on recency of timestamp */}
          {responses && 
          (responses.sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp)))
            .map((response) => (
              <AIResponses data={response.dataInput} answer={response.answer} time= {response.timestamp} key={response.timestamp} /> 
              
            )
          )}

        </>
      }
    </main>
  );
}

export default App;