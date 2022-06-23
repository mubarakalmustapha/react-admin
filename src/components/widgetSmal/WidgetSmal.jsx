import React from 'react';
import { Visibility } from '@material-ui/icons';
import "./widgetSmal.css";

function WidgetSmal(props) {
    return (
        <div className='widgetSm'>
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li>
                    <img src="./img/user-4.png" alt="" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Doe</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />Display
                    </button>
                </li>
                <li>
                    <img src="./img/user-2.png" alt="" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">John Smith</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />Display
                    </button>
                </li>
                <li>
                    <img src="./img/user-3.png" alt="" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Rabbecaa</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />Display
                    </button>
                </li>
                <li>
                    <img src="./img/user-4.png" alt="" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Emma</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />Display
                    </button>
                </li>
                <li>
                    <img src="./img/mbCoder.jpg" alt="" className="widgetSmImage" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Mubarak Almustapha</span>
                        <span className="widgetSmUserTitle">Software Engineer</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />Display
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default WidgetSmal;