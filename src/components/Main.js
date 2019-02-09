import React from 'react'
import Vinculo from './Vinculo'

class Main extends React.Component{

  state = {
    aDonde: null,
    Texto: null
  }

  links = [
    {aDonde: "https://www.w3schools.com", Texto: "Visit W3Schools.com!"},
    {aDonde: "https://www.google.com", Texto: "El gugul"},
    {aDonde: "https://github.com/", Texto: "Github"},
    {aDonde: "https://www.wikipedia.org/", Texto: "Wiki wiki"},
  ]

  show = () => {
    //Pick a name
    let n = Math.floor(Math.random() * 4)
    console.log('n=',n);
    //Set state
    this.setState({
      aDonde: this.links[n].aDonde,
      Texto: this.links[n].Texto
    })
  }

  render(){
    return(
      <React.Fragment>
        <h3>Push the button!!</h3>
        <button onClick={this.show}> AQUI MERO </button> <br/>
        {this.state.aDonde ? <Vinculo aDonde={this.state.aDonde} Texto={this.state.Texto}/> : null}
      </React.Fragment>
    )
  }
}

export default Main