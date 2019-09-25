import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup  from 'react-bootstrap/ButtonGroup';
import './index.css';
import './components/ResourceDisplay.js';
import ResourceDisplay from './components/ResourceDisplay.js';
import ResourceImage from './components/ResourceImage.js';
import Factory_img from './icons/factory.png';
import Worker_img from './icons/person.png';
import Wheat_img from './icons/wheat.png';


   
   class Game extends React.Component {
        constructor(props){
             super(props);
             this.state = {
               energy : 1.,
               minerals : 1.,
               food : 1.,
               alloys : 1.,
               factories : 1.,
               workers : 1.,
               day : 1.,
               message : "",
             };
        }
     daily() {
          let {
               energy,
               minerals,
               food,
               alloys,
               factories,
               workers,
               day
          } = this.state;

          var tem_workers = workers;
          if (food == 0) {
               var tem_workers = workers -1;
          };

          this.setState(
               {
                    energy : Math.max(energy + 1.*factories/2*workers/4 - workers/16,0),
                    minerals : Math.max(minerals + 1.*factories/3*workers/2,0),
                    food : Math.max(food + 1.*factories/2 - workers/5,0),
                    alloys : Math.max(alloys + 1.*factories/8*workers/16*minerals/4,0),
                    factories : factories,
                    workers : tem_workers,
                    day : day + 1,
                    message : "",
               }
          );
     }

     build_factory() {
          var t = this.state;
          var tem_workers = t.workers;
          if (t.workers > 1) {
               tem_workers = t.workers - 1
          }

          if (t.energy < 2 || t.minerals <4 || t.workers < 1 || t.alloys < 3) {
               this.setState({message:"Not enough resources to build a factory"})
          } else {
               this.setState({
                    factories : t.factories + 1,
                    energy : t.energy - 1,
                    minerals : t.minerals - 4,
                    workers : tem_workers,
                    alloys : t.alloys - 3,
               })
          }
     }

     sell_factory() {
          var t = this.state;
          if (t.factory < 2) {
               this.setState({message:"Not enough resources to sell a factory"})
          } else {
               this.setState({
                    factories : t.factories - 1,
                    energy : t.energy + 0.5,
                    minerals : t.minerals + 2,
                    alloys : t.alloys - 1,
               })
          }
     }

     buy_food() {
          var t = this.state;
          if (t.energy < 1) {
               this.setState({message: "Not enough energy to buy food"})
          } else {
               this.setState({
                    energy : t.energy - 1,
                    food : t.food + 1
               })
          }
     }

     sell_food() {
          var t = this.state;
          if (t.food < 1) {
               this.setState({message: "Not enough food to meet minimum sell amount"})
          } else {
               this.setState({
                    energy : t.energy + 0.5,
                    food : t.food - 1
               })
          }
     }

     rdcf() {
          const fact_range = [...Array(this.state.factories).keys()];
          const factory_icons = fact_range.map((factory) =>
               <ResourceImage rname = {"f" + (factory + 1)} imglink = {Factory_img}/>
               
          );
          return factory_icons;
     }

     rdcw() {
          const worker_range = [...Array(this.state.workers).keys()];
          const worker_icons = worker_range.map((worker) =>
               <div className = "RImage">
                    <ResourceImage rname = {"w"+ (worker + 1)} imglink = {Worker_img}/> 
                    
               </div>
          );
          return worker_icons;
     }

     hire_worker() {
          var t = this.state;
          if (t.energy <0.5) {
               this.setState( {message : "Not enough energy to hire worker"})
          } else {
               this.setState( {
                    energy : t.energy - 0.5,
                    workers : t.workers + 1,
               })
          }
     }

     terminate_worker() {
          var t = this.state;
          if (t.workers <=1) {
               this.setState( {message : "Cannot fire last worker"})
          } else {
               this.setState( {
                    energy : t.energy + 0.25,
                    workers : t.workers - 1,
               })
          }
     }


     render() {
          let {
               message,
               energy,
               minerals,
               food,
               alloys,
               day,
          } = this.state;



       return (
            <div className = "master">
               <Button className = 'end-turn-button' variant="secondary" size="sm" onClick = {() => this.daily()} >End Turn</Button>
               <div className = "main_display">
                    <ResourceDisplay resourceName = {"message"} passedvalue1 = {message}/>
                    <ResourceDisplay resourceName = {"energy"} passedvalue1 = {energy}/>
                    <ResourceDisplay resourceName = {"minerals"} passedvalue1 = {minerals}/>
                    <ResourceDisplay resourceName = {"alloys"} passedvalue1 = {alloys}/>
                    <div className = "mr_block">
                         <ButtonGroup  className = "mr_inline">
                              <Button variant="secondary" size="sm" onClick = { () => this.buy_food()} >+</Button>
                              <Button variant="secondary" size="sm" onClick = { () => this.sell_food()} >-</Button>
                         </ButtonGroup >
                         <ResourceDisplay resourceName = {"food"} passedvalue1 = {food}/>
                    </div>
                    <div className = "mr_block">
                         <ButtonGroup className = "mr_inline">
                              <Button variant="secondary" size="sm" onClick = { () => this.build_factory()} >+</Button>
                              <Button variant="secondary" size="sm" onClick = { () => this.sell_factory()} >-</Button>
                         </ButtonGroup>
                         <ResourceDisplay resourceName = {"factories"} passedMethod = {() => this.rdcf()}/>
                    </div>
                    <div className = "mr_block">
                         <ButtonGroup className = "mr_inline">
                              <Button variant="secondary" size='sm' onClick = {() => this.hire_worker()} >+</Button>
                              <Button variant="secondary" size='sm' onClick = {() => this.terminate_worker()} >-</Button>
                         </ButtonGroup>
                         <ResourceDisplay resourceName = {"workers"} passedMethod = {() => this.rdcw()}/>
                    </div>
                    <ResourceDisplay resourceName = {"day"} passedvalue1 = {day}/>
                    
               </div>
            </div>
       );
     }
   }

   // ========================================
   
   ReactDOM.render(
     <Game />,
     document.getElementById('root')
   );
   
