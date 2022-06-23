import React from 'react';
import "./newUser.css";

function NewUser(props) {
    return (
        <div className='newUser'>
            <h1 className="newUserTittle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder='John' />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder='John Smith' />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder='john@gmail.com' />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="password" placeholder='Password' />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder='+2349023874654' />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder='Sokoto | Nigeria' />
                </div>
                <div className="newUserItem">
                    <label >Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="male" value={"male"} id="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="female" value={"female"} id="female" />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="other" value={"other"} id="other" />
                        <label htmlFor="other">Other</label>
                        <button className="newUserButton">Create</button>
                    </div>
                </div>
                <div className="newUserItem">
                    <label >Active</label>
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </form>
        </div>
    );
}

export default NewUser;