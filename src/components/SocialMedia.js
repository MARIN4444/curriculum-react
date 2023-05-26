import React from 'react'
import img from '../img/img'

export const SocialMedia = () => {
  return (
    <div className='SocialMedia'>
        <ul className='botones'>
            <li><a href='https://www.facebook.com/profile.php?id=100004806431119' target='_blank'><img src={img.facebook} className='btn_social'></img></a></li>
            <li><a href='https://www.instagram.com/marin_s44/' target='_blank'><img src={img.instagram} className='btn_social'></img></a></li>
            <li><a href='https://www.linkedin.com/in/marin-m-685407137/' target='_blank'><img src={img.linkedin} className='btn_social'></img></a></li>
        </ul>
    </div>
  )
}