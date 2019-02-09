import React from 'react'
// import './Estilos.css'

class Numero extends React.Component{

  state = {
    contadorEstado: 0
  }

  sumar = () => { this.setState({contadorEstado: this.state.contadorEstado + 1})}
  restar = () => { this.setState({contadorEstado: this.state.contadorEstado - 1})}

  componentWillMount(){
    console.log('El componente se montara');
    console.log(this.state);
  }

  componentDidMount(){
    console.log('El componente ya se monto');
    console.log(this.state);
  }

  componentWillUpdate (){
    console.log('El componente se actualizara');
    console.log(this.state);
  }

  componentDidUpdate(){
    console.log('El componente ya se actualizo');
    console.log(this.state);
  }

  componentWillUnmount(){
    console.log('Ya me voy a morir');
  }


  render(){
    return(
      <div className='bordes'>
        <h1>{this.state.contadorEstado}</h1>
        <button onClick={this.sumar}> + </button>
        <button onClick={this.restar}> - </button>
      </div>
    )
  }
}

export default Numero