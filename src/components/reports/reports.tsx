import React, {useEffect} from 'react';
import { Report } from './../../store/reports/';

interface reportsProps {
    reports: Array<Report>,
    loadReports(): void
}

const Reports: React.FC<reportsProps> = ({reports, loadReports}) => {
    useEffect(()=> {
        loadReports();
    }, [])
    return (
        <div className="report-log">
          <h6>--- action log ---</h6>
          { reports.map((log, i) => <div key={log.timestamp}>{`${log.timestamp} - ${log.message}`}</div>)  }
        </div>
  );
}

export default React.memo(Reports);
