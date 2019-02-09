import React from 'react'

class Vinculo extends React.Component{

  render(){
    return (
      <a href={this.props.aDonde} target="_blank">{this.props.Texto}</a>
    )
  }

}

export default Vinculo