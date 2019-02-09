import React from 'react'
import {BrowserRouter as Router, NavLink} from 'react-router-dom'
import Route from 'react-router-dom/Route'

const NuevoComponente = ({match}) => {
  return(<h3>Soy un componenete malhecho {match.params.num}</h3>)
}

class Rutas extends React.Component{
  render(){
    return(
      <Router>
        <div>
          <ul>
            <li> <NavLink activeStyle={{color: 'red'}} exact to="/"> Raiz </NavLink> </li>
            <li> <NavLink activeStyle={{color: 'red'}} exact to="/otra"> Otra </NavLink> </li>
            <li> <NavLink activeStyle={{color: 'red'}} exact to="/otra/15"> Otra15 </NavLink> </li>
          </ul>

          <Route path="/" exact component={NuevoComponente}/>
          <Route path="/otra" exact render={() => {return <p>Esta es otra opcion</p>}}/>
          <Route path="/otra/:num" exact component={NuevoComponente}/>
        </div>
      </Router>
    )
  }

}

export default Rutas