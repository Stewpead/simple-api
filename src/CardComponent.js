import React from 'react'

const CardComponent = ({data}) => {

    return (
        <>
            <p style={{fontSize: 24}}>{data.title}</p>
            <p style={{fontSize: 16}}>{data.description}</p>
        </>
    )
}
export default CardComponent