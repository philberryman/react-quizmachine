function difficulty(state = '', action){
    switch (action.type) {
      case 'SET_DIFFICULTY':
        return action.difficulty
      default:
        return state
    }
  }
  
  export default difficulty;
  