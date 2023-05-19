import React from 'react';

const UniformSeries = ({type, onInterestChange, onYearsChange, onIncrementAmountChange}) => {

    return(
        <div className="container" style={{'height':'350px'}}>
            <h2 style={{'fontWeight': '200'}}>Uniform/Linear Gradient Series</h2>
            <label htmlFor="incrementAmount">Increment Amount each year</label>
            <input type="number" name="incrementAmount" id="incrementAmount" onChange={onIncrementAmountChange} />
            <label htmlFor="rate">Interest Rate (%)</label>
            <input type="number" name="rate" id="rate" onChange={onInterestChange} />
            <label htmlFor="years">Number of Years (yrs)</label>
            <input type="number" name="years" id="years" onChange={onYearsChange} />
        </div>
    );
}

export default UniformSeries;