import { LoadReportsCompleteActionType, LOAD_REPORT_DATA_COMPLETE } from './actions';

export interface Report {
    timestamp: string,
    message: string
}

export interface ReportState {
    reports: Array<Report>
};

const defaultState: ReportState = {
    reports: []
};

export const reportReducer = (
    state: ReportState = defaultState,
    action: LoadReportsCompleteActionType): ReportState => {
    switch (action.type) {
        case LOAD_REPORT_DATA_COMPLETE:
            return {
                reports: action.payload.reports
            }
        default:
            return state
    }
}