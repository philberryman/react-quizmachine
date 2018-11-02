export function receiveQuestion(question){
  console.log('Step 4 - creating RECEIVE_QUESTION question object')
  return {
    type: 'RECEIVE_QUESTION',
    question: question
  };
};

export function receiveAnswers(correct_answer, incorrect_answers){
  const answers = incorrect_answers.concat(correct_answer)
  return {
    type: 'RECEIVE_ANSWERS',
    answers: {correct: correct_answer, incorrect: incorrect_answers}
  }
}


export function updateScore(correct){
  return {
    type: 'UPDATE_SCORE',
    correct: correct
  }
}

export function setDifficulty(difficulty) {
  return {
    type: 'SET_DIFFICULTY',
    difficulty: difficulty
  }
}


export function fetchQuestionFromAPI(){
  console.log('step 3: calling fetch')
  return function(dispatch, getState){
    const difficulty = (getState().difficulty)
    console.log(difficulty)
    fetch(`https://opentdb.com/api.php?amount=1&type=multiple&difficulty=${difficulty}`)
    .then(response => response.json())
    .then(result => {
      dispatch(receiveQuestion(result.results[0].question))
      dispatch(receiveAnswers(result.results[0].correct_answer, result.results[0].incorrect_answers))
    })
    .catch(function(error) {
      // something went wrong. let's sort it out
    });
  }
}