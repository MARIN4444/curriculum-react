import React from 'react'
import img from '../img/img'

export const Me = () => {
  return (
    <div>
        <div className='me'>
            <img src={img.me} className='me_img'></img>
            <h2 className='me_tittle'>Jhonatan Marin Salazar<br/>System Engineer</h2>
        </div>
    </div>
  )
}
