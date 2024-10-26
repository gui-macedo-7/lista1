import React from 'react'

function PropLogado ({logado}) {
    if (logado == true) {
        return <button className='button'><p className='text-button'>Sair</p></button>
    } else if (logado == false) {
        return <button className='button-2'><p className='text-button'>Entrar</p></button>
    }
}

export default PropLogado