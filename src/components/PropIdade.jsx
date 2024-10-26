import React from 'react'

function PropIdade ({idade}) {
    if (idade >= 18) {
        return <h4>Você é adulto</h4>
    } else {
        return <h4>Você é menor de idade</h4>
    }
}

export default PropIdade