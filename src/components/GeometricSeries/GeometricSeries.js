import React from 'react';

const GeometricSeries = ({onInterestChange, onYearsChange, onIncrementPercentChange, onFirstYearEndAmount}) => {

    return(
        <div className="container" style={{'height':'400px'}}>
            <h2 style={{'fontWeight': '200'}}>Geometric Gradient Series</h2>
            <label htmlFor="firstAmount">First year end Amount</label>
            <input type="number" name="firstAmount" id="firstAmount" onChange={onFirstYearEndAmount}/>
            <label htmlFor="incrementPercent">Increment Percentage each year (%)</label>
            <input type="number" name="incrementPercent" id="incrementPercent" onChange={onIncrementPercentChange} />
            <label htmlFor="rate">Interest Rate (%)</label>
            <input type="number" name="rate" id="rate" onChange={onInterestChange} />
            <label htmlFor="years">Number of Years (yrs)</label>
            <input type="number" name="years" id="years" onChange={onYearsChange} />
        </div>
    );
}

export default GeometricSeries;