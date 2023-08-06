import React from "react";
import questionIcon from '../assets/question.png'
import UsersTable from "./UsersTable";

let users = [
    {
        id: 1,
        name: 'Srinivas',
        closed: 68,
        reviewed: 68,
        score: 987,
        isYellow: true
    },
    {
        id: 2,
        name: 'Tom',
        closed: 48,
        reviewed: 48,
        score: 793,
        isYellow: true
    },
    {
        id: 3,
        name: 'Nawaz',
        closed: 42,
        reviewed: 42,
        score: 682,
        isYellow: false
    },
    {
        id: 4,
        name: 'Noah',
        closed: 34,
        reviewed: 34,
        score: 500,
        isYellow: false
    },
]
const ContributorCard = () => {
    return (<>
        <div className="text-align">
            <h4 className="text-status">Top Contributors</h4>
            <p className="text-center">Weekly <img src={questionIcon} style={{ marginLeft: '1rem' }} /></p>
        </div>
        <table>
            <tr className="table-head">
                <th className="first-head"></th>
                <th>Contributors</th>
                <th>Closed</th>
                <th>Reviewed</th>
                <th>Score</th>
            </tr>
            {
                users.map((data) => {
                    return <>
                        <UsersTable data={data} />
                    </>
                })
            }
        </table>
        <hr className="hr-dotted" />
        <div className="issue-content">
            <span><i class="fa fa-sort-desc" aria-hidden="true"></i></span>
            <p className="issue-textcontent">Higher by 50% compared to last week at 500</p>
        </div >
    </>)
};

export default ContributorCard;