import React, { Component } from 'react'
import ProductCard from './ProductCard'

 class ProductList extends Component {
  render(props) {
    const {data}=this.props
    return (
        <div className='container '>
<div className='row g-4'>
        {
            data.map(item=>{
                   return(
                            <ProductCard deleteFunc={this.props.deleteFunc} key={item.id} item={item}/>
                         ) 
            })
        }
      </div>
        </div>
      
    )
  }
}

export default ProductList