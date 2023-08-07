import React from "react";
import questionIcon from '../assets/question.png'
import { graphData, issueLogs } from "../contstants";


const IssueCard = () => {
    return (<>
        <div className="text-align">
            <h4 className="text-status">Jira Issue Status</h4>
            <p className="text-center">Daily <img src={questionIcon} style={{ marginLeft: '1rem' }} /></p>
        </div>
        <h5 className="opacity-level">May 24</h5>
        <div className="graphs">
            {
                graphData.map((data) => {
                    return <div className="graphs-content">
                        <div className={data.name}></div>
                        <p className="graph-no">{data.number}</p>
                    </div>
                })
            }
        </div>
        <div className="issues">
            {
                issueLogs.map((data, idx) => {
                    return <p className="issue-text"><span className={`issue-warning ${data.class}`}></span>{`${idx === data.length ? 'in ' + data.content : data.content}`}</p>
                })
            }
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