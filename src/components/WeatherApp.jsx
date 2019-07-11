import React, { Fragment } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CitySearch from './CitySearch'

const WeatherApp = () => {
  return(
    <BrowserRouter>
      <Fragment>
        <Route path="/" component={ CitySearch }/>
      </Fragment>
    </BrowserRouter>
  )
}

export default WeatherApp
