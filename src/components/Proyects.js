import React from 'react'
import img from '../img/img'
export const Proyects = () => {
  return (
    <div >
      <div className='proyects'>
        <img src={img.proyects} className='img_right'></img>
        <h4 className='proyects_tittle_position'>Proyects</h4>
      </div>
      <br/>
      <div >
        <h5>Curriculum with React</h5>
        <div className='proyects_text'>
          <a className='proyects_text--link' href='https://github.com/MARIN4444/curriculum-react'><b>Curriculum-React</b></a>
          <br/>
          <p className='education_text--text'>project where a Single Page Application is made with the basic information of my curriculum
          using 'bootstrap' as framework, <br/>implementing languages ​​for web pages (html, css. javascript) with react (jsx) and applying a bem methodology for css</p>
        </div>
      </div>
        

    </div>
  )
}
