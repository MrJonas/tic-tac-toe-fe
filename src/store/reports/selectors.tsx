import { createSelector } from 'reselect';
import { Report } from './reducer';
import { AppState } from './../store';

const getReports = (state: AppState) => state.reports.reports;

const reportsLogSelector = createSelector(
    getReports,
    (reports: Array<Report>) => reports
)

export const reportsLogSelectors = {
    reportsLogSelector
}


