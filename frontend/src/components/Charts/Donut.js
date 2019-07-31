import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2';

// We can get rid of this randomizer once we have actual data
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getState = () => ({
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
});

class Donut extends Component {

    getInitialState() {
        return getState();
    }

    componentWillMount() {
        setInterval(() => {
            this.setState(getState());
        }, 1000);
    }

    render() {
        return (
            <>
                <div>
                    <h2>Dynamicly refreshed Doughnut</h2>
                    <Doughnut data={ this.state } options={ {
                        cutoutPercentage: 80,
                        rotation: 120
                    } } />
                </div>
            </>
        );
    }
}

export default Donut;