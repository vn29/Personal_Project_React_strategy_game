import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './components/ResourceDisplay.js';
import ResourceDisplay from './components/ResourceDisplay.js';
import ResourceImage from './components/ResourceImage.js';


   
   class Master extends React.Component {
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
          var t = this.state;
          var energy = t.energy;
          var minerals = t.minerals;
          var food = t.food;
          var alloys = t.alloys;
          var factories = t.factories;
          var workers = t.workers;
          var day = t.day;

          var new_energy = energy + 1.*factories/2*workers/4 - workers/16;
          var new_minerals = minerals + 1.*factories*workers;
          var new_food = food + 1.*factories/2*workers/2 - workers/8;
          var new_alloys = alloys + 1.*factories/3*workers/4*minerals/4;
          var new_factories = factories;
          var new_workers = workers;
          var new_day = day + 1;

          this.setState(
               {
                    energy : new_energy,
                    minerals : new_minerals,
                    food : new_food,
                    alloys : new_alloys,
                    factories : new_factories,
                    workers : new_workers,
                    day : new_day,
                    message : "",
               }
          );
     }

     build_factory() {
          var t = this.state;
          if (t.energy < 2 || t.minerals <4 || t.workers < 1 || t.alloys < 0.5) {
               this.setState({message:"Not enough resources to build a factory"})
          } else {
               this.setState({
                    factories : t.factories + 1,
                    energy : t.energy - 1,
                    minerals : t.minerals - 4,
                    workers : t.workers - 1,
                    alloys : t.alloys - 0.5,
               })
          }
     }

     rdcf() {
          const fact_range = [...Array(this.state.factories).keys()];
          const factory_icons = fact_range.map((factory) =>
               <ResourceImage rname = {"f" + (factory + 1)}/>
          );
          return factory_icons;
     }

     rdcw() {
          const worker_range = [...Array(this.state.workers).keys()];
          const worker_icons = worker_range.map((worker) =>
               <ResourceImage rname = {"w"+ (worker + 1)} />
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
     render() {
       return (
            <div className = "master">
               <button onClick = {() => this.daily()} >End Turn</button>
               <button onClick = {() => this.hire_worker()} >Hire Worker</button>
               <button onClick = {() => this.build_factory()} >Build Factory</button>

               <div className = "display">
                    <ResourceDisplay resourceName = {"message"} passedvalue1 = {this.state.message}/>
                    <ResourceDisplay resourceName = {"energy"} passedvalue1 = {this.state.energy}/>
                    <ResourceDisplay resourceName = {"minerals"} passedvalue1 = {this.state.minerals}/>
                    <ResourceDisplay resourceName = {"food"} passedvalue1 = {this.state.food}/>
                    <ResourceDisplay resourceName = {"alloys"} passedvalue1 = {this.state.alloys}/>
                    <ResourceDisplay resourceName = {"factories"} passedMethod = {() => this.rdcf()}/>
                    <ResourceDisplay resourceName = {"workers"} passedMethod = {() => this.rdcw()}/>
                    <ResourceDisplay resourceName = {"day"} passedvalue1 = {this.state.day}/>
                    
               </div>
            </div>
       );
     }
   }

   // ========================================
   
   ReactDOM.render(
     <Master />,
     document.getElementById('root')
   );
   
