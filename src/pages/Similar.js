import React from 'react'
import { prodapi } from '../services/API'
import './../styling/smilar.scss'

export const Similar = () => {
  return (
    <div className='similar'>
        <div className='similar-content'>
            <div className='similar-text'>
                <h2>Similar Products</h2>
                <p>You May Like These Products Also</p>
            </div>
            <div className='similar-cards'>                    
                        {
                            prodapi.map(ps=>{return(
                            <div className='card' key={ps.id}>
                                <img src={ps.img} />
                                <h3>{ps.title}</h3>
                                <div>
                                    <p>{ps.price} LE</p>
                                    <img src={ps.brandimg} />
                                </div>
                                <p>{ps.where}</p>
                            </div>
                            )})
                        }
            </div>
        </div>
    </div>
  )
}
