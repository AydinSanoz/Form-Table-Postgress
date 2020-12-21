import React from 'react';

const style = {
	section: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	cw: {
		width: '8%',
		marginTop: '20px',
	},
	table: {
		container: {
			borderCollapse: 'collapse',
		},
		tableCell: {
			border: '1px solid gray',
			margin: 0,
			padding: '5px 10px',
			width: 'max-content',
			minWidth: '150px',
		},
	},

	form: {
		container: {
			padding: '20px',
			border: '1px solid #f0f8ff',
			borderRadius: '15px',
			width: 'max-content',
			marginTop: '50',
			marginBottom: '40px',
        },
        inputs:{
            marginBottom: "10px",
            width: "200px",
            height: "20px",
        },
		submitBtn: {
            marginTop: "10px",
            padding:" 10px 15px",
            border: "none",
            backgroundColor: "lightseagreen",
            fontsize: "14px",
            borderRadius: "5px",
            color: "white",
            fontWeight:" bold",

        },
	},
};
export default style;
