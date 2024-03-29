import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React from 'react';
import "./featuredInfo.css";

function FeaturedInfo(props) {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,34</span>
                    <span className="featuredMoneyRate">
                        -12.1 <ArrowDownward className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,34</span>
                    <span className="featuredMoneyRate">
                        -1.1 <ArrowDownward className="featuredIcon negative" /></span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,34</span>
                    <span className="featuredMoneyRate">
                        +2.1 <ArrowUpward className="featuredIcon" /></span>
                </div>
                <span className="featuredSub">Compare to last month</span>
            </div>
        </div>
    );
}

export default FeaturedInfo;