import React from 'react';
import classes from './Answer.module.css';

const Answer = props => {
    var answerClasses = [classes.Answer];
    if (props.answerInfo.length >= 1){
		var answer = props.answerInfo[0];
		if (answer.isCorrect) answerClasses.push(classes.tileAnsweredWrong);
	}
	return (
		<div className={answerClasses.join(' ')}>
			<div
				className={classes.AnswerLetter}
				onClick={() => props.AnswerQuestion(props.data.id)}
			>
				{props.data.id.toUpperCase()}
			</div>
			<div className={classes.AnswerText}>{props.data.text}</div>
		</div>
	);
};

export default Answer;
