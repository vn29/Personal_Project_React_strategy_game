import React from 'react';
import ReactDOM from 'react-dom';
import NumberFormat from 'react-number-format';


class ResourceDisplay extends React.Component {

     render(){
          let {
               resourceName,
               passedvalue1,
               passedMethod
          } = this.props;

          
          if (resourceName == 'factories' || resourceName == 'workers') {
               return( <div className='mr_inline'>
                    {resourceName} :  {passedMethod()}
               </div>
                    
               );
          }

          if (resourceName == 'message') {
               return( <div className='mr_inline'>
                    {resourceName} :  {passedvalue1}
                    </div>
               );
          }

          if (resourceName == 'food') {
               return(
                    <div className='mr_inline'>
                    {resourceName} : <NumberFormat value={passedvalue1} 
                                                              displayType = 'text' 
                                                              decimalScale = {2}/> 
               </div>
               );
          }

          return (
               <div>
                    {resourceName} : <NumberFormat value={passedvalue1} 
                                                              displayType = 'text' 
                                                              decimalScale = {2}/> 
               </div>
          );
     }
}

export default ResourceDisplay;
