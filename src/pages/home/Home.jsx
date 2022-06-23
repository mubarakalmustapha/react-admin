import React from 'react';
import { userData } from "../../service";
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import "./home.css";
import WidgetSmal from '../../components/widgetSmal/WidgetSmal';
import WidgetLarge from '../../components/widgetLarge/WidgetLarge';


function Home(props) {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title={"User Analytics"} dataKey="Active User" grid />
            <div className="homeWidgets">
                <WidgetSmal />
                <WidgetLarge />
            </div>
        </div>
    );
}

export default Home;