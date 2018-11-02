import { connect } from 'react-redux';
import Menu from '../components/Menu.js'
import { setDifficulty, fetchQuestionFromAPI } from '../actions'


const mapStateToProps = state => {
  console.log(state)
  return {
  score: state.score,
  difficulty: state.difficulty
  };
};

const mapDispatchToProps = dispatch => {
    return {
      handleChangeDifficulty: difficulty => {
        console.log(difficulty)
        dispatch(setDifficulty(difficulty))
        dispatch(fetchQuestionFromAPI)
      },
    }
  };


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);