function answers(state = {}, action){
    switch (action.type) {
      case 'RECEIVE_ANSWERS':
        return action.answers
      default:
        return state
    }
  }
  
  export default answers;