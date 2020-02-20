import React from 'react';

const Search = (props) => {
    return ( 

        <div>
        <form>
            <label>Search </label>
            <input type="text" name="name"
            value={props.value} 
            onChange={props.onChange}/>
        </form>
    </div>

     );
}
 
export default Search;