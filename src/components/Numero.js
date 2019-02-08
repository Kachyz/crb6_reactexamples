import React from 'react'

class Numero extends React.Component{
  contador = 0

  sumar = () => {
    console.log('estoy en sumar');
    this.contador++
    console.log(this.contador);
    return this.contador
  }

  render(){
    return(
      <div>
        <h1>{this.contador}</h1>
        <button onClick={this.sumar}> + </button>
        <button> - </button>
      </div>
    )
  }
}

export default Numero