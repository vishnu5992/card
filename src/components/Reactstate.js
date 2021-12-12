import React from 'react';
  export class Reactstate extends React.Component{
      constructor(){
          super();
          this.state={Initialvalue: "welcome"}

      }
   render(){
       return <h1>{this.state.Initialvalue}</h1>
   }
 }
