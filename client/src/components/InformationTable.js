import React, { useState, useEffect } from 'react';
import style from './styles';
import axios from 'axios';

const InformationTable = (props) => {
	const [phoneData, setPhoneData] = useState([]);

	useEffect(() => {
		axios.get('/api').then((res) => {
			setPhoneData(res.data.data);
		});
	}, []);

	console.log('d', phoneData);
	/*
    createdAt: "2020-12-21"
    firstName: "Aydin"
    id: 1
    lastName: "Sanoz"
    phoneNumber: 2132132112
    updatedAt: "2020-12-21"
    */

	return (
		<table style={style.table.container} className="informationTable">
			<thead>
				<tr>
					<th style={style.table.tableCell}>First Name</th>
					<th style={style.table.tableCell}>Last Name</th>
					<th style={style.table.tableCell}>Phone</th>
				</tr>
			</thead>
			{phoneData.map((data) => (
				<tbody>
					<tr>
						<td style={style.table.tableCell}>{data.firstName}</td>
						<td style={style.table.tableCell}>{data.lastName}</td>
						<td style={style.table.tableCell}>{data.phoneNumber}</td>
					</tr>
				</tbody>
			))}
		</table>
	);
};

export default InformationTable;
