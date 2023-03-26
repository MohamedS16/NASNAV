import React from 'react'
import { PaperPlaneTilt,FacebookLogo,InstagramLogo,LinkedinLogo,YoutubeLogo } from '@phosphor-icons/react'
import './../styling/footer.scss'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-content'> 
            <div className='upper'>
                <div className='fleft'>
                    <img src='https://www.yeshtery.com/files/69/brand-logo-yellow.svg' />
                    <p>
                    This is an exclusive online platform providing the consumer with a convenient way of shopping from stores while in the convenience of their home. Supporting the latest brands and products available in the stock real time.
                    <span></span>This is an exclusive online platform providing the consumer with a convenient way of shopping from stores while in the convenience of their home. Supporting the latest brands and products available in the stock real time.
                    
                    <span></span>This is an exclusive online platform providing the consumer with a convenient way of shopping from stores while in the convenience of their home. Supporting the latest brands and products available in the stock real time.

                    </p>
                </div>
                <div className='fright'>
                    <div className='fup'>
                        <h3>Subscribe to Our newsletter</h3>
                        <div>
                            <input type='search' placeholder='Enter Your Mail'/>
                            <button>Subscribe <PaperPlaneTilt size={20} /> </button>
                        </div>
                    </div>
                    <div className='fdown'>
                        <div className='fdownleft'>
                            <p>About Us</p>
                            <p>Contact Us</p>
                            <p>Track Order</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                            <p>Sell With Us</p>
                            <p>Shipping And Returns</p>
                        </div>
                        <div className='fdownright'>
                            <p><FacebookLogo size={32} color='blue' /> /yeshtery</p>
                            <p><InstagramLogo size={32} color='blueviolet' /> /Instagram</p>
                            <p><LinkedinLogo size={32} color='dodgerblue' /> /LinkedIn</p>
                            <p><YoutubeLogo size={32} color='red' /> /Youtube</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lower'>
                <p>@ 2021 yeshtery. all rights reserved.</p>
                <p>Powered By <span>nasnav</span></p>
            </div>
        </div>
    </div>
  )
}
