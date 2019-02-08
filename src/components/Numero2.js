import React from 'react'

class Numero extends React.Component{
  state = {
    contador: 0
  }

  sumar = () => {
    this.setState({contador: this.state.contador + 1})
  }
  restar = () => {
    this.setState({contador: this.state.contador - 1})
  }

  render(){
    return(
      <div>
        <h1>{this.state.contador}</h1>
        <button onClick={this.sumar}> + </button>
        <button onClick={this.restar}> - </button>
      </div>
    )
  }
}

export default Numero