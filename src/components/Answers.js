import React from 'react';

    function Answers({handleClick, answers}) {
    

    const answersList = answers.correct?answers.incorrect.concat(answers.correct):[]
    console.log(answersList)
 
    return (
          <ul>
            {answersList?(
                answersList.map(answer => {
                    return (
                        <li key={answer} onClick={event => handleClick(answer===answers.correct)}>{answer}</li>
                    )
                })
            ):''}
        </ul>
    )
  }

export default Answers;