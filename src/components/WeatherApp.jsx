import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CitySearch from './CitySearch'
import Forecast from './Forecast'
import Nav from './Nav'

const WeatherApp = () => {
  return(
    <BrowserRouter>
      <Fragment>
        <Nav />
        <Route exact path="/" component={ CitySearch }/>
        <Route path="/city/:cityName" component={ Forecast }/>
      </Fragment>
    </BrowserRouter>
  )
}

export default WeatherApp
