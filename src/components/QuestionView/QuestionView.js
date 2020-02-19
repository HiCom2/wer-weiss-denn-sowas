import React from 'react';
import classes from './QuestionView.module.css';
import Question from './Question/Question';
import Answer from './Answer/Answer';
import ActionButtons from './ActionButtons/ActionButtons';

const QuestionView = props => {
	function AnswerQuestion(questionId, answer) {
		props.SetAnsweredQuestion(questionId, answer);
	}
	return (
		<div className={classes.Wrapper}>
			<div className={classes.QuestionView}>
				<Question text={props.data.question}></Question>
				{props.data.answers.map((item, index) => {
					return (
						<Answer
							key={item.id}
							data={item}
							AnswerQuestion={answer => AnswerQuestion(props.data.id, answer)}
						/>
					);
				})}
				<ActionButtons CloseAction={props.CloseQuestion}></ActionButtons>
			</div>
		</div>
	);
};

export default QuestionView;
