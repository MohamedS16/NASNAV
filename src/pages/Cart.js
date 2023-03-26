import React, { Component } from 'react'
import './../styling/cart.scss'
import { X } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { Userconsumer } from './../components/CartContext'

export class Cart extends Component {



  render() {
    return (
      <Userconsumer>
        {
          (nn)=>{
          return(
          
          
      <div className='cart-section'>
      <div className='cart-content'>

      <Link to='/' ><p><X size={32} /></p></Link>
          <h2> My Cart </h2>
          {
            
              nn[2] == 0 ? <p>Nothing Found</p> :
              <div>
              <div className='ccard' key={nn[1].id}>
                  <img src={nn[1].mainimg} />
                  <div className='ccard-text'>
                  <h3>{nn[1].title}</h3>
                  <p>Quantity {nn[0]}</p>
                  <div>
                      <h3>{nn[1].price} LE</h3>
                      <button>Remove</button>
                  </div>
                  </div>
              </div>
              <h2>Total {nn[0]*nn[1].price}</h2>
              <div className='btns'>
                      <button>Review Cart</button>
                      <button>Complete Checkout</button>
                      </div>
              </div>
          }
      </div>
    </div>  )}

        }
        
      </Userconsumer>
    )
  }
}

export default Cart