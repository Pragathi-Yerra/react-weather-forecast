import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2'; 

export default class Chart extends Component {
    
    render() {
        const data = {
            labels: this.props.labels,
            datasets: [
              {
                queue: 'queue1',
                label: 'Temperature (\xB0C)',
                // 
                backgroundColor: '#FFC1BF',
                hoverBackgroundColor: '#F98783',
                borderColor: '#FB7671',
                hoverBorderColor: '#D73933',
                data: this.props.temp_max
              },
              {
                queue: 'queue2',
                label: 'Humidity (%)',
                backgroundColor: '#AAE4FF',
                hoverBackgroundColor: '#62CDFF',
                borderColor: '#26ADEC',
                hoverBorderColor: '#1E86B6',
                data: this.props.hum  
              },
              {
                queue: 'queue3',
                label: 'Windspeed (m/s)',
                backgroundColor: '#FFFFAE',
                hoverBackgroundColor: '#FFFF6F',
                borderColor: '#D8D831',
                hoverBorderColor: '#D8D831',
                data: this.props.wind_speed 
              }
            ]
          }    
        return (
            <div>
              {console.log(data)}
                <Bar
                data={data}
                width={120}
                height={70}
                options={{
                    maintainAspectRatio: true,
                    duration: 2000
                }}
                /> 
                <div className="text-center">
                    <button className="btn btn-light" onClick={this.props.getPresent}><i className="fas fa-angle-left mr-1"></i>Back</button>
                </div>    
            </div>
        )
    }
}
