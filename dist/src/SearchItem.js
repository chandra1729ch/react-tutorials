import React from 'react'
const SearchItem = ({search, setSearch}) => {
  return (
    <form name='searchForm' onSubmit={e => e.preventDefault()}>
        <label htmlFor='search'>Search</label>
        <input id='search' type='text' placeholder='Search Item' role='searchbox'
        value= {search} onChange={e => setSearch(e.target.value)}/>
    </form>
  )
}

export default SearchItem