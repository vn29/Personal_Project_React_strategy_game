import React from 'react';
import ReactDOM from 'react-dom';
import './ResourceImage.js';
import ResourceImage from './ResourceImage.js';

class ResourceDisplay extends React.Component {

     render(){
          
          if (this.props.resourceName == 'factories' || this.props.resourceName == 'workers') {
               return( <div>
                    {this.props.resourceName} :  {this.props.passedMethod()}
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
