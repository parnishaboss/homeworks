import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid'

// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([]) // need to fix any

    const addUserCallback = (name: string) => {
        const user = {
            _id: v1(),
            name:name
        }// need to fix any
        setUsers([...users, user]) // need to fix
    }

    return (
        <div>

            homeworks 3

            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
        </div>
    )
}

export default HW3
