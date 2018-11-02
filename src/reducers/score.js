function score(state = 0, action){
    switch (action.type) {
      case 'UPDATE_SCORE':
        return action.correct?state+1:0
      default:
        return state
    }
  }
  
  export default score;