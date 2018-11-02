import { connect } from 'react-redux';
import Question from '../components/Question.js'
import { fetchQuestionFromAPI } from '../actions';


const mapStateToProps = state => {
  return {
  question: state.question,
  };
};

const mapDispatchToProps = dispatch => {
    return {
      fetchQuestion: () => {
        console.log('Step 2: getting action creator')  
        dispatch(fetchQuestionFromAPI())
      },
      handleClick: (answer) => {
          console.log(answer)
          dispatch(answer)
      }
    }
  };


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);