import React from 'react'

function Result({data}) {
    
    return (
        
<div className='results'>
{data?<>(
{data.map((elem, index)=> (
<div key={index} className='result'>
<img src={elem.Poster}/>
            <h3>{elem.Title}</h3>
</div>
))}
</>:<div>no data to display</div>}






</div>
)
}

export default Result
