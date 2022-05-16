import React from 'react';
import { StyledInboxMail } from '../styles/InboxMail.styled';

function InboxMail({ singleResponse }) {

    const response = singleResponse[0];

    return (
        <StyledInboxMail>
            {/* Check if it has output */}
            {response.dataInput.prompt}<br/><br/>
            {response.answer}<br/><br/>
            {response.timestamp.toLocaleString()}
        </StyledInboxMail>
    )
}

export default InboxMail