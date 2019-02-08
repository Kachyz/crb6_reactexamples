import React from 'react'
import Persona from './Persona'
import Numero from './Numero2'

class Lista extends React.Component{
  render(){
    return (
      <React.Fragment> {/* DIV especifico de REACT */}
        <Numero />
        <Persona name="Lau" time="9"/>
        <Persona name="Charly"/>
        <Persona name="Mich" time='2'/>
      </React.Fragment>
    )
  }
}

export default Lista