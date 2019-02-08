import React from 'react'

class Persona extends React.Component {
  mytime = 500

  imprimeHora(){
    return (this.props.time ? this.props.time : this.mytime)
  }

  render(){
    return (
      <div>
        <h1>Hola me llamo {this.props.name}</h1>
        <p>Son las {this.imprimeHora()}</p>
        <p>hola 3</p>
      </div>
    )
  }
}

export default Persona