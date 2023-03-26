import React, {Component,createContext} from 'react'
import './../styling/item.scss'
import { CaretLeft,CaretRight} from '@phosphor-icons/react'
import { Outlet } from 'react-router-dom'
import { Userprovider } from './../components/CartContext'

export const itcont = createContext()


const data = {
    id : 1,
    mainimg: 'https://api.yeshtery.com/v1/yeshtery/files/31/he4717-12.jpg?height=568',
    imgs: ['https://api.yeshtery.com/v1/yeshtery/files/31/he4717-2-apparel-photography-front-center-view-white-e40c4cdc4aa147e4be6303263073b682.jpg?height=568','https://api.yeshtery.com/v1/yeshtery/files/31/he4717-5-apparel-on-model-back-view-white-843ffd3426b64fe2af1fe3ffc040982b.jpg?height=568','https://api.yeshtery.com/v1/yeshtery/files/31/he4717-6-apparel-on-model-side-view-white-88d9d5bb8d3a46c8806df987a04219fe.jpg?height=568'],
    title: 'Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit',
    price: 99,
    category: 'Men',
    brandimg: 'https://api.yeshtery.com/v1/yeshtery/files/31/adidas-2805b77d93b649829a95d869558736a2.png?height=150',
}

class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            qty:0,
            itno: 0
        }}

        changeimg = (e)=>{
            document.querySelector('.main').src = e.target.src
        }

        actt = (e)=>{
            if(document.querySelector('.acitve')){
            document.querySelector('.acitve').classList.remove('acitve');
            e.target.classList.add('acitve')
        }else{}}

        increment = ()=>{
            this.setState(prev=>{
                return({qty:prev.qty + 1})
            })
        }

        decrement = ()=>{
            this.setState(prev=>{
                return({qty:prev.qty -1})
            })
        }


        addit = ()=>{
            console.log(this.state.itno)
            this.setState({itno:1})
        }



    render() {

        const qty = this.state.qty
        const itm = this.state.itno

        const values = [qty,data,itm]

        return (
            <Userprovider value={values}>
                <div className='item'>
                <div className='item-content'>
                    <div className='left'>
                        <img src={data.mainimg} className='main' />
                        <div className='secondary'>
                            <CaretLeft size={32} weight="bold" />
                            <img src={data.imgs[0]} onClick={this.changeimg} />
                            <img src={data.imgs[1]} onClick={this.changeimg} />
                            <img src={data.imgs[2]} onClick={this.changeimg} />
                            <CaretRight size={32} weight="bold" />
                        </div>
                    </div>
                    <div className='right'>
                        <div className='title'>
                            <img src={data.brandimg} />
                            <h3>{data.title}</h3>
                            <p>{data.category}</p>
                        </div>
                        <div className='rating'>
                            <p>No Rating Yet</p>
                        </div>
                        <div className='price'>
                            <p>9,999 <sub>LE</sub></p>
                            <del>9,999 LE</del>
                            <p>30% off</p>
                        </div>
                        <div className='size'>
                            <h2>Size</h2>
                            <div>
                                <p className='acitve' onClick={this.actt}>Small</p>
                                <p onClick={this.actt}>Medium</p>
                                <p onClick={this.actt}>Large</p>
                                <p onClick={this.actt}>X Large</p>
                                <p onClick={this.actt}>XX Large</p>
                            </div>
                        </div>
                        <div className='quantity'> 
                            <h2>Quantity</h2>
                            <div>
                                <p onClick={this.decrement}> - </p>
                                <p>{qty}</p>
                                <p onClick={this.increment}> + </p>
                            </div>
                        </div>
                        <div className='addto'>
                            <button onClick={this.addit}>{this.state.itno > 0 ? "Added":"Add to Cart"}</button>
                            <button>Pickup From Store</button>
                        </div>
                    </div>
                </div>
                <Outlet />

            </div>
            </Userprovider>
 
        )}}

export default Item