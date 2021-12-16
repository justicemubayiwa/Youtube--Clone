import React, { useState } from 'react'

const SearchBar = ({onFormSubmit}) => {
    const [term, setTerm] = useState('')

    const onSubmit=(e)=> {
        e.preventDefault();

        onFormSubmit(term);
    }

    return (
        <div style={{marginTop: '20px',}} className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <div style={{display: 'flex',}} >
                        <input 
                            type="text"  
                            value={term}
                            onChange={(e)=> setTerm(e.target.value)}
                            placeholder="Search"
                        />
                        <button class="ui icon button" >
                            <i class="search icon"></i>
                        </button>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}

export default SearchBar