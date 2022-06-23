import React from 'react';
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@material-ui/icons';
import { Link } from "react-router-dom";
import "./user.css";

function User(props) {
    return (
        <div className='user'>
            <div className="userTittleContainer">
                <h1 className="userTittle">Edit User</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userDisplay">
                    <div className="userDisplayTop">
                        <img src="/img/mbCoder.jpg" alt="" />
                        <div className="userShowTopTittle">
                            <span className="userShowUsername">Mubarak Almustapha</span>
                            <span className="userShowuserTittle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userDisplayBottom">
                        <span className="userShowTittle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTittle">Mubarak99</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTittle">10.11.1999</span>
                        </div>
                        <span className="userShowTittle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTittle">+2348100680153</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTittle">Mubarak99@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTittle">Sokoto Nigeria</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpadateTittle">Edit</span>
                    <form className='userUpdateForm'>
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label htmlFor="">Username</label>
                                <input className="usernameInput" type="text" placeholder='Mubarak99' />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Full Name</label>
                                <input className="usernameInput" type="text" placeholder='Mubarak Almustapha' />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Email</label>
                                <input className="usernameInput" type="text" placeholder='Mubarak99@gmail.com' />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Phone</label>
                                <input className="usernameInput" type="text" placeholder='+2348100680153' />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Address</label>
                                <input className="usernameInput" type="text" placeholder='Sokoto Nigeria' />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="/img/mbCoder.jpg" alt="" />
                                <label htmlFor="file"><Publish className="updateUserIcon" /></label>
                                <input id="file" type="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default User;