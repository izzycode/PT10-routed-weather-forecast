import React from 'react'

class Forecast extends React.Component {

  state = {
    name: '',
    forecasts: [],
  }

  componentDidMount(){
    fetch('https://wyn-weather-api.herokuapp.com/cities/' + this.props.match.params.cityName)
      .then( response => response.json() )
      .then( data => {
        console.log( data )
        this.setState({
          name: data.name,
          forecasts: data.forecasts,
        })
      })
  }

  render(){
    return(
      <div>
        <h1>{ this.state.name }</h1>
        <ul>
          <li>Date/icon/temp/humity</li>
        </ul>
      </div>
    )
  }
}

export default Forecast
