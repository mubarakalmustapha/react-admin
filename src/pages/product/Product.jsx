import { Publish } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import Chart from "../../components/chart/Chart";
import { productData } from "../../service";
import "./product.css";

function Product(props) {
    return (
        <div className='product'>
            <div className="productTittleContainer">
                <h1>Product</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart
                        data={productData}
                        dataKey="Sales"
                        title={"Sales Performance"}
                    />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="/img/iphone.jfif" alt="" className="productInfoImg" />
                        <span className="productName">Apple Iphone</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfokey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfokey">sales:</span>
                            <span className="productInfoValue">5241</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfokey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfokey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <span>Product Name</span>
                        <input type="text" placeholder='Apple iphone' />
                        <label>In Stock</label>
                        <select name="inStock" id="inStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label>Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img className='productUploadImg' src="/img/iphone.jfif" alt="" />
                            <label htmlFor="file"><Publish /></label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className='productButton'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Product;