import React, {Component} from 'react';
import './Products.css';
import axios from 'axios';

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            product: {},
            products: [],
            quantity: 1
        }
    }
    componentDidMount() {
        axios.get('/getAllProducts').then(res=>{
            console.log("products")
            this.setState({
                products: res.data
            })
            console.log(res.data)
        })
    }

    handleInput(e){
      this.setState({[e.target.name]: e.target.value})
    }

    addToCart(id){
    //   e.preventDefault();
      const query = {productID: id, quantity: this.state.quantity}
      axios.post('/api/cart', query).then(res=>{
        this.props.history.push('/Cart')
      }).catch(console.error)
    }

  render(){
        let productsArray = this.state.products.map((element, index) => {
            return(
                <div key={index} className="products-list">

                <div>
                  <img  className="tree" src={element.img_url} alt={element.name}/>
                </div>

                <div className="product-box">
                  <h3>{element.name}</h3>
                  <h3>${element.price}</h3>
                </div> 

                <div className="Add">
                {/* <form onSubmit={e=>this.addToCart(e)}> */}
                    <input type="number" onChange={e=>this.handleInput(e)} name="quantity" value={this.state.quantity}/>
                  <button className="add" onClick={()=>this.addToCart(element.id)}>Add to Cart</button>
                {/* </form> */}
                </div>

              </div>
            )
        })
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
  
export default Products;