import React from 'react';
import ReactDOM from 'react-dom';


class ResourceImage extends React.Component {

     render(){
          return (
               <div  className = "RImage">
                    {/* <p>{this.props.rname} </p>  */}
                    <img src={this.props.imglink} height='10px' width='10px' display='inline-block'/>
               </div>
          );
     }
}

export default ResourceImage;
