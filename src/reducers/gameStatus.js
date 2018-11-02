function gameStatus(state = 'menu', action){
    switch (action.type) {
      case 'SET_GAME_STATUS':
        return action.difficulty
      case 'SET_DIFFICULTY':
        return 'quizzing'
      default:
        return state
    }
  }
  
  export default gameStatus;