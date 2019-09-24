import React from 'react';
import ReactDOM from 'react-dom';

class ResourceImage extends React.Component {

     render(){
          if (this.props.rname == "factories") {
               var rname = "1f";
          };
          if (this.props.rname == "workers") {
               var rname = "1w"
          }
          return (
               <div  className = "RImage">
                    <p>{rname} </p>
               </div>
          );
     }
}

export default ResourceImage;
