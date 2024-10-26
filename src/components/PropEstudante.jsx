import React from 'react'

function PropEstudante ({estudante}) {
    if (estudante) {
        return <p>Você é estudante</p>
    } else {
        return <p>Você não é um estudante</p>
    }
}

export default PropEstudante