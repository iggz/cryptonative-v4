import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = [150, 200, 250];

const colorMap = { 'Red': '#FF6384', 'Blue': '#36A2EB', 'Yellow': '#FFCE56' };

function createColors(length) {
    const labels = [],
        bgColors = [],
        hovBgColors = [];

    for (let i = 0; i < length; i++) {
        const curr_color = Object.keys(colorMap)[i];
        labels.push(curr_color);
        const curr_color_hex = colorMap[curr_color];
        bgColors.push(curr_color_hex);
        hovBgColors.push(curr_color_hex);
    }
    return { labels, bgColors, hovBgColors }
};

// const getState = () => ({
//     labels: [
//         'Red',
//         'Blue',
//         'Yellow'
//     ],
//     datasets: [{
//         data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
//         backgroundColor: [
//             '#FF6384',
//             '#36A2EB',
//             '#FFCE56'
//         ],
//         hoverBackgroundColor: [
//             '#FF6384',
//             '#36A2EB',
//             '#FFCE56'
//         ]
//     }]
// });

const test_length = 3;

export default function NewDonut() {
    // TODO: Construct the data object to pass into
    // the <Doughnut> component
    const { labels, bgColors, hovBgColors } = createColors(test_length);
    // const colorData = createColors(test_length);
    // const labels = colorData.labels,
    //         bgColors = colorData.bgColors,
    //         hovBgColors = colorData.hovBgColors;

    const data_to_pass_in = {
        labels: labels,
        datasets: [{
            data: data,
            backgroundColor: bgColors,
            hoverBackgroundColor: hovBgColors
        }]
    };

    return (
        <>
            <div>
                <h2>Dynamicly refreshed Doughnut</h2>
                <Doughnut data={ data_to_pass_in } options={ {
                    cutoutPercentage: 80,
                    rotation: 120
                } } />
            </div>
        </>
    );
};


