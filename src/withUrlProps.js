import React, { Component } from 'react';

/*
Unfortunately there isn't a "clean" way to sync URL and component state.
I have chosen to use the URL as the single source of truth. All changes to the
input fields in the App component are passed upwards via the `onChange`
callback. In response to changes, a new URL query string is generated with the
base64 encoded model and set to the current path, which causes the App component
to render.
see: https://github.com/reactjs/react-router-redux/issues/288
*/
function withUrlProps(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.onModelChange = this.onModelChange.bind(this);
    }
    render() {
      if (this.model) {
        return (
          <WrappedComponent model={this.model} onChange={this.onModelChange} />
        );
      } else {
        return (
          <h1>ERROR: Bad URL</h1>
        );
      }
    }
    updateURLParams(model) {
      this.props.history.replace('?' + btoa(JSON.stringify(model)));
    }
    get model() {
      const payload = this.props.location.search.substring(1);
      if (payload.length === 0) {
        return WrappedComponent.defaultProps.model;
      }
      try {
        return JSON.parse(atob(payload));
      }
      catch(_) {
        return null;
      }
    }
    onModelChange(newModel) {
      this.updateURLParams(newModel);
    }
  }
}

export default withUrlProps;
