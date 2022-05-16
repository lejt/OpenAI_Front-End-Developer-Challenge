import React, { useState, useEffect, useContext } from 'react';
import { PromptContext } from '../../PromptContext';
import Response from '../Response/Response';
import InboxItems from '../InboxItems/InboxItems';
import InboxMail from '../InboxMail/InboxMail';

import { Flex } from '../styles/Flex.styled';
import { StyledAIEmail, StyledAIEmailHeader } from '../styles/Output.styled';
import { StyledInbox } from '../styles/Inbox.styled';

function Responses() {

  const [{ responses, setResponses, emailSelector }] = useContext(PromptContext);

  const [sort, setSort] = useState(true);

  useEffect(() => {
    const responseRecords = window.localStorage.getItem('MY_OPENAI_MOVIE_IDEAS');
    
    if (JSON.parse(responseRecords).length > 0) {
      setResponses(JSON.parse(responseRecords))
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('MY_OPENAI_MOVIE_IDEAS', JSON.stringify(responses))
  }, [responses])


  function handleSort() {
    setSort(!sort)
  }


  return (
    <StyledAIEmail>
      <StyledAIEmailHeader>
        <div className='aiEmail__header'>
          <h5>Open AI - ghost writer</h5> 
        </div>
        <div className='aiEmail__sort'>
          <button onClick={handleSort} style={{border: 'none'}}>Sort</button>
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

        <Flex style={{minWidth: '70%', height: '300px', backgroundColor: 'pink', overflowY: 'scroll'}}>
          {emailSelector && 
            <InboxMail singleResponse={responses.filter((response) => response.timestamp === emailSelector)}/>
          }
        </Flex>

      </Flex>

    </StyledAIEmail>
  )
}

export default Responses