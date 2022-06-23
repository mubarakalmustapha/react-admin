import React from 'react';
import "./widgetLarge.css";

function WidgetLarge(props) {
    const Button = ({ type }) => {
        return (
            <button className={'widgetLgBtutton ' + type}>{type}</button>
        )
    }

    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">Latest Transaction</h3>
            <table className="widgetLgTable">
                <thead>
                    <tr>
                        <th className='widgetLgTh'>Customer</th>
                        <th className='widgetLgTh'>Date</th>
                        <th className='widgetLgTh'>Amount</th>
                        <th className='widgetLgTh'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="widgetLgUser">
                            <img src="./img/user-4.png" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">John Doe</span>
                        </td>
                        <td className="widgetLgDate">22 april 2022</td>
                        <td className="widgetLgAmount">$12.2</td>
                        <td className="widgetLgStatus"><Button type={"Approved"} /></td>
                    </tr>
                </tbody>
            </table>
            <table className="widgetLgTable">
                <tbody>
                    <tr>
                        <td className="widgetLgUser">
                            <img src="./img/user-2.png" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">John Smith</span>
                        </td>
                        <td className="widgetLgDate">22 april 2022</td>
                        <td className="widgetLgAmount">$12.2</td>
                        <td className="widgetLgStatus"><Button type={"Declined"} /></td>
                    </tr>
                </tbody>
            </table>
            <table className="widgetLgTable">
                <tbody>
                    <tr>
                        <td className="widgetLgUser">
                            <img src="./img/user-3.png" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">Rabbeca</span>
                        </td>
                        <td className="widgetLgDate">22 april 2022</td>
                        <td className="widgetLgAmount">$12.2</td>
                        <td className="widgetLgStatus"><Button type={"Pending"} /></td>
                    </tr>
                </tbody>
            </table>
            <table className="widgetLgTable">
                <tbody>
                    <tr>
                        <td className="widgetLgUser">
                            <img src="./img/user-4.png" alt="" className="widgetLgImg" />
                            <span className="widgetLgName">Emma</span>
                        </td>
                        <td className="widgetLgDate">22 april 2022</td>
                        <td className="widgetLgAmount">$12.2</td>
                        <td className="widgetLgStatus"><Button type={"Approved"} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default WidgetLarge;