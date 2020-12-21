import React from 'react';
import style from './styles';

const InformationTable = (props)=>{
    return(
        <table style = {style.table.container} className = "informationTable">
            <thead>
                <tr>
                    <th style = {style.table.tableCell}>First Name</th>
                    <th style = {style.table.tableCell}>Last Name</th>
                    <th style = {style.table.tableCell}>Phone</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style = {style.table.tableCell}>firstName</td>
                    <td style = {style.table.tableCell}>lastName</td>
                    <td style = {style.table.tableCell}>phone</td>
                </tr>
            </tbody>
        </table>
    )
}

export default InformationTable;