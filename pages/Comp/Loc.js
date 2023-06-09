import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper, Polygon } from 'google-maps-react';




const mapStyles = {

  width: '100%',
  height: '100%'

};



export class GoogleMap extends Component {

  state = {

    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}

  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {

    return (
      <div>

        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: 12.9724273424084352,
              lng: 77.82826789490366
            }
          }
        >
          <Marker
            onClick={this.onMarkerClick}
            name={'NeoStore Shopping Pvt LTD'}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>

    )
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyDavmxkcoYuFPsUm8HjWl0ub55fZXOlJJs")
})(GoogleMap)