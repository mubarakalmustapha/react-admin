import React from 'react';
import { Language, NotificationsNone, Settings } from '@material-ui/icons';
import "./topbar.css";

function Topbar(props) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">MuAb</span>
                </div>
                <div className="topright">
                    <div className="topbarIconContiner">
                        <NotificationsNone />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconContiner">
                        <Language />
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconContiner">
                        <Settings />
                    </div>
                    <img src={`${PF}mbCoder.jpg`} alt="" className="topAvata" />
                </div>
            </div>
        </div>
    );
}

export default Topbar;