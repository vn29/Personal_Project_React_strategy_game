import React from 'react';
import ReactDOM from 'react-dom';
import './ResourceImage.js';
import ResourceImage from './ResourceImage.js';

class ResourceDisplay extends React.Component {

     render(){
          
          if (this.props.resourceName == 'factories') {
               //make a range for this many factories
               const fact_range = [...Array(this.props.passedvalue2.factories).keys()];
               const factory_icons = fact_range.map((factory) =>
                    <ResourceImage/>
               );
               return( <div>
                    {factory_icons}
               </div>
                    
               );
          }
          if (this.props.resourceName == 'workers') {
               //make a range for this many workers
               const worker_range = [...Array(this.props.passedvalue2.workers).keys()];
               const worker_icons = worker_range.map((worker) =>
                    <ResourceImage/>
               );
               return( <div>
                    {worker_icons}
               </div>
                    
               );
          }
          return (
               <div>
                    {this.props.resourceName} : {this.props.passedvalue1}
               </div>
          );
     }
}

export default ResourceDisplay;
