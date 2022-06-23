import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import "./userList.css";
import { DeleteOutlined } from '@material-ui/icons';
import { userRows } from "../../service";
import { Link } from "react-router-dom";

function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (userId) => {
        setData(data.filter(u => u.id !== userId));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'user', headerName: 'User', width: 200, renderCell: user => {
                return (
                    <div className='userListUser'>
                        <img className='usertListImg' src={user.row.avata} alt="" />
                        {user.row.username}
                    </div>
                )
            }
        },
        { field: 'email', headerName: 'Email', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            type: 'number',
            width: 120,
        },
        {
            field: 'transaction',
            headerName: 'Transaction Volume',
            type: 'number',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: item => {
                return (
                    <>
                        <Link to={`/user/edit/${item.row.id}`}>
                            <button className="editButton">Edit</button>
                        </Link>
                        <DeleteOutlined className="deleteButton"
                            onClick={() => handleDelete(item.row.id)}
                        />
                    </>
                )
            }
        },

    ];

    return (
        <div className='userList'>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                checkboxSelection
            />
        </div>
    );
}

export default UserList;