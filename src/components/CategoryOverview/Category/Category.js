import React from 'react';
import classes from './Category.module.css';

const Category = props => {
	const data = props.data;
	var textClasses = [classes.categorytext];
	if (props.data.category === '?') textClasses.push(classes.questionmark);
	return (
		<div className={classes.tile} onClick={() => props.showQuestion(data)}>
			<div className={textClasses.join(' ')}>{data.category}</div>
		</div>
	);
};

export default Category;
