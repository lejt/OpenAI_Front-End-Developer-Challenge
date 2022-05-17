import React from 'react';
import { StyledInboxMail } from '../styles/InboxMail.styled';

function InboxMail({ singleResponse }) {

    const response = singleResponse[0];

    return (
        <StyledInboxMail>
            <div>
                <strong>User:</strong>&nbsp;&nbsp; {response.dataInput.prompt} 
            </div>
            <div>
                <strong>AI:</strong>&nbsp;&nbsp; {response.answer ? response.answer : <p>- no response found -</p>}
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                {response.timestamp}
            </div>
        </StyledInboxMail>
    )
}

export default InboxMail