import React from 'react'
import { List,ShoppingCart,Phone,MapPin,CaretLeft,CaretRight} from '@phosphor-icons/react'

export const Nav = () => {
  return (

        <div className='lvl-one'>
            <div className='one-content'>
                <div className='one-right'>
                    <List size={35} weight="bold" />
                    <img src='https://www.yeshtery.com/files/69/brand-logo-yellow.svg' />
                </div>
                <div className='one-mid'>
                    <CaretLeft size={20} weight="bold" />
                    <p> Valentine's Day Offers! Buy One Get Two Free <span>Shop Now</span> </p>
                    <CaretRight size={20} weight="bold" />
                </div>
                <div className='one-left'>
                    <div className='left-contact'>
                        <Phone size={25} />
                        <p>Contact Us</p>
                    </div>
                    <div className='left-track'>
                        <ShoppingCart size={25} />
                        <p>Track an Order</p>
                    </div>
                    <div className='left-store'>
                        <MapPin size={25} />
                        <p>Find A Store</p>
                    </div>
                </div>
            </div>
        </div>


  )
}
