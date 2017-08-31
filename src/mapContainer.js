import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  mapClicked = (eee) => {
    debugger
  }

  /*
  initialCenter={{
        lat: 40.854885,
        lng: -88.081807
      }}

      <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 37.778519, lng: -122.405640}} />
  */

  render() {
    return (
      <Map initialCenter={{
            lat: 37.774929,
            lng:  -122.419416
          }} onClick={this.mapClicked} google={this.props.google} zoom={14}>
    

      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyArkeJVfsLL0NYFx9T3EiT2JNrWgejB4co')
})(MapContainer)
