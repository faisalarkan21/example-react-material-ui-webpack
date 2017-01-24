import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import RaisedButtonExampleSimple from './tombol'
import AppBarExampleIcon from './judul'



var PanelHolder = React.createClass({
  render: function() {
    return (
      <div>
        <RaisedButtonExampleSimple />
        <AppBarExampleIcon />      
      </div>
    )
  }
});
