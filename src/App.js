import React, {Component} from 'react'
import Navbar from './components/Navbar/Navbar'
import NormalFactors from './components/NormalFactors/NormalFactors'
import Result from './components/Result/Result'
import Menu from './components/Menu/Menu'
import UniformSeries from './components/UniformSeries/UniformSeries'
import GeometricSeries from './components/GeometricSeries/GeometricSeries'
import Footer from './components/Footer/Footer'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      type: 'fbyp',
      interest: 0,
      years: 0,
      factor: 0,
      selectedFactor: 'normal',
      incrementAmount: 0, //for uniform gradient series
      incrementPercentage: 0, //for geometric gradient series
      firstYearEndAmount: 0 //for geometric gradient series
    }
  }

  onIncrementPercentChange = (event) => {
    this.setState({incrementPercentage: event.target.value})
    this.setState({type: 'pbyf'})
  }

  onFirstYearEndAmount = (event) => {
    this.setState({firstYearEndAmount: event.target.value})
  }

  onIncrementAmountChange = (event) => {
    this.setState({incrementAmount: event.target.value})
    this.setState({type:'abyg'})
  }

  onSelectedFactorChange = (selection) => {
    this.setState({selectedFactor: selection})
  }

  onTypeChange = (event) => {
    this.setState({type: event.target.value});
  }

  onInterestChange = (event) => {
    this.setState({interest: event.target.value});
  }

  onYearsChange = (event) => {
    this.setState({years: event.target.value});
  }

  abygForUniform = () => {
    const {interest, years} = this.state;
    this.setState({factor: (100/interest)-(years/(Math.pow( (1+interest/100),years )-1)) })
  }

  pbyfForGeometric = () => {
    const {incrementPercentage, years, interest} = this.state;
    let interestDash = ((interest/100) - (incrementPercentage/100))/(1+incrementPercentage/100);
    this.setState({factor: ((1/ (((interestDash/100)*(Math.pow( (1+interestDash/100),years )))/(Math.pow( (1+interestDash/100),years )-1)))/(1+incrementPercentage/100))})
  } 

  factorCalculate = () => {
    const {type, interest, years} = this.state;
    if(type === 'fbyp'){
      this.setState({factor: Math.pow( (1+interest/100),years )})
    }else if(type === 'pbyf'){
      this.setState({factor: 1 / Math.pow( (1+interest/100),years )})
    }else if(type === 'fbya'){
      this.setState({factor: (Math.pow( (1+interest/100),years )-1)/(interest/100) })
    }else if(type === 'abyf'){
      this.setState({factor: 1 / ((Math.pow( (1+interest/100),years )-1)/(interest/100)) })
    }else if(type === 'abyp'){
      this.setState({factor: ((interest/100)*(Math.pow( (1+interest/100),years )))/(Math.pow( (1+interest/100),years )-1) })
    }else if(type === 'pbya'){
      this.setState({factor: 1/ (((interest/100)*(Math.pow( (1+interest/100),years )))/(Math.pow( (1+interest/100),years )-1)) })
    }
  }

  render(){
    const {type, interest, years, factor, selectedFactor, incrementAmount, incrementPercentage, firstYearEndAmount} = this.state;
    return (
      <>
        <Navbar />
        <Menu onSelectedFactorChange={this.onSelectedFactorChange} />
        {
          selectedFactor === 'uniform'
          ?
          <UniformSeries type={type} onIncrementAmountChange={this.onIncrementAmountChange} onInterestChange={this.onInterestChange} onYearsChange={this.onYearsChange}/>
          :
          (
            selectedFactor === 'normal'
            ?
            <NormalFactors onTypeChange={this.onTypeChange} onInterestChange={this.onInterestChange} onYearsChange={this.onYearsChange} />
            : 
            <GeometricSeries onFirstYearEndAmount={this.onFirstYearEndAmount} onTypeChange={this.onTypeChange} onInterestChange={this.onInterestChange} onYearsChange={this.onYearsChange} setInterestDash={this.setInterestDash} onIncrementPercentChange={this.onIncrementPercentChange}/>
          )
        }
        <Result firstYearEndAmount={firstYearEndAmount} pbyfForGeometric={this.pbyfForGeometric} incrementPercentage={incrementPercentage} factorCalculate={this.factorCalculate} abygForUniform={this.abygForUniform} incrementAmount={incrementAmount} type={type} years={years} interest={interest} factor={factor} selectedFactor={selectedFactor}/>
        <Footer />
      </>
    );
  }
}

export default App;
