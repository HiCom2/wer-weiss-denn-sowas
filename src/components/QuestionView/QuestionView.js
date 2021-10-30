import React, { useState } from 'react';
import classes from './QuestionView.module.css';
import Question from './Question/Question';
import Answer from './Answer/Answer';
import ActionButtons from './ActionButtons/ActionButtons';
import ReactPlayer from "react-player";

const QuestionView = props => {
    var [SelectedAnswersId, SetAnswerId] = useState("");
	function AnswerQuestion(questionId, answer, video) {
        SetAnswerId(questionId);
        if (SelectedAnswersId !==""){
            // props.SetAnsweredQuestion(questionId, answer, video);
            // props.CloseQuestion();  //will close question after playing video
        }
        
        props.SetAnsweredQuestion(questionId, answer, video);
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
                        // case "":   return <h3>No picture</h3>;
                        case "":   return ;
                        default:      return  <img 
                            src={props.data.picture} 
                            alt="picture_for_question" 
                            style={{ height: "300px", paddingRight: "0px"}} 
                    />      ;
                        }
                    })()}
                </div>

                {/* https://www.cluemediator.com/audio-player-in-react-with-example */}
                <div style={{display: 'flex', justifyContent: 'center'}}> 
                    {(() => { // https://react-cn.github.io/react/tips/if-else-in-JSX.html
                        switch (props.data.audio) {
                        // case "":   return  <h3>No audio</h3>;
                        case "":   return  ;
                        default:   return  <ReactPlayer
                        url={props.data.audio}
                        width="400px"
                        height="50px"
                        playing={false}
                        controls={true}
                        />;
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
