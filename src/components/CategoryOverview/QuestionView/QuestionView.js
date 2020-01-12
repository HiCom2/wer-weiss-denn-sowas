import React from 'react';
import classes from './QuestionView.module.css';
import Question from './Question/Question';
import Answer from './Answer/Answer';

const QuestionView = props => {
	return (
		<div>
			<Question text={props.question}></Question>
			{props.answers.map((item, index) => {
				return <Answer data={item} />;
			})}
		</div>
	);
};

export default QuestionView;
