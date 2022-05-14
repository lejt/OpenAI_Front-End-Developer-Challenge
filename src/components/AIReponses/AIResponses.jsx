import React from 'react';
import responseStyles from './AIResponses.css';


function AIResponses({ data, answer, time }) {

  return (
    <>
        <p>
          <strong>Question:</strong> {data.prompt}
        </p>

        <p>
          <strong>Response:</strong> {answer}
        </p>

        <p>{time.toLocaleString()}</p>
    </>
  )
}

export default AIResponses