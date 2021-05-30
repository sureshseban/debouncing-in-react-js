import React, { useState, useEffect } from 'react'
import debounceSearch from './Service'

function Search(params) {

    const [search, setSearch] = useState('')

    const onChange = (event) => {
        setSearch(event.target.value)
    }

    useEffect(() => {
        if (search.length) {
            debounceSearch()
                .then(res => console.log(res))
        }
    }, [search])

    return (
        <div>
            <h2>Search using debouncing approach!</h2>
            <div>
                <input
                    type="text"
                    value={search}
                    onChange={onChange} />
            </div>
        </div>
    )
}

export default Search