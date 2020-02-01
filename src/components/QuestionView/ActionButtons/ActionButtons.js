import React from 'react';
import ActionButton from './ActionButton/ActionButton';
import classes from './ActionButtons.module.css';

const ActionButtons = props => {
	return (
		<div className={classes.ActionButtons}>
			<ActionButton
				text="Nice"
				onClick={() => {
					console.log('yes!');
				}}
			></ActionButton>
		</div>
	);
};

export default ActionButtons;
