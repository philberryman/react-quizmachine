import React from 'react';
import MenuContainer from '../containers/MenuContainer.js'
import HeaderContainer from '../containers/HeaderContainer.js'
import QuestionContainer from '../containers/QuestionContainer.js'
import AnswerContainer from '../containers/AnswersContainer.js'

function App ({gameStatus}) {
    console.log(gameStatus)
    return (
      <div>
      {gameStatus === 'menu' && (
        <MenuContainer />
      )
      }
      {gameStatus === 'quizzing' && (
        <React.Fragment>
          <HeaderContainer />
          <QuestionContainer />
          <AnswerContainer />
        </React.Fragment> 
      )
      }
      </div>
    )
  }

export default App;
