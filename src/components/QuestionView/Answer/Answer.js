import React from 'react';
import classes from './Answer.module.css';

const Answer = props => {
    var answerClasses = [classes.Answer];
    if (props.SelectedAnswersId === props.data.id){
		answerClasses.push(classes.AnswerCorrect);
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
