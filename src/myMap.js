import React, { Component } from 'react';
import MapWrapper from './mapContainer.js'

export default class Map extends Component {
  render() {
    return (
      <div>
        <label>Address: <input id="address-input" type="text" /></label>
        <MapWrapper/>
      </div>
    )
  }
}
