import React from 'react';
import classes from './Answer.module.css';

const Answer = props => {
	return (
		<div className={classes.Answer}>
			<div className={classes.AnswerLetter}>{props.data.id.toUpperCase()}</div>
			<div className={classes.AnswerText}>{props.data.text}</div>
		</div>
	);
};

export default Answer;
