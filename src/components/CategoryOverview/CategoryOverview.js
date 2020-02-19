import React, { useState } from 'react';
import classes from './CategoryOverview.module.css';
import Category from './Category/Category';
import QuestionView from '../QuestionView/QuestionView';
import TeamInfo from './TeamInfo/TeamInfo';

const CategoryOverview = props => {
	var [shownQuestionData, setShownQuestionData] = useState('');
	var [currentTeam, setCurrentTeam] = useState('team1');
	var [answeredQuestions] = useState([]);

	function SetAnsweredQuestion(questionId, answer) {
		var isCorrect = shownQuestionData.correctAnswer === answer;
		answeredQuestions.push({ currentTeam, questionId, isCorrect });
		if (currentTeam === 'team1') setCurrentTeam('team2');
		else setCurrentTeam('team1');
	}

	var shownQuestion = shownQuestionData ? (
		<QuestionView
			data={shownQuestionData}
			CloseQuestion={() => setShownQuestionData(null)}
			SetAnsweredQuestion={(questionId, answer) =>
				SetAnsweredQuestion(questionId, answer)
			}
		/>
	) : (
		''
	);
	var teamInfo = (
		<TeamInfo currentTeam={currentTeam} answeredQuestions={answeredQuestions} />
	);

	return (
		<>
			<div className={classes.tiles}>
				{props.data.map((item, index) => {
					return (
						<Category
							key={item.id}
							data={item}
							showQuestion={data => {
								setShownQuestionData(data);
							}}
						/>
					);
				})}
			</div>
			<div className={classes.controlButtons}></div>
			{teamInfo}
			{shownQuestion}
		</>
	);
};

export default CategoryOverview;
