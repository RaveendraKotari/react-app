

import React from 'react'
const ParentComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {
        render() {
            return <OriginalComponent name="test"  /> 
        }
    }
    return NewComponent;
}
  
// export default ParentComponent;


   
// class App extends React.Component {
//   render() {
//     return <h1>{this.props.name}</h1> 
//   }
// }
// // Passed the originalcomponent 
// export default ParentComponent(App);