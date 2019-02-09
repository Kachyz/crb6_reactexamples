import React from 'react'
import Persona from './Persona'
import Numero from './Numero'

class Lista extends React.Component{

  state = {
    load: false
  }

  // add = () => { this.setState({load: true}) }
  // remove = () => { this.setState({load: false}) }

  toggle = () => {this.setState({load: !this.state.load})}

  render(){
    return (
      <React.Fragment> {/* DIV especifico de REACT */}

        {/* <button onClick={this.add} disabled={this.state.load}> ADD </button>
        <button onClick={this.remove} disabled={!this.state.load}> REMOVE </button> */}
        <button onClick={this.toggle} > CAMBIO </button>

        {this.state.load ? <Numero /> : null}
      </React.Fragment>
    )
  }
}

export default Lista