import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import classes from './Affairs.module.css';

type AffairsPropsType = {
    data: AffairType[]
    setFilter: (filter:FilterType) => void
    deleteAffairCallback: (id: number) => void
    filter:FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />


    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={classes.affairs}>

            {mappedAffairs}

            <button className={props.filter === 'all' ? classes.activeFilter : classes.buttonFilter} onClick={setAll}>All</button>
            <button className={props.filter === 'high' ? classes.activeFilter : classes.buttonFilter} onClick={setHigh}>High</button>
            <button className={props.filter === 'middle' ? classes.activeFilter : classes.buttonFilter} onClick={setMiddle}>Middle</button>
            <button className={props.filter === 'low' ? classes.activeFilter : classes.buttonFilter} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
