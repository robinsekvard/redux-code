import './PageReport.css';
import React from 'react';
import { connect } from 'react-redux';
import Statistics from './Statistics';

const PageReport = ({ report }) => {
  if (!report) {
    return <div>Enter a URL to get started</div>;
  }

  return (
    <div className="page-report">
      <h1 className="ui center aligned header">Report For: {report.id}</h1>
      <Statistics report={report} />
    </div>
  );
};

const mapStateToProps = state => {
  return { report: state.reports[state.reports.length - 1] };
};

export default connect(mapStateToProps)(PageReport);