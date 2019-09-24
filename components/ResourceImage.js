import React from 'react';
import ReactDOM from 'react-dom';

class ResourceImage extends React.Component {

     render(){
          return (
               <div  className = "RImage">
                    <p>{this.props.rname} </p>
               </div>
          );
     }
}

export default ResourceImage;
