import React, { useState } from 'react';
import classes from './CategoryOverview.module.css';
import Category from './Category/Category';
import QuestionView from '../QuestionView/QuestionView';
import TeamInfo from './TeamInfo/TeamInfo';
import ReactPlayer from 'react-player';

const CategoryOverview = props => {
	var [shownQuestionData, setShownQuestionData] = useState('');
	var [currentTeam, setCurrentTeam] = useState('team1');
	var [answeredQuestions] = useState([]);
	var [player, setPlayer] = useState('');

	function SetAnsweredQuestion(questionId, answer, videopath) {
		var isCorrect = shownQuestionData.correctAnswer === answer;
		answeredQuestions.push({ currentTeam, questionId, isCorrect });
		if (currentTeam === 'team1') setCurrentTeam('team2');
		else setCurrentTeam('team1');
		// TODO Play video from here
		// var videoUrl = 'videos/1.' + questionId + '.mp4';
        // var videoUrl = 'videos/1.1Trim.mp4';
        // var videoUrl = videopath;
        if (videopath !== "")
            setPlayer(
                <ReactPlayer
                    className={classes.reactPlayer}
                    url={videopath}
                    playing
                    height="600"
                    width="800"
                    onEnded={() => setPlayer('')}
                />
            );
	}

	function ShowQuestion(data) {
		if (answeredQuestions.filter(x => x.questionId === data.id) <= 0)
			setShownQuestionData(data);
	}

	var shownQuestion = shownQuestionData ? (
		<QuestionView
			data={shownQuestionData}
			CloseQuestion={() => setShownQuestionData(null)}
			SetAnsweredQuestion={(questionId, answer, videopath) =>
				SetAnsweredQuestion(questionId, answer, videopath)
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
								ShowQuestion(data);
							}}
							answerInfo={answeredQuestions.filter(
								x => x.questionId === item.id
							)}
						/>
					);
				})}
			</div>
			<div className={classes.controlButtons}></div>
			{player}
			{teamInfo}
			{shownQuestion}{' '}
		</>
	);
};

export default CategoryOverview;
