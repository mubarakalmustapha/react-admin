import React, { useState } from 'react';
import { productRows } from "../../service";
import { DataGrid } from '@material-ui/data-grid';
import { Link } from "react-router-dom";
import { DeleteOutlined } from '@material-ui/icons';
import "./productList.css";

function ProductList(props) {
    const [data, setData] = useState(productRows);

    const handleDelete = (userId) => {
        setData(data.filter(u => u.id !== userId));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: user => {
                return (
                    <div className='userListUser'>
                        <img src={user.row.img} alt="" />
                        {user.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {
            field: 'status',
            headerName: 'Status',
            type: 'number',
            width: 120,
        },
        {
            field: 'price',
            headerName: 'Price',
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
                        <Link to={`/product/edit/${item.row.id}`}>
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
        <div className='productList'>
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

export default ProductList;