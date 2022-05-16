import React, { useContext } from 'react';
import { PromptContext } from '../../PromptContext';
import { StyledInboxItems } from '../styles/InboxItems.styled';

function InboxItems({ data, time }) {

    const [{ setEmailSelector }] = useContext(PromptContext);

    // isolates the words in prompt written by user
    let promptArr = data.prompt.split(' ');
    let promptSliceIdx = promptArr.indexOf('about')+1;
    let promptTitle = promptArr.slice(promptSliceIdx).join(' ');

    function handleDisplay(emailTimestamp) {
        setEmailSelector(emailTimestamp.time);
    }

    return (
        <StyledInboxItems onClick={() => handleDisplay({time})}>
            {promptTitle.length > 30 ? `${promptTitle.substring(0,30)}...` : promptTitle}
            <br/>
            {time.toLocaleString()}
        </StyledInboxItems>
    )
}

export default InboxItems