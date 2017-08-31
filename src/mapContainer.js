import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  mapClicked = (mapProps, map, clickEvent) => {

    this.setState({children:<Marker
title={'The marker`s title will appear as a tooltip.'}
name={'SOMA'}
position={{lat: clickEvent.latLng.lat(), lng:clickEvent.latLng.lng()}} />})
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
            lat: 37.81873440498779,
            lng:  -122.18075752258301
          }} onClick={this.mapClicked} google={this.props.google} zoom={14}>

          {this.state.children}




      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyArkeJVfsLL0NYFx9T3EiT2JNrWgejB4co')
})(MapContainer)
