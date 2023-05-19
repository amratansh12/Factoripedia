import React from 'react';
import './NormalFactors.css';

const NormalFactors = ({onTypeChange, onInterestChange, onYearsChange}) => {

    return(
        <div className="container">
            <h2 style={{'fontWeight': '200'}}>Normal Factors</h2>
            <label htmlFor="factor">Type of Factor</label>
            <select name="factor" id="factor" onChangeCapture={onTypeChange}>
                <option value="fbyp">Single payment compound amount factor (F/P)</option>
                <option value="pbyf">Single payment present worth factor (P/F)</option>
                <option value="fbya">Equal payment series compound amount Factor (F/A)</option>
                <option value="abyf">Equal payment series sinking fund Factor (A/F)</option>
                <option value="abyp">Equal payment series capital recovery Factor (A/P)</option>
                <option value="pbya">Equal payment series present worth Factor (P/A)</option>
            </select>
            <label htmlFor="rate">Interest Rate (%)</label>
            <input type="number" name="rate" id="rate" onChange={onInterestChange} />
            <label htmlFor="years">Number of Years (yrs)</label>
            <input type="number" name="years" id="years" onChange={onYearsChange} />
        </div>
    );
}

export default NormalFactors;