import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

function CoordinateSystem({ func }) {
    // Define state variables to hold the dimensions of the plot
    const [plotDimensions, setPlotDimensions] = useState({ width: 0, height: 0 });

    // Percantage of screen for plot
    const percentage = 0.6;
    
    // Function to calculate plot dimensions based on screen size
    const calculatePlotDimensions = () => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const width = screenWidth * percentage; 
        const height = screenHeight * percentage; 
        setPlotDimensions({ width, height });
    };

    useEffect(() => {
        calculatePlotDimensions();
        // Recalculate plot dimensions when the window size changes
        window.addEventListener('resize', calculatePlotDimensions);
        // Cleanup function to remove the event listener
        return () => window.removeEventListener('resize', calculatePlotDimensions);
    }, []);

    // Fill graph x-values from -10 to 10 with a step of 0.1
    const xValues = [];
    for (let i = -10; i <= 10; i += 0.1) {
        xValues.push(i);
    }

    // Calculate y-values using the provided function
    const yValues = xValues.map(func);

    // Define the data for the plot
    const data = [
        {
            x: xValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines',
        }
    ];

    // Define the layout settings for the plot
    const layout = {
        xaxis: {
            title: 'x',
            fixedrange: true,
            range: [-10, 10],
            dtick: 1
        },
        yaxis: {
            title: 'y',
            fixedrange: true,
            range: [-4, 4],
            dtick: 1
        },
        width: plotDimensions.width,
        height: plotDimensions.height
    };

    // Define the configuration settings for the plot
    const config = {
        displayModeBar: false
    };

    return (
        <Plot
            data={data}
            layout={layout}
            config={config}
        />
    );
}

export default CoordinateSystem;
