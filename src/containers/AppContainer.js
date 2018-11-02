import { connect } from 'react-redux';
import App from '../components/App.js'

const mapStateToProps = state => {
  return {
  gameStatus: state.gameStatus
  };
};


export default connect(
  mapStateToProps,
  
)(App);