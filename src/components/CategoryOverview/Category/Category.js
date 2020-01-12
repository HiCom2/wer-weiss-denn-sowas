import React, { useState } from 'react';
import classes from './Category.module.css';
import team1img from '../../../assets/team1.png';
import team2img from '../../../assets/team2.png';

const Category = props => {
	const data = props.data;
	return (
		<div class={classes.tile}>
			<img src={''}></img>
			<div class={classes.categorytext}>
				<div class={classes.Done}></div>
				{data.category}
			</div>
		</div>
	);
};

export default Category;
