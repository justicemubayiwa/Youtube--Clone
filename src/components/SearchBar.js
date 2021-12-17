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
                    <div style={{display: 'flex',}} >
                        <input 
                            style={{borderTopRightRadius: '0px', borderBottomRightRadius: '0px'}}
                            type="text"  
                            value={term}
                            onChange={(e)=> setTerm(e.target.value)}
                            placeholder="Search"
                        />
                        <button style={{color: 'black', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px'}} className="ui icon button" >
                            <i className="search icon"></i>
                        </button>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}

export default SearchBar