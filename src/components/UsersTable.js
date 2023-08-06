import React from "react";
import violetIcon from '../assets/violete-icon.png'
import yellowIcon from '../assets/yellow-icon.png'

const UsersTable = ({ data }) => {
    return (
        <>
            <tr className="row-data">
                <td className="first-row"><img src={data.isYellow ? yellowIcon : violetIcon} /></td>
                <td className="td-name">{data.name}</td>
                <td>{data.closed}</td>
                <td>{data.reviewed}</td>
                <td className="score-color">{data.score}</td>
            </tr>
        </>
    )
}

export default UsersTable;