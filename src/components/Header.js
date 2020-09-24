import React from 'react'
import Searchbar from './Searchbar'

function Header(props) {
    return (
        <div className='header'>
            <h1>Search for a movie</h1>
            <Searchbar fetch = {props.fetch}/>
        </div>
    )
}

export default Header
