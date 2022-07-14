import React from 'react'
import {AffairType} from './HW2';
import classes from './Affairs.module.css';

type AffairPropsType = {
    affair:AffairType
    deleteAffairCallback: (id:number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix
    return (
        <div className={classes.isDone}>
            {props.affair.name}
            <button className={classes.button}
                onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
