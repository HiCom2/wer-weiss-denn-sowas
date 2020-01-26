import React from 'react';
import classes from './Question.module.css';

const Question = props => {
	return (
		<div className={classes.Question}>
			<div className={classes.QuestionText}>{props.text}</div>
		</div>
	);
};

export default Question;
