import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export const Skills = () => {
  return (
    <div>
      <h4 className='skill_tittle'>Skills</h4>
      <div className='skill_bar'>
        <div><h5>Html</h5></div>
        <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{height: '9px', width: '60%', marginTop:'8px'}}>
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-danger" style={{width: '65%'}}></div>
        </div>
      </div>
      
      <div className='skill_bar'>
        <div><h5>CSS</h5></div>
        <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{height: '9px', width: '60%', marginTop:'8px'}}>
          <div class="progress-bar progress-bar-striped progress-bar-animated" style={{width: '65%'}}></div>
        </div>
      </div>

      <div className='skill_bar'>
        <div><h5>Javascript</h5></div>
        <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{height: '9px', width: '60%', marginTop:'8px'}}>
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" bg-warning style={{width: '50%'}}></div>
        </div>
      </div>

      <div className='skill_bar'>
        <div><h5 >Python</h5></div>
        <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{height: '9px', width: '60%', marginTop:'8px'}}>
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-info"  style={{width: '65%'}}></div>
        </div>
      </div>

      <div className='skill_bar'>
        <div><h5>Unity</h5></div>
        <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{height: '9px', width: '60%', marginTop:'8px'}}>
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width: '30%'}}></div>
        </div>
      </div>
      <br/>
      <hr/>



      <h4 className='skill_tittle'>Languages</h4>

      <div className='skill_bar'>
        <div><h5>Spanish</h5></div>
        <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{height: '9px', width: '60%', marginTop:'8px'}}>
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{width: '100%'}}></div>
        </div>
      </div>

      <div className='skill_bar'>
        <div><h5>English</h5></div>
        <div class="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{height: '9px', width: '60%', marginTop:'8px'}}>
          <div class="progress-bar progress-bar-striped progress-bar-animated bg-warning" style={{width: '40%'}}></div>
        </div>
      </div>


    </div>
    
  )
}
