import React from 'react'
import axios from 'axios'

class Peticiones extends React.Component {

  state = {
    pkmnName: 'Pokemon',
    pkmnTypes: ''
  }

  getPokemon = () => {
    // Obtener valor del campo
    let miPokemon = document.getElementById('miPkmn').value

    // Hacer una peticion al API
    axios.get("https://pokeapi.co/api/v2/pokemon/" + miPokemon)
      .then( res => {
        console.log(res.data)
        let tipos = res.data.types.map((tipoActual) => {
          return tipoActual.type.name
        })
        this.setState({
          pkmnName: res.data.name,
          pkmnTypes: tipos.join(' / ')
        })
      })
      .catch( err => {
        console.log(`Error en el GET, ${err}`)
      })
  }
  
  render(){
    return (
      <React.Fragment>
        <h2>{this.state.pkmnName} - {this.state.pkmnTypes}</h2>
        <input type="text" id='miPkmn'/>
        <button onClick={this.getPokemon}> GET </button>
      </React.Fragment>
    )
  }
}

export default Peticiones