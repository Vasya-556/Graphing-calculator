import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import '../App.css';

function GenerateData(xValues, equations) {
    // Generate data for each equation
    const data = equations.flatMap(({ equation, color }) => {
        // Calculate y-values using the provided equation
        const yValues = xValues.map(x => {
            try {
                // eslint-disable-next-line
                return eval(equation.replace('x', `(${x})`)); // Safely evaluate equation
            } catch (error) {
                return null; // Return null for invalid equations
            }
        });
    
        // Split the data into segments to avoid connecting periodic lines
        const segments = [];
        let segmentStartIndex = 0;
        for (let i = 1; i < xValues.length; i++) {
            if (Math.abs(yValues[i] - yValues[i - 1]) > 1) { // Threshold to detect jumps
                segments.push({
                    x: xValues.slice(segmentStartIndex, i),
                    y: yValues.slice(segmentStartIndex, i),
                    type: 'scatter',
                    mode: 'lines',
                    line: { color: color },
                    hoverinfo: 'none',
                    showlegend: false // Hide the trace in the legend
                });
                segmentStartIndex = i;
            }
        }
    
        // Add the last segment
        segments.push({
            x: xValues.slice(segmentStartIndex),
            y: yValues.slice(segmentStartIndex),
            type: 'scatter',
            mode: 'lines',
            line: { color: color },
            hoverinfo: 'none',
            showlegend: false // Hide the trace in the legend
        });
    
        return segments;
    });

    return data;
}

function CoordinateSystem({ equations }) {
    const [data, setData] = useState([]);
    
    var Range = Math.abs(window.innerWidth/window.innerHeight);
    const [axisRanges, setAxisRanges] = useState({ x: [-(4*Range), (4*Range)], y: [-4, 4] }); 
    
    useEffect(() => {
        const xValues = [];
        for (let i = axisRanges.x[0]; i <= axisRanges.x[1]; i += 0.01) {
            xValues.push(i);
        }
        setData(GenerateData(xValues, equations));
    }, [equations, axisRanges]);

    const handlePlotlyRelayout = (event) => {
        const newAxisRanges = { ...axisRanges };

        if (event['xaxis.range[0]'] !== undefined && event['xaxis.range[1]'] !== undefined) {
            newAxisRanges.x = [event['xaxis.range[0]'], event['xaxis.range[1]']];
        }
        if (event['yaxis.range[0]'] !== undefined && event['yaxis.range[1]'] !== undefined) {
            newAxisRanges.y = [event['yaxis.range[0]'], event['yaxis.range[1]']];
        }

        setAxisRanges(newAxisRanges);
    };

    const resetViewPoint = () => {
        // Reset the axis ranges to their initial values
        setAxisRanges({ x: [-(4*Range), (4*Range)], y: [-4, 4] });
    };

    const decreaseScale = () => {
        const factor = 1.1; 
        setAxisRanges({
            x: [axisRanges.x[0] * factor, axisRanges.x[1] * factor],
            y: [axisRanges.y[0] * factor, axisRanges.y[1] * factor]
        });
    };

    const increaseScale = () => {
        const factor = 0.9; 
        setAxisRanges({
            x: [axisRanges.x[0] * factor, axisRanges.x[1] * factor],
            y: [axisRanges.y[0] * factor, axisRanges.y[1] * factor]
        });
    };

    const layout = {
        xaxis: {
            range: axisRanges.x,
            dtick: 1,
        },
        yaxis: {
            range: axisRanges.y,
            dtick: 1,
        },
        autosize: false,
        width: window.innerWidth,
        height: window.innerHeight,
        ticklabelposition: 'inside',
        dragmode: 'pan'
    };

    const config = {
        displayModeBar: false,
        scrollZoom: true
    };

    return (
        <div className="full-page-container">
            <div id='plot'>
            <Plot
                data={data}
                layout={layout}
                config={config}
                onRelayout={handlePlotlyRelayout}
            />
            </div>
            <div className="footer-buttons">
                <button 
                className='Reset-button'
                onClick={resetViewPoint}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"/></svg>
                </button>
                <button className='Minus-button'
                onClick={decreaseScale}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
                </button>
                <button className='Plus-button'
                 onClick={increaseScale}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                </button>
            </div>
        </div>
    );
}

export default CoordinateSystem;