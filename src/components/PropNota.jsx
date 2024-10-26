import React from 'react'

function PropNota ({nota}) {
    if (nota >= 90) {
        return <p className='nota'>Excelente!</p>
    } else if (nota >= 70 && nota < 90) {
        return <p className='nota'>Bom!</p>
    } else {
        return <p className='nota'>Precisa melhorar!</p>
    }
}

export default PropNota
