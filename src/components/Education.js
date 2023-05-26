import React from 'react'
import img from '../img/img'

export const Education = () => {
  return (
    <div>

      <div className='education'>
        <img src={img.education}  className='img_right'></img>
        <h4 className='education_tittle--position'>Education</h4>
      </div>
      <br/>
      <div >
        <h5>Escuela Normal Superior De Caldas</h5>
        <div className='education_text'>
          <p className='education_text--year'><b>2020</b></p>
          <p className='education_text--text'>Bachiller con enfasis en pedagogia</p>
        </div>
      </div>
      <br/>
      <div>
        <h5>Universidad De Manizales</h5>
        <div className='education_text'>
          <p className='education_text--year'><b>2020-Actual</b></p>
          <p className='education_text--text'>Sexto semestre en Ingenieria de Sistemas y Telecomunicaciones</p>
        </div>
      </div>
    </div>
    
  )
}
