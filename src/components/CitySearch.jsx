import React from 'react'

export default class CitySearch extends React.Component{

  state = {
    city: '',
    results: [],
  }

  handleChange = event => {
    this.setState({ city: event.target.value })
    fetch(`https://wyn-weather-api.herokuapp.com/cities?query=${event.target.value}`)
      .then( res => res.json() )
      .then( results => this.setState({ results }))
  }

  render(){
    return(
      <div>
        <form>
          <label htmlFor="city" >City: </label>
          <input
            type="search"
            name="city"
            placeholder="e.g.: Miami"
            autoComplete="off"
            onChange={ this.handleChange }/>
        </form>
        <ul>
          {
            this.state.results.map( city => {
              return(
                <li key={ city.id }>
                  <a href={ `/city/${ city.id }`}>{ city.name }</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
