import React, { useContext } from 'react';
import { PromptContext } from '../../PromptContext';

import { Flex } from '../styles/Flex.styled';
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
            <Flex style={{flexDirection: 'column'}}>
                <div style={{color: '#2db98a'}}>
                    {promptTitle.length > 30 ? `${promptTitle.substring(0,30)}...` : promptTitle}
                </div>
                <div style={{color: '#b3b3b3'}}>
                    {time}
                </div>
            </Flex>
        </StyledInboxItems>
    )
}

export default InboxItems