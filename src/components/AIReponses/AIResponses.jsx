import React from 'react';
import responseStyles from './AIResponses.css';


function AIResponses({ question, re }) {
  return (
    <>
        <h3>Question: <span>{question.prompt}</span></h3>
        <h3>Response: </h3>
        <p>
            {re.answer}
        </p>
        <strong>{re.timestamp.toLocaleString()}</strong>
    </>
  )
}

export default AIResponses