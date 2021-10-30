import React, { useState } from 'react';
import classes from './CategoryOverview.module.css';
import Category from './Category/Category';
import QuestionView from '../QuestionView/QuestionView';
import TeamInfo from './TeamInfo/TeamInfo';
import ReactPlayer from 'react-player';

const CategoryOverview = props => {
	var [shownQuestionData, setShownQuestionData] = useState('');
	var [currentTeam, setCurrentTeam] = useState('team2');
	var [answeredQuestions] = useState([]);
	var [player, setPlayer] = useState('');
    var [finalAnswer] = useState([]);

    function PlayAnswerVideo(questionId, answer, video) {
        if (video[0] !== "")
            setPlayer(
                <ReactPlayer
                    className={classes.reactPlayer}
                    url={video[0]}
                    playing
                    height="600"
                    width="800"
                    volume={video[1]}
                    // onEnded={() => setPlayer('')}
                    onEnded={() => SetAnsweredQuestion(questionId, answer, video)}
                />
            )
        else SetAnsweredQuestion(questionId, answer, video)
    }

	function SetAnsweredQuestion(questionId, answer, video) {
        // if (video[0] !== "")
        //     setPlayer(
        //         <ReactPlayer
        //             className={classes.reactPlayer}
        //             url={video[0]}
        //             playing
        //             height="600"
        //             width="800"
        //             volume={video[1]}
        //             onEnded={() => setPlayer('')}
        //         />
        //     );
        var isCorrect = shownQuestionData.correctAnswer === answer;
        if (questionId === 10){
            finalAnswer.push({ currentTeam, questionId, isCorrect })
            // console.log(finalAnswer)
        }
        else if (questionId === 11){
            // console.log(finalAnswer)
            answeredQuestions.push(finalAnswer[0])
            answeredQuestions.push({ currentTeam, questionId, isCorrect })
        }
        else answeredQuestions.push({ currentTeam, questionId, isCorrect })

        // console.log(answeredQuestions)
		if (currentTeam === 'team1') setCurrentTeam('team2');
		else setCurrentTeam('team1');
		// TODO Play video from here
		// var videoUrl = 'videos/1.' + questionId + '.mp4';
        // var videoUrl = 'videos/1.1Trim.mp4';
        // var videoUrl = video;
        // if (video[0] !== "")
        //     setPlayer(
        //         <ReactPlayer
        //             className={classes.reactPlayer}
        //             url={video[0]}
        //             playing
        //             height="600"
        //             width="800"
        //             volume={video[1]}
        //             onEnded={() => setPlayer('')}
        //         />
        //     );
	}

	function ShowQuestion(data) {
		if (answeredQuestions.filter(x => x.questionId === data.id) <= 0)
			setShownQuestionData(data);
	}

	var shownQuestion = shownQuestionData ? (
		<QuestionView
			data={shownQuestionData}
			CloseQuestion={() => setShownQuestionData(null)}
			PlayAnswerVideo={(questionId, answer, video) =>
				PlayAnswerVideo(questionId, answer, video)
			}
		/>
	) : (
		''
	);
	var teamInfo = (
		<TeamInfo currentTeam={currentTeam} answeredQuestions={answeredQuestions}/>
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
