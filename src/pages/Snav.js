import React,{Component} from 'react'
import {MagnifyingGlass,Basket,Heart,User} from '@phosphor-icons/react'
import { Link } from 'react-router-dom';
import { Userconsumer } from './../components/CartContext';


export class Snav extends Component {

    render() {
        return (
            <Userconsumer>
              {
                (nn)=>{
                return(
                
            <div className='lvl-two'>
            <div className='two-content'>
                <div className='search'>
                    <MagnifyingGlass size={28} weight="bold" />
                    <input type='search'  placeholder='Search' />
                </div>
                <div className='logo'>
                    <img src='https://api.yeshtery.com/v1/yeshtery/files/31/adidas-2805b77d93b649829a95d869558736a2.png?height=150' />
                </div>
                <div className='links'>
                    <div className='two-left'>
                        <Link to='/cart' >
                        <Basket size={25} weight="bold" />
                        <p>Cart</p>
                        </Link>
                    </div>
                    <div className='two-mid'>
                        <Heart size={25} weight="bold" />
                        <p>Whishlist</p>
                    </div>
                    <div className='two-right'>
                        <User size={25} weight="bold" />
                        <p>Login</p>
                    </div>
                </div>
            </div>
        </div>)
        }}
    </Userconsumer>
    
  )}
}
