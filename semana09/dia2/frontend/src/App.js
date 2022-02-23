import React,{Component} from 'react';
import axios from 'axios';

class App extends Component{

  constructor(props){
    super(props);
    this.state = ({
      alumnos :[]
    })
  }
  
  componentDidMount(){
    axios.get('http://localhost:5000/alumnos')
    .then(res=>{
      console.log(res.data);
      this.setState({
        alumnos:res.data
      })
    })
  }
  render(){
    return(
      <div><h1>Hola Mundo React</h1>
      {
        this.state.alumnos.map(alumno => {
          return(
            <div>
              <p>{alumno.nombre}</p>
              <p>{alumno.email}</p>
            </div>
          )})
      }
      </div>
    )
  }
}

export default App;


















// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
