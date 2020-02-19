import React from 'react';
import ActionButton from './ActionButton/ActionButton';
import classes from './ActionButtons.module.css';

const ActionButtons = props => {
	return (
		<div className={classes.ActionButtons}>
			<ActionButton text="X" onClick={() => props.CloseAction()} />
		</div>
	);
};

export default ActionButtons;
