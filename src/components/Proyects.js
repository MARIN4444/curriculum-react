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
          <a className='proyects_text--link' href=''><b>Curriculum-React</b></a>
          <br/>
          <p className='education_text--text'>proyecto donde se realiza una Single Page Application con la información básica de mi curriculum 
          utilizando como framework 'bootstrap', <br/>implemantando lenguajes para paginas web (html, css. javascript) con react (jsx) y aplicando una metodologia bem para css y </p>
        </div>
      </div>
        

    </div>
  )
}
