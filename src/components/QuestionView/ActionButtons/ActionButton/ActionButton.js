import React from 'react';
import classes from './ActionButton.module.css';

const ActionButton = props => {
	return (
		<div className={classes.ActionButton} onClick={props.onClick}>
			{props.text}
		</div>
	);
};

export default ActionButton;
