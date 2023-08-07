import React from "react";
import questionIcon from '../assets/question.png'
import UsersTable from "./UsersTable";
import { tableHead, users } from "../contstants";

const ContributorCard = () => {
    return (<>
        <div className="text-align">
            <h4 className="text-status">Top Contributors</h4>
            <p className="text-center">Weekly <img src={questionIcon} style={{ marginLeft: '1rem' }} /></p>
        </div>
        <table>
            <tr className="table-head">
                <th className="first-head"></th>
                {
                    tableHead.map((data) => {
                        return <th>{data}</th>
                    })
                }
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