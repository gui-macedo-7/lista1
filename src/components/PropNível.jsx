import React from 'react'

function PropNível ({nivel}) {
    if (nivel == 'iniciante') {
    return <p className='nivel'>Bem-vindo, Iniciante!</p>
  } else if (nivel == 'intermediário') {
    return <p className='nivel'>Está progredindo!</p>
  } else if (nivel == 'avançado') {
    return <p className='nivel'>Parabéns, especialista!</p>
  }
}

export default PropNível
