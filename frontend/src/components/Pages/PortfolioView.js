// functional component representing the Portfolio page in which
// a given user is able to setup a set of portfolios

import React from 'react';
import BaseTemplate from '../BaseTemplate';

import LineChart from '../Charts/LineChart';
// import Donut from '../Charts/Donut';
import NewDonut from '../Charts/NewDonut';

// test data to be used until API tied in
const test = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    prices: [65, 59, 80, 81, 56, 55, 40]
};

const PortfolioView = () => {
    return (
        <BaseTemplate>
            <h1>Portfolio View</h1>
            <NewDonut />
            <LineChart data={ test } />
        </BaseTemplate>
    )
};

export default PortfolioView;
