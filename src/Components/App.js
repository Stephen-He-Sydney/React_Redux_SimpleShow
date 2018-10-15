import { withRouter } from 'react-router'
import Dashboard from './Dashboard'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as EmployeeDashboard from '../Redux/Actions/EmployeeDashboard'

function mapStateToProps(state) {
  return {
    EmployeeDashboard: state.EmployeeDashboard
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...EmployeeDashboard
    }, dispatch)
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))

export default App
