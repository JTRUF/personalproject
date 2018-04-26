import React, {Component} from 'react';
import './ProductTile.css';
import axios from 'axios';

class ProductTile extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        // References to controller.js and connects to getAllProducts.sql
        axios.get('/getAllProducts').then(res=>{
          console.log("products")
          this.setState({
            products: res.data
          })
          console.log(res.data)
        })
      }
    render(){
        // function maps over products array passed through props from App.js and is saved to the productsArray variable.
        let productsArray = this.state.products.map((element, index)=> {
            return(
              <div key={index} className="products-list">

                <div>
                  <img  className="tree1" src={element.img_url} alt={element.name}/>
                </div>

                <div className="product-box">
                  <h3>{element.name}</h3>
                  <h3>${element.price}</h3>
                </div> 

                <div className="Add">
                  <button className="add">Add to Cart</button>
                </div>

              </div>
            )
        }
      )
          return(
            <div className="dashboard">
              <div className="product-container">
                <div className="products">
                  {productsArray}
                </div>
              </div>
            </div>
        
          )
        }
    }
  
export default ProductTile;