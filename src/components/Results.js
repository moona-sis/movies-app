import React from 'react'
import Result from './Result'

function Results({data}) {
    return (
        <div className='results'>
            <Result data={data}/>
        </div>
    )
}

export default Results
