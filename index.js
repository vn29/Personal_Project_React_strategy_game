import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ResourceDisplay extends React.Component {
     constructor(props){
          super(props);
          this.state = {};
     }
     render(){
          return (""
          );
     }
}
   
   class Game extends React.Component {
        constructor(props){
             super(props);
             this.state = {
               energy : 1,
               minerals : 1,
               food : 1,
               alloys : 1,
               factories : 1,
               workers : 1,
               day : 1,
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
          var new_food = food + 1.*factories/4*workers/4 - workers/8;
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
                    energy : t.energy -1,
                    minerals : t.minerals -4,
                    workers : t.workers -1,
                    alloys : t.allys -0.5,
               })
          }
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
                    <p>message: {this.state.message}</p>
                    <p>energy: {this.state.energy}</p>
                    <p>minerals: {this.state.minerals}</p>
                    <p>food: {this.state.food}</p>
                    <p>alloys: {this.state.alloys}</p>
                    <p>factories: {this.state.factories}</p>
                    <p>workers: {this.state.workers}</p>
                    <p>day: {this.state.day}</p>
                    
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
   