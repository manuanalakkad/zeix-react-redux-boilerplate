import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Main from '../Main/index';

import * as actionCreators from '../Topic/actions.js';

function mapStateToProps (state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;