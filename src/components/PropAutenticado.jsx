import React from 'react'

function PropAutenticado ({autenticado}) {
    if (autenticado) {
        return <h3>Bem-vindo, usuário!</h3>
    } else {
        return null
    }
}
export default PropAutenticado