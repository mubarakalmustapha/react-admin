import React from 'react';
import "./newProduct.css";

function NewProduct(props) {
    return (
        <div className='newProduct'>
            <h1>New Product</h1>
            <form className='addProductForm'>
                <div className="addProductItem">
                    <label>Image</label>
                    <input type="file" id="file" />
                </div>
                <div className="addProductItem">
                    <label>Name</label>
                    <input type="text" placeholder='Apple iphone' />
                </div>
                <div className="addProductItem">
                    <label>Stock</label>
                    <input type="email" placeholder='123' />
                </div>
                <div className="addProductItem">
                    <label >Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="addProductButton">Create</button>
            </form>
        </div>
    );
}

export default NewProduct;