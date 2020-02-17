import React, { useState } from 'react';
import classes from './CategoryOverview.module.css';
import Category from './Category/Category';
import QuestionView from '../QuestionView/QuestionView';

const CategoryOverview = props => {
	var [shownQuestionData, setShownQuestionData] = useState('');
	var [currentTeam, setCurrentTeam] = useState('');
	var [answeredQuestions] = useState('');

	currentTeam = 'team1';

	function SetAnsweredQuestion(questionId, answer) {
		var isCorrect = shownQuestionData.correctAnswer === answer;
		answeredQuestions.push(currentTeam, questionId, isCorrect);
		if (currentTeam == 'team1') currentTeam = 'team2';
		else currentTeam = 'team1';
	}

	var shownQuestion = shownQuestionData ? (
		<QuestionView
			data={shownQuestionData}
			CloseQuestion={() => setShownQuestionData(null)}
			SetAnsweredQuestion={() => SetAnsweredQuestion}
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
