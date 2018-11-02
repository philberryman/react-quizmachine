import { connect } from 'react-redux';
import Header from '../components/Header.js'
import { setDifficulty } from '../actions'


const mapStateToProps = state => {
  return {
  score: state.score,
  difficulty: state.difficulty
  };
};

const mapDispatchToProps = dispatch => {
    return {
      handleChangeDifficulty: difficulty => {
        dispatch(setDifficulty(difficulty))
      },
    }
  };


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);