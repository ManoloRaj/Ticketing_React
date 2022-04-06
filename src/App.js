import React from 'react';
import Navbar_mis from './Navbar_mis';

import { Chart, registerables } from 'chart.js';
import Body_content from './Body_content';
Chart.register(...registerables);



export default class App extends React.Component {

  render() {

    return (
 
      <div className='container'>
        <Navbar_mis />
        <Body_content/>
      </div>
    
    );
  }
}