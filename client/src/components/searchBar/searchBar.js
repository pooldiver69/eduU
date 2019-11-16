import React, { Component } from "react";
// import { Map, GoogleApiWrapper } from 'google-maps-react';
/* global google */

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    // const google = window.google;
    // console.log(google);
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteInput.current,
      { types: ["geocode"] }
    );

    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  }

  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    this.props.onPlaceLoaded(place);
  }

  render() {
    return (
      <div>
        <input
          ref={this.autocompleteInput}
          id="autocomplete"
          placeholder="Enter your address"
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
        ></input>
      </div>
    );
  }
}

export default SearchBar;
