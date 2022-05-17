import React, { useContext } from 'react';
import { PromptContext } from '../../PromptContext';
import fetchAPI from '../../utilities/fetchAPI';

import { StyledUserEmail } from '../styles/Input.styled';
import { StyledButton } from '../styles/Button.styled';

function UserInput() {

  const [{ data, setData, film, setFilm, setResponses }] = useContext(PromptContext);

  function handleSelect(e) {
    setFilm({value: e.target.value})
  }

  function handleChange(e) {
      setData({ 
        ...data, 
        prompt: `Give me a ${film.value} idea about ${e.target.value}` 
      })
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // check if prompt ends in punctuation
    const regex = /([\S\s]+?)[.!?](\s|$)/g;
    if (!data.prompt.match(regex)) {
      data.prompt += '.'
    }
    
    console.log('prompt: ',data.prompt)
    const aiReply = await fetchAPI(data);

    setResponses((prevResponses) => 
      [...prevResponses,
          {
          dataInput: data,
          answer: aiReply.choices[0].text,
          timestamp: new Date().toLocaleString(),
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
  let promptUserInput = promptArr.slice(promptSliceIdx).join(' ');

  return (
    <StyledUserEmail>
      <div className="user__send">
        <div>
          <strong>To: </strong>
          &nbsp;&nbsp;&nbsp;
          <em>definitely_not_a_ghost_writer_ai@gmail.com</em>
        </div>
      </div>
      
      <div className="user__message">
      
          <div className="user__input">
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
            <br />
            <textarea placeholder="turtles in space" value={promptUserInput} onChange={handleChange} />
          </div>

          <div className="user__button">
            <StyledButton onClick={handleSubmit} disabled={(promptUserInput.length < 3) ? true : false}>SEND</StyledButton>
          </div>
    

      </div>
    </StyledUserEmail>
  )
}

export default UserInput