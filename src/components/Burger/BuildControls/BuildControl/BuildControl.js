import React from 'react';
import buildControls from '../BuildControls';
import classes from './BuildControl.css'

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.label}>{props.label}</div>
        <button onClick={props.removed} className={classes.Less} disabled={props.disabled}>Less</button>
        <button onClick={props.added} className={classes.More}>More</button>
    </div>
);

export default buildControl;