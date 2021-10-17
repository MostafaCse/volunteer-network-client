import React from 'react';

const RegTableInfo = ({ info, index }) => {
    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{info.FullName}</td>
            <td>{info.Email}</td>
            <td>{info.date}</td>
            <td>{info.Organize}</td>
        </tr>
    );
};

export default RegTableInfo;