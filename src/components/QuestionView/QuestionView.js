import React from 'react';
import classes from './QuestionView.module.css';
import Question from './Question/Question';
import Answer from './Answer/Answer';
import ActionButtons from './ActionButtons/ActionButtons';

const QuestionView = props => {
	return (
		<div className={classes.Wrapper}>
			<div className={classes.QuestionView}>
				<Question text={props.data.question}></Question>
				{props.data.answers.map((item, index) => {
					return <Answer data={item} />;
				})}
				<ActionButtons CloseAction={props.CloseQuestion}></ActionButtons>
			</div>
		</div>
	);
};

export default QuestionView;
