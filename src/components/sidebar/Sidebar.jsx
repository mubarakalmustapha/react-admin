import { AttachMoney, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PermIdentity, Report, Storefront, Timeline, TrendingUp, WorkOutline } from '@material-ui/icons';
import React from 'react';
import { BarChart } from 'recharts';
import { Link } from "react-router-dom";
import "./sidebar.css";

function Sidebar(props) {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashbord</h3>
                    <ul className="sidebarlist">
                        <Link to="/" className='link'>
                            <li className='active'>
                                <LineStyle className="sidebarIcon" />Home
                            </li>
                        </Link>
                        <li><Timeline className="sidebarIcon" />analytics</li>
                        <li><TrendingUp className="sidebarIcon" />sales</li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarlist">
                        <Link to="/users" className='link'>
                            <li><PermIdentity className="sidebarIcon" />Users</li>
                        </Link>
                        <Link to="/products" className='link'>
                            <li><Storefront className="sidebarIcon" />Products</li>
                        </Link>
                        <li><AttachMoney className="sidebarIcon" />Transactions</li>
                        <li><BarChart className="sidebarIcon" />Reports</li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarlist">
                        <li><MailOutline className="sidebarIcon" />Mail</li>
                        <li><DynamicFeed className="sidebarIcon" />Feedback</li>
                        <li><ChatBubbleOutline className="sidebarIcon" />Message</li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarlist">
                        <li><WorkOutline className="sidebarIcon" />Manage</li>
                        <li><Timeline className="sidebarIcon" />analytics</li>
                        <li><Report className="sidebarIcon" />Reports</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;