import React, { useState } from 'react';
import classes from './QuestionView.module.css';
import Question from './Question/Question';
import Answer from './Answer/Answer';
import ActionButtons from './ActionButtons/ActionButtons';

const QuestionView = props => {
    var [SelectedAnswersId, SetAnswerId] = useState("");
	function AnswerQuestion(questionId, answer, videopath) {
        SetAnswerId(questionId);
        if (SelectedAnswersId !==""){
            // props.SetAnsweredQuestion(questionId, answer, videopath);
            // props.CloseQuestion();  //will close question after playing video
        }
        
        props.SetAnsweredQuestion(questionId, answer, videopath);
        props.CloseQuestion();  //will close question after playing video
	};
	return (
		<div className={classes.Wrapper}>
			<div className={classes.QuestionView}>
				<Question text={props.data.question}></Question>
                {/* Add picture if path set https://stackoverflow.com/a/32282992*/}
                <div style={{display: 'flex', justifyContent: 'center'}}> 
                    {(() => { // https://react-cn.github.io/react/tips/if-else-in-JSX.html
                        switch (props.data.picture) {
                        case "":   return  ;
                        default:      return  <img 
                            src={props.data.picture} 
                            alt="picture_for_question" 
                            style={{ height: "150px", paddingRight: "0px"}} 
                    />      ;
                        }
                    })()}
                </div>
				{props.data.answers.map((item, index) => {
					return (
						<Answer
							key={item.id}
							data={item}
							AnswerQuestion={answer => AnswerQuestion(props.data.id, answer, props.data.video)}
                            SelectedAnswersId
						/>
					);
				})}
				<ActionButtons CloseAction={props.CloseQuestion}></ActionButtons>
			</div>
		</div>
	);
};

export default QuestionView;
