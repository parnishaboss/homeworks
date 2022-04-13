import React from 'react'
import classes from './Message.module.css'
import messageType from './HW1'

type messageType = {
    avatar: string;
    name:string;
    message:string;
    time:string
}

function Message(props:messageType) {
    return (
        <div className={classes.block}>
            <img src={props.avatar}/>
            <div className={classes.message}>
                <div className={classes.name}>{props.name}</div>
                <div className={classes.textMessage}>
                    <div className={classes.text}>{props.message}</div>
                    <div className={classes.time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message
