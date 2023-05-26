import React from 'react'

export const FormContact = () => {
  return (
    <div>
        <h4>Envie su formulario</h4>
        <form action="https://formsubmit.co/gohan44marin@gmail.com" method="POST" >
            <label className='Form_label' for="Nombre"><b>Nombre: </b></label>
            <input className='Form_input' type="text" name="name"></input>

            <label className='Form_label' for="Email"><b>Email: </b> </label>
            <input className='Form_input' type="text" name="email"></input>

            <label className='Form_label' for="Asunto"><b>Asunto: </b></label>
            <input className='Form_input' type="text" name="subject"></input>

            <label className='Form_label' for="Comentario"><b>Comentario: </b></label>
            <textarea className='Form_comments' name="comments"></textarea>

            <input type="submit" name="Enviar"></input>
        </form>
    </div>
  )
}
