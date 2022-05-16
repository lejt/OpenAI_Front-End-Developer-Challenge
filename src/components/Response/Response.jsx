import React from 'react';

function Response({ data, answer, time }) {

  return (
    <>
        <p>
          <strong>Prompt:</strong> {data.prompt}
        </p>

        <p>
          <strong>Response:</strong> {answer}
        </p>

        <p>{time.toLocaleString()}</p>
    </>
  )
}

export default Response