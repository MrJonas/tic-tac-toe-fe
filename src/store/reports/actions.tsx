import { Report } from './reducer';

export const LOAD_REPORT_DATA = 'report/LOAD_REPORT_DATA';
export const LOAD_REPORT_DATA_COMPLETE = 'report/LOAD_REPORT_DATA_COMPLETE';
export const LOAD_REPORT_DATA_ERROR ='report/LOAD_REPORT_DATA_ERROR';

export interface LoadReportsActionType {
    type: typeof LOAD_REPORT_DATA
}

const loadReports = (): LoadReportsActionType => ({
    type: LOAD_REPORT_DATA
})

export interface LoadReportsCompleteActionType {
    type: typeof LOAD_REPORT_DATA_COMPLETE,
    payload: {
        reports: Array<Report>
    }
}

const loadReportsComplete = (reports: Array<Report>): LoadReportsCompleteActionType => ({
    type: LOAD_REPORT_DATA_COMPLETE,
    payload: { reports }
})

export const reportActionCreators = {
    loadReports,
    loadReportsComplete
}