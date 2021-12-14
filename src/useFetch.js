import React, { useEffect, useState } from 'react'

export const useFetch = url => {
    const [ state, setState] = useState({
        data: null,
        loading: false
    })

    useEffect( () => {
        ( async () => {
            setState({  
                ...state, loading: true
            })
            await fetch(url)
            .then( idx => idx.json())
            .then( _idx => {
                console.log('_idx', _idx)
                setState({
                    data: _idx,
                    loading: false
                })
            })
            .catch(err => console.log('error fetching: ', err))
        })()

    },[url])
    
    return state
}