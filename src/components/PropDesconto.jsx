import React from 'react'

const PropDesconto = ({temDesconto}) => {
    return (
        <div className='desconto'>
            {temDesconto ? "Desconto aplicado!" : "Sem Desconto"}
        </div>
    )
}

export default PropDesconto