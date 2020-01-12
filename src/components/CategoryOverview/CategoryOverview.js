import React from 'react';
import classes from './CategoryOverview.module.css';
import Category from './Category/Category';

const CategoryOverview = props => {
	return (
		<div class={classes.tiles}>
			{props.data.map((item, index) => {
				return <Category data={item} />;
			})}
		</div>
	);
};

export default CategoryOverview;
