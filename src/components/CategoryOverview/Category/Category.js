import React, { useState } from 'react';
import classes from './Category.module.css';
import team1img from '../../../assets/team1.png';
import team2img from '../../../assets/team2.png';

const Category = props => {
	const data = props.data;
	var textClasses = [classes.categorytext];
	if (props.data.category === '?') textClasses.push(classes.questionmark);
	return (
		<div className={classes.tile}>
			<div className={textClasses.join(' ')}>{data.category}</div>
		</div>
	);
};

export default Category;
