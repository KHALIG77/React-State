import React, { Component } from 'react'

 class Example extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:'',
            users:[]
        }
    }
  AddName = ()=>{
    this.setState({
       users:[...this.state.users,this.state.value]
    })
  }
   InputValue=(e)=>{
    this.setState({
        value:e.target.value
    })
   }
  render() {
    return (
      <div>
        <input type='text' onChange={this.InputValue}/>
        <button onClick={this.AddName}>Add Name</button>
      </div>
    )
  }
}

export default Example