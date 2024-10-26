import React from 'react'

const PropOnline = ({online}) => {
    return (
        <div className='online'>
            {online ? "Usuário online" : "Usuário Offline"}
        </div>
    )
}

export default PropOnline