import React from 'react';

import {Line} from 'react-chartjs-2';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const state = {

  labels: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009','2010','2011', '2012', '2013', '2004', '2005', '2006', '2007', '2008', '2009','2010'],

  datasets: [

    {

      label: 'Rainfall',

      fill: false,

      lineTension: 0.5,

      backgroundColor: 'rgba(75,192,192,1)',

      borderColor: 'rgba(0,0,0,1)',

      borderWidth: 2,

      data: [0, 65, 10, 80, 81, 56, 65, 59, 80, 81, 56, 65, 20, 80, 81, 56,65, 59, 80, 81, 56]

    }

  ]

}



export default class Chart_historique extends React.Component {

  render() {

    return (

      <div className='container_chart'>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}