import React, { useState } from 'react';
import classes from './CategoryOverview.module.css';
import Category from './Category/Category';
import QuestionView from '../QuestionView/QuestionView';

const CategoryOverview = props => {
	var [shownQuestionData, setShownQuestionData] = useState('');
	var [answeredQuestions, setAnsweredQuestions] = useState('');
	var shownQuestion = shownQuestionData ? (
		<QuestionView
			data={shownQuestionData}
			CloseQuestion={() => setShownQuestionData(null)}
		/>
	) : (
		''
	);
	return (
		<>
			<div className={classes.tiles}>
				{props.data.map((item, index) => {
					return (
						<Category
							data={item}
							showQuestion={data => {
								setShownQuestionData(data);
							}}
						/>
					);
				})}
			</div>
			<div className={classes.controlButtons}></div>
			{shownQuestion}
		</>
	);
};

export default CategoryOverview;
