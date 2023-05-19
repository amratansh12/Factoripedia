import React from 'react';
import './Result.css'

const Result = ({type, interest, years, factor, factorCalculate,abygForUniform,pbyfForGeometric ,incrementAmount, incrementPercentage, selectedFactor, firstYearEndAmount}) => {
    return(
        <div className="containerResult">
            <h2 id='resultHeading'>factor is</h2>
            <h2 id='factorValue'>{factor}</h2>
            {/* <p id='normalFactors'> {type} , {interest} , {years} , {incrementPercentage}</p> */}
            <button onClick={(selectedFactor === 'uniform') ? abygForUniform : ((selectedFactor === 'geometric') ? pbyfForGeometric : factorCalculate)}>Generate factor</button>
            <p id='uniformResult'>{(selectedFactor === 'uniform')?'Annual equivalent for the entered Uniform Gradient amount is Rs. ' + incrementAmount*factor : ((selectedFactor === 'geometric') ? 'Present worth for the entered Uniform first year end amount is Rs. ' + firstYearEndAmount*factor : null) }</p>
        </div>
    );
}

export default Result;