import React from 'react';
import { Input } from 'semantic-ui-react';

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <Input 
            icon='search'
            iconPosition='left'
            placeholder='search robots' 
            onChange={searchChange}
        />
    );
}

export default SearchBox;