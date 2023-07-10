import React, { Component } from 'react'

 class ProductCard extends Component {
 
  render(props) { 
    
    const {id,image,title,price,description,rating}=this.props.item
    const{rate,count}=rating
    const{deleteFunc}=this.props
    const desc = description.length > 30 ? description.slice(0,30) + '...' : description
    return (
      <div id={id} className='col-lg-3'>
        <div className="card" >
  <img style={rate > 4 ?{"filter":"grayscale(0)"}:{"filter":"grayscale(1)"}} src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <span className={price> 100 ?'btn btn-success':'btn btn-danger'}>{price} AZN</span>
    <button onClick={()=>deleteFunc(id)} className='btn btn-danger ms-3'>Delete</button>
  </div>
</div>
      </div>
    )
  }
}

export default ProductCard