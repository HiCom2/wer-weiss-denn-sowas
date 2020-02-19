import React from 'react';
import classes from './Category.module.css';
import team1Image from '../../../assets/team1.png';
import team2Image from '../../../assets/team2.png';

const Category = props => {
	const data = props.data;
	var textClasses = [classes.categorytext];
	var tileClasses = [classes.tile];
	if (props.data.category === '?') textClasses.push(classes.questionmark);
	var image = '';
	if (props.answerInfo.length >= 1) {
		var answer = props.answerInfo[0];
		if (answer.isCorrect)
			if (answer.currentTeam === 'team1') image = team1Image;
			else image = team2Image;
		else {
			tileClasses.push(classes.tileAnsweredWrong);
		}
	}
	const renderedImage =
		image === '' ? (
			''
		) : (
			<img className={classes.teamImage} src={image} alt="team" />
		);
	if (renderedImage !== '') tileClasses.push(classes.tileAnsweredCorrectly);

	return (
		<div
			className={tileClasses.join(' ')}
			onClick={() => props.showQuestion(data)}
		>
			{renderedImage}
			<div className={textClasses.join(' ')}>{data.category}</div>
		</div>
	);
};

export default Category;
