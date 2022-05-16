import React, { createContext, useState } from 'react';

const PromptContext  = createContext([{}, ()=>{}, {}, ()=>{}, {}, ()=>{}, {}, ()=>{}])

function PromptProvider(props) {

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

    const [emailSelector, setEmailSelector] = useState('');

    const value = { data, setData, film, setFilm, responses, setResponses, emailSelector, setEmailSelector } 

    return (
        <PromptContext.Provider value={[value]}>
            { props.children }
        </PromptContext.Provider>
    );
}

export { PromptProvider, PromptContext };