import './App.css';
import React, { useState, useEffect } from "react";
import fetchAPI from '../../utilities/fetchAPI';
import AIResponses from '../../components/AIReponses/AIResponses';

function App() {
  const [data, setData] = useState({ 
    prompt: "",
    // contols randomness: lower the number, model becomes more repetitive and deterministic
    temperature: 0.6,
    // controls length of output, 1 token ~= 4 letters
    max_tokens: 250,
    // controls diversity, 0.5 means all likelihood-weighted answers are considered 
    top_p: 1.0,
    // decreases the likelihood for the model to repeat the same line
    frequency_penalty: 0.5,
    // increases the model's likelihood to talk about new topics
    presence_penalty: 0.0,
  });
  const [film, setFilm] = useState({value: 'action film'});
  const [responses, setResponses] = useState([]);

  const handleSelect = (e) => {
    setFilm({value: e.target.value})
  }
  
  const handleChange = (e) => {
    setData({ 
      ...data, 
      prompt: `Give me a ${film.value} idea about ${e.target.value}` 
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check if prompt ends in punctuation
    const regex = /([\S\s]+?)[.!?](\s|$)/g;
    if (!data.prompt.match(regex)) {
      data.prompt += '.'
    }

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

    // clears prompt
    setData({ 
      ...data, 
      prompt: '', 
    })
  }

  let promptArr = data.prompt.split(' ');
  let promptSliceIdx = promptArr.indexOf('about')+1;

  useEffect(() => {
    const responseRecords = window.localStorage.getItem('MY_OPENAI_MOVIE_IDEAS');
    if (JSON.parse(responseRecords).length > 0) {
      setResponses(JSON.parse(responseRecords))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('MY_OPENAI_MOVIE_IDEAS', JSON.stringify(responses))
  }, [responses])

  return (
    <main className="App">
      {
        <>
          <h1>OPENAI Ghost Writer</h1>

          Give me a(n) &nbsp;
          <select value={film.value} onChange={handleSelect}>
            <option value="Hollywood action film">action film</option>
            <option value="Hollywood comedy film">comedy film</option>
            <option value="Hollywood romantic film">romantic film</option>
            <option value="Hollywood romantic comedy film">rom-com film</option>
            <option value="Hollywood horror film">horror film</option>
            <option value="Hollywood fantasy film">fantasy film</option>
          </select>

          &nbsp;
          idea about
          &nbsp;
          
          <input type="text" placeholder="turtles in space" value={promptArr.slice(promptSliceIdx).join(' ')} onChange={handleChange} />
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