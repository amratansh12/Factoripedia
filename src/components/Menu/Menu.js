import React from 'react';
import './Menu.css'

const Menu = ({onSelectedFactorChange}) => {
    return(
        <div className="menu">
            <li onClick={() => onSelectedFactorChange('normal')} id='normal'>Normal Factors</li>
            <li onClick={() => onSelectedFactorChange('uniform')} id='uniform'>Uniform Gradient Series</li>
            <li onClick={() => onSelectedFactorChange('geometric')} id='geometric'>Geometric Gradient Series</li>
            {/* <li onClick={() => onSelectedFactorChange('compound')} id='compound'>Compound Factors</li> */}
        </div>
    );
}

export default Menu;