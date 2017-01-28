import React from 'react'
import ReactDOM from 'react-dom'
// import App from './app'
import RaisedButtonExampleSimple from './tombol'
// import AppBarExampleIcon from './judul'
import injectTapEventPlugin from 'react-tap-event-plugin';

// harus cek https://github.com/callemall/material-ui/issues/4670
injectTapEventPlugin();

ReactDOM.render(

    <div>
   
    <RaisedButtonExampleSimple/>

</div>, document.getElementById('root'));
