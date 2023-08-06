import React from "react";
import questionIcon from '../assets/question.png'

const IssueCard = () => {
    return (<>
        <div className="text-align">
            <h4>Jira Issue Status</h4>
            <p className="text-center">Daily <img src={questionIcon} style={{ marginLeft: '1rem' }} /></p>
        </div>
        <h5 className="opacity-level">May 24</h5>
        <div className="graphs">
            <div className="graphs-content">
                <div className="orange-graph"></div>
                <p className="graph-no">42</p>
            </div>
            <div className="graphs-content">
                <div className="green-graph"></div>
                <p className="graph-no">29</p>
            </div>
            <div className="graphs-content">
                <div className="red-graph"></div>
                <p className="graph-no">19</p>
            </div>
        </div>
        <div className="issues">
            <p className="issue-text"><span className="issue-warning created"></span> Issues created</p>
            <p className="issue-text"><span className="issue-warning resolved"></span> Issues resolved</p>
            <p className="issue-text"><span className="issue-warning progress"></span> Issues in progress</p>
        </div>
        <div className="issues-reports report-no">
            <p className="report-text">1k</p>
            <p className="report-text">90</p>
        </div>
        <div className="issues-reports report-data">
            <p className="report-text">Issue in Total Added this week</p>
            <p className="report-text">Issues today</p>
        </div>
        <hr className="hr-dotted" />
        <div className="issue-content">
            <span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></span>
            <p className="issue-textcontent">Higher by 50% compared to last week at 500</p>
        </div>
    </>)
};

export default IssueCard;