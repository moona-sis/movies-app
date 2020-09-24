import React from 'react'
import { Input } from 'antd';

const { Search } = Input;

const Searchbar=(props)=> {
    return (
        <div className='searchbar'>
              <Search
      placeholder="input search text"
      onSearch={value => props.fetch(value)}
      style={{ height: 50 }}
    />
            
        </div>
    )
}

export default Searchbar
