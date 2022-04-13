import React from 'react'

import Message from './Message';

function HW1() {
    let messageData = {
            avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
            name: 'Parnisha',
            message: 'Привет мир',
            time: '22:00',
        }
    return (
        <div>
            <hr/>
            homeworks 1
            <Message avatar={messageData.avatar}
                     name={messageData.name}
                     message={messageData.message}
                     time={messageData.time}
            />
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
