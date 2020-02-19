import React from 'react';
import classes from './TeamInfo.module.css';
import team1Image from '../../../assets/team1.png';
import team2Image from '../../../assets/team2.png';

const TeamInfo = props => {
	var currentTeam = props.currentTeam;
	var answers = props.answeredQuestions;
	var team1Img = (
		<img className={classes.TeamImage} src={team1Image} alt="team1" />
	);
	var team2Img = (
		<img className={classes.TeamImage} src={team2Image} alt="team2" />
	);
	if (currentTeam === 'team1')
		team1Img = <div className={classes.CurrentTeam}> {team1Img} </div>;
	else team2Img = <div className={classes.CurrentTeam}> {team2Img} </div>;

	var scoreTeam1 =
		answers.filter(x => x.currentTeam === 'team1' && x.isCorrect).length * 500;
	var scoreTeam2 =
		answers.filter(x => x.currentTeam === 'team2' && x.isCorrect).length * 500;

	return (
		<div className={classes.TeamInfo}>
			<div className={classes.Stats}>
				<div className={classes.TeamStats}>
					Team 1{team1Img}
					{scoreTeam1}
				</div>
				<div className={classes.TeamStats}>
					Team 2{team2Img}
					{scoreTeam2}
				</div>
			</div>
			Answered: {answers.length}
		</div>
	);
};

export default TeamInfo;
