import { connect } from 'react-redux';
import Answers from '../components/Answers.js'
import { updateScore, fetchQuestionFromAPI } from '../actions'

const mapStateToProps = state => {
  console.log(state.answers)
  return {
  answers: state.answers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClick: answerIsCorrect => {
      dispatch(updateScore(answerIsCorrect))
      dispatch(fetchQuestionFromAPI())
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Answers);