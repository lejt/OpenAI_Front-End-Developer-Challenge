import React, { useState, useEffect, useContext } from 'react';
import { PromptContext } from '../../PromptContext';
import InboxItems from '../InboxItems/InboxItems';
import InboxMail from '../InboxMail/InboxMail';
import { BiSort } from 'react-icons/bi';

import { Flex } from '../styles/Flex.styled';
import { StyledAIEmail, StyledAIEmailHeader, StyledInbox } from '../styles/Output.styled';
import { StyledButton } from '../styles/Button.styled'

function Responses() {

  const [{ responses, setResponses, emailSelector }] = useContext(PromptContext);
  const [sort, setSort] = useState(true);

  function handleSort() {
    setSort(!sort)
  }

  // Saves OpenAI output in local storage for persistence
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
    <StyledAIEmail>
      <StyledAIEmailHeader>
        <div className='aiEmail__header'>
          <h5>Account: Ghost Writer AI</h5> 
        </div>
        <div className='aiEmail__sort'>
          <StyledButton onClick={handleSort}><BiSort/></StyledButton>
        </div>
      </StyledAIEmailHeader>

      <Flex>

        <StyledInbox >
          {responses && (
              (sort ? (responses.sort((a,b) => new Date(b.timestamp) - new Date(a.timestamp))) : (responses.sort((a,b) => new Date(a.timestamp) - new Date(b.timestamp))))
              .map((response) => (
                <InboxItems data={response.dataInput} time= {response.timestamp} key={response.timestamp}  />
              ))
            )
          }
        </StyledInbox>

        <Flex className='inbox__mail__content' style={{minWidth: '70%', height: '300px', backgroundColor: 'beige', overflowY: 'scroll'}}>
          {emailSelector && 
            <InboxMail singleResponse={responses.filter((response) => response.timestamp === emailSelector)}/>
          }
        </Flex>

      </Flex>

    </StyledAIEmail>
  )
}

export default Responses