import { connect } from 'react-redux';
import Reports from './reports';
import {reportsLogSelectors, reportActionCreators} from './../../store/reports/';
import { AppState } from './../../store';

const mapStateToProps = (state: AppState) => ({
    reports: reportsLogSelectors.reportsLogSelector(state)
})
  
const mapDispatchToProps = {
    loadReports: reportActionCreators.loadReports
}
  
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Reports)