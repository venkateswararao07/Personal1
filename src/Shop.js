import React, { Component } from 'react'
import {connect} from 'react-redux'
import { buyLaptop, fetchUsers } from './Redux/actions'

 class Shop extends Component {

    // state ={
    //     numOfLaptops:100
    // }
    // buyLaptop = () => {
    //     this.setState({numOfLaptops:this.state.numOfLaptops-1})
    // }
  render() {
    return (
      <div className='shop'>
        <h1>Welcome to Vshop</h1>
        <p>Dell Inspiron Laptop</p>
        <p>Avilible:{this.props.numOfLaptops}</p>
        <button onClick={this.props.buyLaptop}>Buy one</button>
        <div className='item'>
        <p>Get Users data</p>
        <p>Count:{this.props.users.length}</p>
        <button onClick={this.props.fetchUsers}>Cal api</button>
        </div>
        

      </div>
    )
  }
}
const mapStateToProps = (state) =>{
    return{
        numOfLaptops:state.Laptops.numOfLaptops,
        users:state.users.users
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        buyLaptop: ()=> dispatch(buyLaptop()),
        fetchUsers:()=> dispatch(fetchUsers())

    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Shop);