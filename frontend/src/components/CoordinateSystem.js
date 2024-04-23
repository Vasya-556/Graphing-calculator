import React from 'react';
import Plot from 'react-plotly.js';

function CoordinateSystem({ func }) {
    const xValues = [];
    for (let i = -10; i <= 10; i += 0.1) {
        xValues.push(i);
    }

    const yValues = xValues.map(func);
    const funcName = func.toString(); 

    const data = [
        {
            x: xValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines',
            name: funcName
        }
    ];

    const layout = {
        xaxis: {
            title: 'x'
        },
        yaxis: {
            title: 'y'
        }
    };

    return (
        <Plot
            data={data}
            layout={layout}
        />
    );
}

export default CoordinateSystem;
